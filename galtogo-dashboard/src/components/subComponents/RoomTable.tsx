import useDragger from "@/hooks/useDragger";
import Table from "../subComponents/Table";
import { FC } from "react";

interface RoomTableProps {
  table: ITable;
  size: string;
  shape: string;
}

const RoomTable: FC<RoomTableProps> = ({ table }: RoomTableProps) => {
  useDragger(table);

  const size = table.size;
  const shape = table.shape;

  return (
    <div
      id={table._id}
      style={{
        top: table.coords.posY,
        left: table.coords.posX,
      }}
      className="room-table absolute p-3 m-3 active:bg-blue-400 active:scale-95 rounded-md w-fit cursor-pointer"
    >
      <Table
        variant="default"
        shape={shape}
        size={size}
        className="table-button text-center"
      >
        # {table.name}
      </Table>
    </div>
  );
};

export default RoomTable;
