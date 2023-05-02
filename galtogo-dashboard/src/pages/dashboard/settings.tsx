import Layout from "@/components/Layout";
import Button from "@/components/subComponents/Button";
// import DatePicker from "@amir04lm26/react-modern-calendar-date-picker";
// import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import axios from "axios";
import moment from "moment";
import { useState } from "react";

export default function Settings(): JSX.Element {
  const [pickerDate, setPickerDate] = useState({
    year: Number(moment().format("YYYY")),
    month: Number(moment().format("M")),
    day: Number(moment().format("D")),
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any) => {
    e.preventDefault();
    console.log("Button clicked");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange: (e: any) => Promise<void> = async (e) => {
    try {
      setPickerDate(e);
      console.log(pickerDate);
      const newData: Promise<IReservation[]> = await axios
        .get(`http://localhost:5050/reservation/disabledDays/${e.target.value}`)
        .then((res) => res.data)
        .catch((err) => console.log("axios: ", err));
      // setDatas(await newData);
      console.log(newData);
    } catch (error) {
      console.log("axios error: ", error);
    }
  };
  return (
    <Layout>
      <div className="p-4 ">
        <div className="w-full m-auto p-4 bg-white border rounded-lg overflow-y-auto">
          <h2>Settings Page</h2>
          <div className="bg-slate-200 p-3 rounded-lg my-4">
            <div className="font-semibold">Not working days:</div>
            <div className="grid grid-cols-3 p-3 m-3 border border-slate-300 rounded-lg">
              <div className="">2023-05-24</div>
              <div className="">Dotood ajiltai</div>
              <div className="justify-self-end">Delete</div>
            </div>
            <div className="grid grid-cols-3 p-3 m-3 border border-slate-300 rounded-lg">
              <div>2023-05-25</div>
              <div>Dotood ajiltai</div>
              <div className="justify-self-end">Delete</div>
            </div>
            <form className="grid grid-cols-8 items-center">
              {/* <input
                className="rounded-lg p-3 mb-4 focus:outline-none border col-span-3"
                type="date"
                value={date}
                onChange={handleChange}
              /> */}
              {/* <div className="col-span-2 bg-white rounded-lg p-1">
                <DatePicker
                  value={pickerDate}
                  onChange={handleChange}
                  shouldHighlightWeekends
                />
              </div> */}

              <input
                type="text"
                placeholder="description"
                className="m-2 px-2 py-2 rounded-lg col-span-4"
              />
              <Button
                type="submit"
                variant="default"
                size="sm"
                className="col-span-2"
                onClick={handleClick}
              >
                Disable the day
              </Button>
            </form>
          </div>
          <div className="bg-slate-100 p-3 rounded-lg my-3">
            <div>Some other setting:</div>
            <Button
              type="button"
              variant="dark"
              size="lg"
              className="ms-4"
              onClick={handleClick}
            >
              Test 1
            </Button>
          </div>
          <div className="bg-slate-100 p-3 rounded-lg my-2">
            <div>Another one setting:</div>
            <Button
              type="button"
              variant="dark"
              size="lg"
              className="ms-4"
              onClick={handleClick}
            >
              Test 2
            </Button>
          </div>
          <div className="bg-slate-100 p-3 rounded-lg my-2">
            <div>One more setting:</div>
            <Button
              type="button"
              variant="dark"
              size="lg"
              className="ms-4"
              onClick={handleClick}
            >
              Test 3
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
