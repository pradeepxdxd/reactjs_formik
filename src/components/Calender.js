import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
const localizer = momentLocalizer(moment)

export default function Calender() {
    const myEventsList = [
        {
            start: new Date('2023-05-15T10:00:00'),
            end: new Date('2023-05-15T12:00:00'),
            title: 'Meeting',
        },
    ];
    return (
        <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor='start'
            endAccessor='end'
            style={{ height: 200 }}
        />
    )
}
