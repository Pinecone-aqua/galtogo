/* eslint-disable @typescript-eslint/no-misused-promises */
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
  const [tableData, setTableData] = useState<ITable[]>(tablesData);
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [showAddModal, setShowAddModal] = useState("");

  const handleAdd = () => {
    setShowAddModal(!showAddModal);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange: (e: any) => Promise<void> = async (e) => {
    try {
      setDate(e.target.value);
      console.log(e.target.value);
      const newData: Promise<IReservation[]> = await axios
        .get(`http://localhost:5050/reservation/date/${e.target.value}`)
        .then((res) => res.data)
        .catch((err) => console.log("axios: ", err));
      setDatas(await newData);
    } catch (error) {
      console.log("axios error: ", error);
    }
  };

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
              onChange={handleChange}
            />
          </div>
          {showAddModal ? <AddTableModal /> : <></>}
          <div className="m-3 lg:grid lg:grid-cols-2">
            {tablesData.map((table, index) => (
              <div key={index}>
                <TableBar reservations={datas} table={table} />
              </div>
            ))}
          </div>

          <div className="m-3">
            <RoomArea tablesData={tablesData} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: () => Promise<{
  props: {
    reservationData: IReservation[] | null;
    tablesData: ITable[] | null;
  };
}> = async () => {
  const date = moment(new Date()).format("YYYY-MM-DD");
  const reservationData = await axios
    .get(`http://localhost:5050/reservation/date/${date}`)
    .then((res) => res.data);
  const tablesData = await axios
    .get(`http://localhost:5050/table`)
    .then((res) => res.data);
  return {
    props: {
      reservationData,
      tablesData,
    },
  };
};
