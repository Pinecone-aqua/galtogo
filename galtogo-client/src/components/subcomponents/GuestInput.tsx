import { useState } from "react";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";

export default function GuestInput () {
    const [input, setInput] = useState(1)
    return (
        <div className="flex items-center justify-between gap-4 border px-[24px] m-2">
            <div>Guest</div>
            <div className="flex items-center">
                <HiMinusCircle size={'24px'} onClick={() => setInput((prev) => prev > 0 ? prev - 1 : 0)}/>
                <div className="p-4 rounded-full text-center">{input}</div>
                <HiPlusCircle size={'24px'} className="text-green-800" onClick={() => setInput((prev) => prev + 1)}/>
            </div>
        </div>
    )
}