import { Calendar } from "@amir04lm26/react-modern-calendar-date-picker";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";

export default function Reservation1(props: {
  disabledDays: IDisabledDay[];
}): JSX.Element {
  const { disabledDays } = props;
  return (
    <div className="border-3 h-screen flex w-full gap-4 m-2">
      <div className="border w-[20%] h-full">
        <div className="w-max">
          <Calendar />
        </div>
      </div>
      <div className=" w-[80%]">
        <div className="border h-[80%]">Table Canva</div>
        <div className="border h-[20%] mt-3">Status</div>
      </div>
    </div>
  )
}

export const getStaticProps: () => Promise<{
  props: {
    disabledDays: IDisabledDay[] | null;
  };
}> = async () => {
  const disabledDays = await axios
    .get(`${process.env.NEXT_PUBLIC_PORT}/days`)
    .then((res) => res.data);
  return {
    props: {
      disabledDays,
    },
  };
};