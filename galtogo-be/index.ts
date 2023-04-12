import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongooseConfig from "./config/mongoose-config";
import userApi from "./controller/user-controller";
import reservationApi from "./controller/reservation-controller";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4200;

app.use(express.json());
app.use(cors());

app.use(userApi);
app.use(reservationApi);

app.listen(port, () => {
  mongooseConfig;
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
