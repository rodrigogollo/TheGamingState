import express, { Request, Response, Router } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config()
const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
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
  console.log(data);
  res.send(data)
});

async function validateToken() {
  const url = `https://id.twitch.tv/oauth2/token?client_id=${process.env.IGDB_CLIENT_ID}&client_secret=${process.env.IGDB_CLIENT_SECRET}&grant_type=client_credentials`;

  const { data } = await axios.post(url);
  return data.access_token;
}

export default router;
