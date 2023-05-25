interface IReservation {
  _id?: mongoose.Schema.Types.ObjectId;
  time: string;
  date: string;
  persons: number;
  user?: mongoose.Schema.Types.ObjectId;
  table?: mongoose.Schema.Types.ObjectId;
}

interface ICategory {
  _id?: mongoose.Schema.Types.ObjectId;
  name: string | string;
}

interface IProduct {
  _id?: mongoose.Schema.Types.ObjectId;
  title: string;
  desc: string;
  price: number;
  img: string;
  category: ICategory;
}

interface IUser {
  _id?: mongoose.Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
}

interface ITable {
  _id?: mongoose.Schema.Types.ObjectId;
  name: number;
  capacity: number;
  isActive: boolean;
  shape: enum;
  size: enum;
  coords: {
    posX: number;
    posY: number;
  };
}

interface IDate {
  year: number;
  month: number;
  day: number;
}

interface IDisabledDay {
  _id?: mongoose.Schema.Types.ObjectId;
  year: number;
  month: number;
  day: number;
  description: string;
}

interface IOccupied {
  time: string;
  isOccupied: boolean;
}

interface ILocation {
  lat: number;
  lng: number;
}
