import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongooseConfig from "./config/mongoose.config";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4200;
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  mongooseConfig;
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
