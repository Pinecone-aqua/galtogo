import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      max: 20,
    },
    lastName: {
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
      max: 99999999,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", UserSchema);
export default User;
