import mongoose, { Schema } from "mongoose";
import { required } from "mongoose-typescript";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      max: 20,
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: "users",
  }
);

const User = mongoose.model("User", UserSchema, "users");
export default User;