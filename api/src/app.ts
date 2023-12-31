import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import prisma from "./prisma";
import bodyParser from "body-parser";

import game from  "./routes/game";
import usersRoutes from './routes/users';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/game", game);

app.use("/api/users", usersRoutes);
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});