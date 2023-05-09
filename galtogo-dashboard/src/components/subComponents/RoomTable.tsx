import useDragger from "@/hooks/useDragger";

const RoomTable = ({ table }: { table: ITable }): JSX.Element => {
  useDragger(table);
  return (
    <div
      id={table._id}
      style={{
        top: table.coords.posY,
        left: table.coords.posX,
      }}
      className="room-table absolute p-3 m-3 bg-gray-200 active:bg-blue-400 active:scale-95 rounded-md w-fit cursor-pointer"
    >
      Table {table.name}
    </div>
  );
};

export default RoomTable;
