import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongooseConfig from "./config/mongoose.config";
import userApi from "./routes/user.api";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4200;

app.use(express.json());
app.use(cors());

app.use(userApi);

app.use("/", userApi);

app.listen(port, () => {
  mongooseConfig;
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
