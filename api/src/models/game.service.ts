import axios, { AxiosError } from "axios";

type IGDBTokenResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
  expiration: Date;
} 

let IGDBtoken = <IGDBTokenResponse>{};

export async function getGames() {
  try { 
    if (Object.keys(IGDBtoken).length == 0 || IGDBtoken?.expiration?.getTime() < new Date().getTime()) {
      IGDBtoken = await generateToken();
    }

    const url = "https://api.igdb.com/v4/games";
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${IGDBtoken.access_token}`,
        "Client-ID": process.env.IGDB_CLIENT_ID
      },
      params: {
        fields: "id, name, summary, release_dates.*, cover.*, platforms.*, involved_companies.*; limit 20; sort rating desc;", 
      }
    });

    return data;
  } catch (e) {
      console.log(e)
      if (e instanceof AxiosError && e.response?.status == 401){ 
        console.log(e?.response?.status);
        IGDBtoken = <IGDBTokenResponse>{};
        getGames();
    } else {
      throw e;
    }
  } 
}

export async function getGameById(gameId: string) {
    if (Object.keys(IGDBtoken).length == 0 || IGDBtoken?.expiration?.getTime() < new Date().getTime()) {
      IGDBtoken = await generateToken();
    }

    const url = "https://api.igdb.com/v4/games";
    const gameData = await axios.post(url, 
      `fields id, name, summary, release_dates.*, cover.*, platforms.*, involved_companies.*; where id = ${gameId};`,
      {
        headers: {
          Authorization: `Bearer ${IGDBtoken.access_token}`,
          "Client-ID": process.env.IGDB_CLIENT_ID
        },
    });

    return gameData.data;
}

async function generateToken():Promise<IGDBTokenResponse> {
  const url = `https://id.twitch.tv/oauth2/token?client_id=${process.env.IGDB_CLIENT_ID}&client_secret=${process.env.IGDB_CLIENT_SECRET}&grant_type=client_credentials`;

  const { data } = await axios.post(url);

  const expiration = new Date();
  expiration.setSeconds(expiration.getSeconds() + data.expires_in);

  const response:IGDBTokenResponse = {
    access_token: data.access_token,
    expires_in: data.expires_in,
    token_type: data.token_type,
    expiration: expiration
  }

  return response;
}
