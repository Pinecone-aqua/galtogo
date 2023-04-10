import express, { Request, Response } from "express";
import User from "../models/User";

const userApi = express.Router();

userApi.get("/user", async (req: Request, res: Response) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
});

export default userApi;
