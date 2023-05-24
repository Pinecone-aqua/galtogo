import Layout from "@/components/Layout";
import { useReservation } from "@/context/ReservationContext";
import { useUser } from "@/context/UserContext";
import jwtDecode from "jwt-decode";

export default function Account() {
  const { newReservation } = useReservation();
  const { currentUser } = useUser();

  if (currentUser) console.log(jwtDecode(currentUser));

  return (
    <Layout>
      <div className="flex flex-col justify-center pt-28 mx-6">
        <div>Account Page</div>

        <div>
          <div>id:{newReservation._id}</div>
          <div>date:{newReservation.date}</div>
          <div>persons:{newReservation.persons}</div>
          <div>table:{newReservation.table}</div>
          <div>time:{newReservation.time}</div>
          <div>user_id:{newReservation.user}</div>
        </div>
        {currentUser && (
          <>
            <div>
              {" "}
              currentUser:{JSON.parse(jwtDecode<string>(currentUser)).firstName}
            </div>
            <div>
              {" "}
              currentUserPhone:
              {JSON.parse(jwtDecode<string>(currentUser)).phone}
            </div>
            <div>
              {" "}
              currentUserRole:{JSON.parse(jwtDecode<string>(currentUser)).role}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
