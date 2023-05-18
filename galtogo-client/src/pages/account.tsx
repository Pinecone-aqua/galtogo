import Layout from "@/components/Layout";
import { useReservation } from "@/context/ReservationContext";
import { useUser } from "@/context/UserContext";

export default function Account() {
  const { newReservation } = useReservation();
  const { currentUser } = useUser();
  return (
    <Layout>
      <div className="flex justify-center pt-28">
        <div>Account Page</div>

        <div>
          <div>id:{newReservation._id}</div>
          <div>date:{newReservation.date}</div>
          <div>persons:{newReservation.persons}</div>
          <div>table:{newReservation.table}</div>
          <div>time:{newReservation.time}</div>
          <div>user_id:{newReservation.user}</div>
          {currentUser && <div> currentUser:{currentUser}</div>}
        </div>
      </div>
    </Layout>
  );
}
