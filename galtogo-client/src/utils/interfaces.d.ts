interface IReservation {
  _id: mongoose.Schema.Types.ObjectId;
  time: string;
  date: string;
  persons: number;
  user: IUser;
  table: ITable;
  status: string;
}


interface ICategory {
  _id:  mongoose.Schema.Types.ObjectId;
  name: string,
}

interface IProduct {
  title: string,
  _id: string,
  desc: string,
  price: number,
  img: string,
  category: ICategory,

}

interface IUser {
  _id: mongoose.Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
}

interface ITable {
  name: number;
  capacity: number;
  isActive: boolean;
}

interface IDate {
  year: number;
  month: number;
  day: number;
}

interface IDisabledDay {
  _id: mongoose.Schema.Types.ObjectId;
  year: number;
  month: number;
  day: number;
  description: string;
}
