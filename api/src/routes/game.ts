import { Router } from 'express';
import { getGames, getGameById } from '../controllers/game';
const router = Router();

router.get('/', getGames);
router.get('/:gameId', getGameById);

export default router;
// import express, { Request, Response, Router } from "express";
// import axios from "axios";
//
// const router: Router = express.Router();
//
// router.get("/", async (req: Request, res: Response) => {
//   const url = "https://api.igdb.com/v4/games";
//   const token = await validateToken()
//
//   const { data } = await axios.get(url, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Client-ID": process.env.IGDB_CLIENT_ID
//     },
//     params: {
//       fields: "id, name", 
//     }
//   });
//
//   res.send(data)
// });
//
// router.get("/:gameId", async (req: Request, res: Response) => {
//   try {
//     const { gameId } = req.params;
//
//     const url = "https://api.igdb.com/v4/games";
//     const token = await validateToken()
//
//     const { data } = await axios.post(url, 
//       `fields id, name; where id = ${gameId};`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Client-ID": process.env.IGDB_CLIENT_ID
//           
//         },
//     });
//
//     res.send(data)
//   } catch (e) {
//     console.log(e);
//     res.sendStatus(500);
//   }
// });
//
// async function validateToken() {
//   const url = `https://id.twitch.tv/oauth2/token?client_id=${process.env.IGDB_CLIENT_ID}&client_secret=${process.env.IGDB_CLIENT_SECRET}&grant_type=client_credentials`;
//
//   const { data } = await axios.post(url);
//   return data.access_token;
// }
//
// export default router;
