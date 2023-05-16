interface IReservation {
  _id?: mongoose.Schema.Types.ObjectId;
  time: string;
  date: string;
  persons: number;
  user: IUser;
  table: ITable;
  status: string;
}

interface IUser {
  _id?: mongoose.Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface ITable {
  _id?: mongoose.Schema.Types.ObjectId;
  name: number;
  capacity: number;
  size: enum;
  shape: enum;
  coords: {
    posX: number;
    posY: number;
  };
}

interface ICategory {
  _id?: mongoose.Schema.Types.ObjectId;
  name: string;
}

interface IProduct {
  _id?: mongoose.Schema.Types.ObjectId;
  desc: string;
  price: number;
  category: mongoose.Schema.Types.ObjectId;
  img: string;
}

interface IDisabledDay {
  _id?: mongoose.Schema.Types.ObjectId;
  year: number;
  month: number;
  day: number;
  description: string;
}

interface ICard {
  img: string;
  foodname: string;
  price: number;
  desc: string;
  category: {
    name: string;
  };
}

interface Inputs {
  category: string;
  exampleRequired: string;
  foodname: string;
  price: string;
  desc: string;
  file: string;
}
