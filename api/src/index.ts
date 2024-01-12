import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import game from  "./routes/game";
import userRoutes from './routes/user';
import userProfileRoutes from './routes/userProfile';
import userRateRoute from './routes/userRates';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/api/v1/game", game);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/userprofile", userProfileRoutes);
app.use("/api/v1/rate", userRateRoute);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
