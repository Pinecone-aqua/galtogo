import mongoose, { Schema } from "mongoose";

const ReservationSchema = new mongoose.Schema(
  {
    booking_date: { type: String, required: true },
    booking_hour: { type: String, required: true },
    booking_seats: { type: Number, required: true },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    booking_status: Boolean,
    table_id: {
      type: Schema.Types.ObjectId,
      ref: "Table",
    },
  },
  { timestamps: true }
);

const Reservation = mongoose.model("Reservation", ReservationSchema);
export default Reservation;
