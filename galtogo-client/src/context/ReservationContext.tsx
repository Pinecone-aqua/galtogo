import moment from "moment";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ReservationContextType {
  newReservation: IReservation;
  setNewReservation: Dispatch<SetStateAction<IReservation>>;
}

const ReservationContext = createContext<ReservationContextType>(
  {} as ReservationContextType
);

export function useReservation() {
  return useContext(ReservationContext);
}

interface UserProviderType {
  children: ReactNode;
}

export default function ReservationProvider({ children }: UserProviderType) {
  const [newReservation, setNewReservation] = useState<IReservation>({
    time: "",
    date: moment().format("YYYY-MM-DD"),
    persons: 0,
    table: "",
    user: "",
  });

  return (
    <ReservationContext.Provider value={{ newReservation, setNewReservation }}>
      {children}
    </ReservationContext.Provider>
  );
}
