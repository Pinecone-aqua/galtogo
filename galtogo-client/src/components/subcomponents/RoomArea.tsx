import { Dispatch, SetStateAction, useState } from "react";
import ReactLoading from "react-loading";
import Table from "./Table";

const RoomArea = ({
  tablesData,
  setNewReservation,
  setTableNumber,
}: {
  tablesData: ITable[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setNewReservation: any;
  newReservation: IReservation;
  setTableNumber: Dispatch<SetStateAction<number>>;
}) => {
  const [current, setCurrent] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickTable = ({ e, name }: { e: any; name: number }): void => {
    setCurrent(e.target.id);
    setTableNumber(name);
    setNewReservation((prev: IReservation) => ({
      ...prev,
      table: e.target.id,
    }));
    console.log(e.target.id);
  };

  return (
    <div className="fit-content rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="relative room-area rounded-lg bg-white max-w-[800px] h-[600px] mx-auto overflow-x-auto overflow-hidden">
        {tablesData.length === 0 ? (
          <div className="loader-container w-full h-full flex justify-center items-center">
            <ReactLoading color="blue" height={50} width={50} type="spin" />
          </div>
        ) : (
          tablesData.map((table, index) => (
            <div
              key={index}
              style={{
                top: table.coords.posY,
                left: table.coords.posX,
              }}
              className="absolute"
            >
              <Table
                variant="default"
                size={table.size}
                shape={table.shape}
                id={table._id}
                className={`${current === table._id ? " bg-green-400" : ""}`}
                onClick={(e) => handleClickTable({ e, name: table.name })}
              >
                #{table.name}
              </Table>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default RoomArea;
