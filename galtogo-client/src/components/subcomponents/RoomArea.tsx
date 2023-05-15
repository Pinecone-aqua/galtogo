import { useState } from "react";
import TimeTable from "./TimeTable";
import ReactLoading from "react-loading";
import Button from "./Button";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const RoomArea = ({
  tablesData,
  setNewReservation,
  newReservation,
}: {
  tablesData: ITable[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setNewReservation: any;
  newReservation: IReservation;
}) => {
  const [current, setCurrent] = useState("");
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickTable = (e: any): void => {
    console.log(e.target.id);
    setCurrent(e.target.id);
    setNewReservation((prev: IReservation) => ({
      ...prev,
      table: e.target.id,
    }));
  };

  const handleConfirm = () => {
    console.log("newReservation: ", newReservation);
    localStorage.setItem("newReservation: ", JSON.stringify(newReservation));
    toast.success("Reservation successfully added!");
    router.push("/loginPage");
  };

  return (
    <div className="bg-gray-50  w-full p-3 rounded-lg mx-3 my-3 ">
      <p className="font-semibold m-3">Table position</p>

      <div className="relative room-area bg-white border-4 border-sky-800  max-w-[800px] h-[600px] mx-auto overflow-x-auto overflow-hidden">
        {tablesData.length == 0 ? (
          <div className="loader-container w-full h-full flex justify-center items-center">
            <ReactLoading color="blue" height={50} width={50} type="spin" />
          </div>
        ) : (
          tablesData.map((table, index) => (
            <div
              id={table._id}
              key={index}
              onClick={handleClickTable}
              style={{
                top: table.coords.posY,
                left: table.coords.posX,
              }}
              className={`${
                current === table._id ? "bg-green-500" : ""
              } room-table absolute p-3 m-3 bg-gray-200 active:bg-blue-400 active:scale-95 rounded-md w-fit cursor-pointer`}
            >
              Table {table.name}
            </div>
          ))
        )}
      </div>
      {current && (
        <TimeTable
          setNewReservation={setNewReservation}
          newReservation={newReservation}
        />
      )}
      {newReservation.time.length > 0 && (
        <div className="flex justify-center">
          <Button variant="default" size="sm" onClick={handleConfirm}>
            Confirm Reservation
          </Button>
        </div>
      )}
    </div>
  );
};

export default RoomArea;
