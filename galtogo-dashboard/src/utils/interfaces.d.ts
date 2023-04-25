interface IReservation {
  _id: mongoose.Schema.Types.ObjectId;
  time: [string];
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
  name: number;
  capacity: number;
  isActive: boolean;
}
