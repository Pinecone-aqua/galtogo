import BookingLayout from "@/components/BookingLayout";
import DatePicker from "@/components/subcomponents/DatePicker";
import GuestInput from "@/components/subcomponents/GuestInput";
import TimeTable from "@/components/subcomponents/TimeTable";
import axios from "axios";

export default function Reservation2(props: {
  disabledDaysData: IDisabledDay[];
}): JSX.Element {
  const { disabledDaysData } = props;
  return (
    <BookingLayout>
      <div className="flex">
        <div className="w-[30%] h-full flex flex-col">
          <DatePicker disabledDaysData={disabledDaysData} />
          <GuestInput />
          <TimeTable />
        </div>
        <div className="w-[70%] border rounded-lg p-6">
          <div>
            <h1 className="font-bold text-lg py-4">Таны захиалга</h1>
            <div className="flex gap-4">
              <div className="p-4 border rounded-lg">
                <h1>Ширээний дугаар</h1>
                <h1 className="mt-[8px]">24</h1>
              </div>
              <div className="p-4 border rounded-lg">
                <h1>Сонгосон цаг</h1>
                <h1 className="mt-[8px]">24</h1>
              </div>
              <div className="p-4 border rounded-lg">
                <h1>Хүний тоо</h1>
                <h1 className="mt-[8px]">24</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BookingLayout>
  );
}


export const getStaticProps: () => Promise<{
  props: { disabledDaysData: IDisabledDay[] | null };
}> = async () => {
  const disabledDaysData = await axios
    .get(`${process.env.PORT}/days`)
    .then((res) => res.data);
  return {
    props: {
      disabledDaysData,
    }
  };
}
