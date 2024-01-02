import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import prisma from "./prisma";

import game from  "./routes/game";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/api/game", game);

app.get("/", async (req: Request, res: Response) => {
  const user = await prisma.users.findFirst();
  console.log(user);
  res.send("Express + TypeScript Server" + user?.email);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});