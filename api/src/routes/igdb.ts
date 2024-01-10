import axios from "axios";

export async function validateIGDBToken() {
  const url = "https://id.twitch.tv/oauth2/token"

  const { data } = await axios.post(url, null, {
    params: {
      client_id: process.env.IGDB_CLIENT_ID,
      client_secret: process.env.IGDB_CLIENT_SECRET,
      grant_type: 'client_credentials'
    }
  });

  return data.access_token;
}