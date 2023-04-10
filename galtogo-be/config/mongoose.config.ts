import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.ATLAS_URI || "mongodb://localhost:4200";

mongoose.connect(connectionString);
mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("connected to mongoDB");
});

export default mongoose.connection;
