import { Schema, model } from "mongoose";

const ReservationSchema = new Schema(
  {
    date: { type: String, required: true },
    hour: { type: String, required: true },
    persons: { type: Number, required: true },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    isActive: { type: Boolean, default: true },
    table_id: {
      type: Schema.Types.ObjectId,
      ref: "Table",
    },
  },
  { timestamps: true }
);

const Reservation = model("Reservation", ReservationSchema);
export default Reservation;
