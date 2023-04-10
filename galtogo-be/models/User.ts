import mongoose, { Schema } from "mongoose";

interface iUser {
  name: string;
  phone: number;
  email: string;
}

const UserSchema: Schema = new Schema({});

const User = mongoose.model<iUser>("User", UserSchema, "users");

export default User;

// const UserSchema = new mongoose.Schema<iUser>(
//   {
//     name: {
//       type: String,
//       required: true,
//       max: 20,
//     },
//     phone: {
//       type: Number,
//       required: true,
//       unique: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//   },
//   { collection: "users" }
// );

// const User = mongoose.model("User", UserSchema, "users");

// export default User;
