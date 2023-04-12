import express, { Request, Response } from "express";
import Reservation from "../models/Reservation";

const reservationApi = express.Router();

//Read all reservations
reservationApi.get("/reservations", async (req: Request, res: Response) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(404).send("Error getting reservations");
  }
});

//Read one reservation
reservationApi.get("/reservation/:id", async (req: Request, res: Response) => {
  try {
    const reservation = await Reservation.findOne({ _id: req.body.id }).limit(
      1
    );
    res.status(200).json(reservation);
  } catch (error) {
    res.status(404).send("Error getting a reservation");
  }
});

//Create new reservation
reservationApi.post("/addreservation", async (req: Request, res: Response) => {
  try {
    const { booking_date, start_date, end_date, booking_seats, user_id } =
      req.body;
    const addreservation = new Reservation(req.body);
    const newreservation = await addreservation.save();
    res.status(200).json(newreservation);
  } catch (error) {
    res.status(404).send("Error creating reservation");
  }
});

//Delete reservation
reservationApi.delete(
  "/reservation/:id",
  async (req: Request, res: Response) => {
    try {
      const reservation = await Reservation.findOne({
        _id: req.body._id,
      }).limit(1);
      if (reservation) {
        res.status(200).json(reservation);
      } else {
        res.status(404).send("Reservation not found");
      }
    } catch (error) {
      res.status(404).send("Error deleting reservation");
    }
  }
);

export default reservationApi;
