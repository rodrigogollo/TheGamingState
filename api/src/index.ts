import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors"

import IGDBgameRoutes from  "./routes/game";
import userRoutes from './routes/user';
import userProfileRoutes from './routes/user-profile';
import userRatingsRoutes from './routes/user-ratings';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1/game", IGDBgameRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/profile", userProfileRoutes);
app.use("/api/v1/ratings", userRatingsRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
