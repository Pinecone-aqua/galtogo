import useDragger from "@/hooks/useDragger";
import Table from "../subComponents/Table";
import { TableShape, TableSize } from "@/utils/constants";
interface RoomTableProps {
  table: ITable;
  shape: string;
  size: string;
  newTable: ITable;
}
const RoomTable = ({
  table,
  shape,
  size,
  newTable,
}: RoomTableProps): JSX.Element => {
  useDragger(table);
  const tableSize = Object.values(TableSize);
  const tableShape = Object.values(TableShape);

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
        shape="round"
        size="medium"
        // size={
        //   size === TableSize.SMALL
        //     ? "small"
        //     : size === TableSize.MEDIUM
        //     ? "medium"
        //     : "large"
        // }
        // shape={
        //   shape === TableShape.ROUND
        //     ? "round"
        //     : size === TableShape.SQUARE
        //     ? "square"
        //     : "rectangle"
        // }
      >
        Table {table.name}
      </Table>
    </div>
  );
};

export default RoomTable;
