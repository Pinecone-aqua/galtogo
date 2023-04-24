import Layout from "@/components/Layout";
import Button from "@/components/subComponents/Button";
import TableBar from "@/components/subComponents/TableBar";
import axios from "axios";
import moment from "moment";
import { useState } from "react";

export default function Tables(props: {
  reservationData: IReservation[];
}): JSX.Element {
  const { reservationData } = props;
  const [datas, setDatas] = useState<IReservation[]>(reservationData);

  const handleAdd = () => {
    console.log("Reservation add button");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDate = async (e: any) => {
    e.preventDefault();
    console.log("date: ", e.target.value);
    try {
      setDatas(e.target.value);
      const result = await axios
        .get(`http://localhost:5050/reservation/${e.target.value}`)
        .then((res) => res.data)
        .catch((err) => console.log(err));
      // console.log("result", result);
    } catch (error) {
      console.log(error);
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
            <input type="date" onChange={handleDate} />
          </div>
          <div className="w-full m-auto p-4 bg-white border rounded-lg overflow-y-auto">
            {datas.map((reservation, index) => (
              <div key={index}>
                <TableBar reservation={reservation} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: () => Promise<{
  props: { reservationData: IReservation[] | null };
}> = async () => {
  const date = moment(new Date()).format("YYYY-MM-DD");
  const reservationData = await axios
    .get(`http://localhost:5050/reservation/2023-04-20`)
    .then((res) => res.data);
  return {
    props: {
      reservationData,
    },
  };
};
