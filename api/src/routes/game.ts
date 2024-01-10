import express, { Request, Response, Router } from "express";
import axios from "axios";
import { validateIGDBToken } from "./igdb";
import dotenv from "dotenv";

dotenv.config()
const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const url = "https://api.igdb.com/v4/games";
  const token = await validateIGDBToken()

  const { data } = await axios.get(url, {
    params: {
      fields: "id, name",
      where: {
        limit: 10,
        //id: 1942
      }
    },
    headers: {
      Authorization: `Bearer ${token}`,
      "Client-ID": process.env.IGDB_CLIENT_ID
    }
  });

  res.send(data)
});

export default router;