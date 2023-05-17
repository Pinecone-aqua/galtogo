interface IReservation {
  _id?: mongoose.Schema.Types.ObjectId;
  time: string;
  date: string;
  persons: number;
  user?: IUser;
  table?: ITable;
}

interface ICategory {
  _id?: mongoose.Schema.Types.ObjectId;
  name: string;
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
