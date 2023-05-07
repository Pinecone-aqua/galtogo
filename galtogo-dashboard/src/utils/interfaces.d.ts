interface IReservation {
  _id: mongoose.Schema.Types.ObjectId;
  time: string;
  date: string;
  persons: number;
  user: IUser;
  table: ITable;
  status: string;
}

interface IUser {
  _id: mongoose.Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
}

interface ITable {
  _id: mongoose.Schema.Types.ObjectId;
  name: number;
  capacity: number;
  isActive: boolean;
  coords: {
    posX: number;
    posY: number;
  };
}

interface ICategory {
  name: string,
  _id: mongoose.Schema.Types.ObjectId;
}

interface IProduct {
  _id: string,
  desc: string,
  price: number,
  category: mongoose.Schema.Types.ObjectId;
  img: string,
}


interface IDisabledDay {
  _id: mongoose.Schema.Types.ObjectId;
  year: number;
  month: number;
  day: number;
  description: string;
}
