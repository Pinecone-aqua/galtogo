import express, { Request, Response } from "express";
import User from "../models/User";

const userApi = express.Router();

//Read all users
userApi.get("/all", async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).send("Error getting users");
  }
});

//Read one user
userApi.get("/:id", async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ _id: req.body._id }).limit(1);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).send("Error getting a user");
  }
});

//Create new user
userApi.post("/add", async (req: Request, res: Response) => {
  try {
    const { name, phone, email, password } = req.body;
    const adduser = new User(req.body);
    const newuser = await adduser.save();
    res.status(200).json(newuser);
    console.log("add user", adduser);
  } catch (error) {
    console.log(error);
    res.status(404).send("Error creating user");
  }
});

//Delete user
userApi.delete("/:id", async (req: Request, res: Response) => {
  console.log("delete", req.body._id);
  try {
    const users = await User.findOne({ _id: req.body._id }).limit(1);
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error deleting user");
  }
});

export default userApi;
