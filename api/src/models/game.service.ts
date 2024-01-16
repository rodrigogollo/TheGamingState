import axios from "axios";

export async function getGames() {
  const url = "https://api.igdb.com/v4/games";
  const token = await validateToken()

  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Client-ID": process.env.IGDB_CLIENT_ID
    },
    params: {
      fields: "id, name", 
    }
  });

  return data;
}

export async function getGameById(gameId: string) {
    const url = "https://api.igdb.com/v4/games";
    const token = await validateToken()

    const { data } = await axios.post(url, 
      `fields id, name; where id = ${gameId};`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Client-ID": process.env.IGDB_CLIENT_ID
          
        },
    });

    return data;
}

async function validateToken() {
  const url = `https://id.twitch.tv/oauth2/token?client_id=${process.env.IGDB_CLIENT_ID}&client_secret=${process.env.IGDB_CLIENT_SECRET}&grant_type=client_credentials`;

  const { data } = await axios.post(url);
  return data.access_token;
}
