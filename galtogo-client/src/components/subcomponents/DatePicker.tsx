import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import CalendarPicker from "./Calendar";

export default function DatePicker() {
  return (
    <div className="w-full">
      <div className="w-full rounded-2xl  bg-white p-2">
        <Disclosure as="div" className="mt-2 ">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex p-[24px] w-full justify-between rounded-lg shadow-2xl shadow-blue-500/20  bg-white text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <div className="flex items-center gap-2">
                <HiOutlineCalendarDays/>
                <p>Pick a date</p>
                </div>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="mt-2 text-sm text-gray-500">
                <CalendarPicker/>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
