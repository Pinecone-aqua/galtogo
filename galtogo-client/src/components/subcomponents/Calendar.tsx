
import React, { useState } from "react";
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';

export default function CalendarPicker() {
    const [date, setDate] = useState<string | Date | Date[] | null>(null);

    return (
        <div className="w-full">
            <Calendar className="w-full p-0 m-0 " value={date} onChange={(e : CalendarChangeEvent) => setDate(e.value)} inline/>
        </div>
    )
}
        