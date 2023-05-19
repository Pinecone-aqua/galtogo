import Layout from "@/components/Layout";
import Button from "@/components/subComponents/Button";
import TableBar from "@/components/subComponents/TableBar";
import axios from "axios";
import moment from "moment";
import { useState } from "react";
import RoomArea from "@/components/subComponents/RoomArea";
import AddTableModal from "@/components/subComponents/AddTableModal";

export default function Tables(props: {
  reservationData: IReservation[];
  tablesData: ITable[];
}): JSX.Element {
  const { reservationData, tablesData } = props;
  const [datas, setDatas] = useState<IReservation[]>(reservationData);
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [showAddModal, setShowAddModal] = useState(false);
  const [tablesDatas, setTablesDatas] = useState<ITable[]>(tablesData);

  const handleAdd = () => {
    setShowAddModal(true);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange: (e: any) => Promise<void> = async (e) => {
    try {
      setDate(e.target.value);
      console.log(e.target.value);
      const newData: Promise<IReservation[]> = await axios
        .get(
          `${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/reservation/date/${e.target.value}`
        )
        .then((res) => res.data)
        .catch((err) => console.log("axios: ", err));
      setDatas(await newData);
    } catch (error) {
      console.log("axios error: ", error);
    }
  };

  function handleDeleteTable(id: string) {
    setTablesDatas((prevTablesData) =>
      prevTablesData.filter((table) => table._id !== id)
    );
  }

  return (
    <Layout>
      <div className="p-4 ">
        <div className="w-full m-auto p-4 bg-white border rounded-lg overflow-y-auto">
          <div className="flex items-center justify-between">
            <Button
              type="button"
              variant="default"
              size="lg"
              className="sm:mx-6 m-3"
              onClick={handleAdd}
            >
              Add Table
            </Button>
            <input
              className="rounded-lg p-3 mb-4 focus:outline-none border"
              type="date"
              value={date}
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onChange={handleChange}
            />
          </div>
          {showAddModal ? (
            <AddTableModal setTablesDatas={setTablesDatas} />
          ) : (
            <></>
          )}
          <div className="m-3 lg:grid lg:grid-cols-2">
            {tablesDatas.map((table, i) => (
              <div key={i}>
                <TableBar
                  key={table._id}
                  reservations={datas}
                  table={table}
                  onDeleteTable={handleDeleteTable}
                  tablesData={[]}
                />
              </div>
            ))}
          </div>

          <div className="m-3">
            <RoomArea tablesDatas={tablesDatas} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: () => Promise<{
  props: {
    reservationData: IReservation[];
    tablesData: ITable[];
  };
}> = async () => {
  const date = moment(new Date()).format("YYYY-MM-DD");
  const reservationData = await axios
    .get(
      `${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/reservation/date/${date}`
    )
    .then((res) => res.data);
  const tablesData = await axios
    .get(`${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/table`)
    .then((res) => res.data);
  return {
    props: {
      reservationData,
      tablesData,
    },
  };
};
