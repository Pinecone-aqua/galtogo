import { useState } from "react";
import Button from "./Button";
import RoomTable from "./RoomTable";

const RoomArea = ({ tablesDatas }: { tablesDatas: ITable[] }) => {
  const [isEdit, setIsEdit] = useState<boolean>(true);

  return (
    <div className="bg-gray-50  w-full p-3 rounded-lg mx-3 my-3 ">
      <div className="grid grid-cols-2 items-center">
        <p className="font-semibold m-3">Table position</p>
        <div className="justify-self-end flex gap-3">
          {isEdit && (
            <Button
              variant={"green"}
              size={"lg"}
              onClick={() => setIsEdit(false)}
            >
              Edit
            </Button>
          )}
          {!isEdit && (
            <Button
              variant={"yellow"}
              size={"lg"}
              onClick={() => setIsEdit(true)}
            >
              Save
            </Button>
          )}
        </div>
      </div>

      <div className="relative room-area bg-white border-4 border-sky-800   w-[800px] h-[600px] mx-auto overflow-hidden">
        {isEdit && (
          <div className="absolute bg-black/5 w-full h-[600px] mx-auto z-10">
            {""}
          </div>
        )}
        {tablesDatas.map((table, index) => (
          <RoomTable table={table} key={index} size={""} shape={""} />
        ))}
      </div>
    </div>
  );
};

export default RoomArea;
