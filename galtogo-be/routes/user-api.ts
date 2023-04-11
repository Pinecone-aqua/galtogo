import express, { Request, Response } from "express";
import {
  getUsers,
  getUser,
  addUser,
  deleteUser,
} from "../services/user-services";

const userApi = express.Router();

//Read all users
userApi.get("/users", getUsers);

//Read one user
userApi.get("/users/:id", getUser);

//Create new user
userApi.post("/adduser", addUser);

//Delete user
userApi.delete("/user/:id", deleteUser);

export default userApi;
