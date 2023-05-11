import useDragger from "@/hooks/useDragger";
import Table from "../subComponents/Table";

const RoomTable = ({ table }: { table: ITable }): JSX.Element => {
  useDragger(table);
  return (
    <div
      id={table._id}
      style={{
        top: table.coords.posY,
        left: table.coords.posX,
      }}
      className="room-table absolute p-3 m-3 active:bg-blue-400 active:scale-95 rounded-md w-fit cursor-pointer"
    >
      <Table variant="default" shape="round" seats="m">
        Table {table.name}
      </Table>
    </div>
  );
};

export default RoomTable;
