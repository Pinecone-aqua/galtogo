import Layout from "@/components/Layout";
import Button from "@/components/subComponents/Button";
import { Calendar } from "@amir04lm26/react-modern-calendar-date-picker";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import axios from "axios";
import moment from "moment";
import { useState } from "react";

export default function Settings(props: {
  disabledDaysData: IDisabledDay[];
}): JSX.Element {
  const { disabledDaysData } = props;
  const [disabledDays, setDisabledDays] =
    useState<IDisabledDay[]>(disabledDaysData);
  const [pickerDate, setPickerDate] = useState({
    year: Number(moment().format("YYYY")),
    month: Number(moment().format("M")),
    day: Number(moment().format("D")),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    const newDisabledDay = {
      ...pickerDate,
      description: e.target.description.value,
    };

    await axios
      .post(`http://localhost:5050/days`, newDisabledDay)
      .then((res) => setDisabledDays([...disabledDays, res.data]))
      .catch((err) => console.log("postDayError: ", err));
    e.target.description.value = "";
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setPickerDate(e);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDeleteDay = async (e: any): Promise<void> => {
    await axios
      .delete(`http://localhost:5050/days/${e.target.id}`)
      .then((res) => setDisabledDays(res.data))
      .catch((err) => console.log("deleteDayError: ", err));
  };
  return (
    <Layout>
      <div className="p-4 ">
        <div className="w-full m-auto p-4 bg-white border rounded-lg overflow-y-auto">
          <h2>Settings Page</h2>
          <div className="bg-slate-200 p-3 rounded-lg my-4">
            <div className="flex flex-wrap">
              <div className="bg-white rounded-lg p-1 w-fit  mx-auto">
                <Calendar
                  value={pickerDate}
                  onChange={handleChange}
                  disabledDays={disabledDays}
                  shouldHighlightWeekends
                />

                <form
                  className="items-center flex flex-col"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    name="description"
                    placeholder="description"
                    className="bg-white m-2 px-2 py-2 rounded-lg w-full border"
                  />
                  <Button
                    type="submit"
                    variant="default"
                    size="sm"
                    className="col-span-2 w-full"
                  >
                    Disable the day
                  </Button>
                </form>
              </div>
              <div className="px-4 flex-1">
                <h3 className="font-semibold p-3 m-3">Not working days:</h3>
                {disabledDays.map((dayData, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 m-3 border border-slate-300 rounded-lg"
                  >
                    <div className="flex-none px-4">{`${dayData.year}-${dayData.month}-${dayData.day}`}</div>
                    <div className="flex-1 px-4">{dayData.description}</div>
                    <Button
                      size="sm"
                      variant="red"
                      className="justify-self-end flex-none px-4"
                      onClick={handleDeleteDay}
                      id={dayData._id}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-slate-100 p-3 rounded-lg my-3">
            <div>Some other setting:</div>
            <Button
              type="button"
              variant="dark"
              size="lg"
              className="ms-4"
              onClick={() => console.log("click")}
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
              onClick={() => console.log("click")}
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
              onClick={() => console.log("click")}
            >
              Test 3
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: () => Promise<{
  props: { disabledDaysData: IDisabledDay[] | null };
}> = async () => {
  const disabledDaysData = await axios
    .get("http://localhost:5050/days")
    .then((res) => res.data);
  return {
    props: {
      disabledDaysData,
    },
  };
};
