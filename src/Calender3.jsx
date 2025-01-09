import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);  // Moment.js Localizer

function MyCalendar3() {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = ({ start, end }) => {
    

    const title = prompt("Enter the event title:");
    if (title) {
      const newEvent = {
        start: moment(start).toDate(),  // Convert start to Date object
        end: moment(end).toDate(),      // Convert end to Date object
        title
      };
      setEvents([...events, newEvent]);  // Add the new event to the events list
    }
  };
//   start: moment(start).toDate(),  // Use the start time from the selected slot
//   end: moment(end).toDate(),      // Use the end time from the selected slot

// Manually set the event duration (e.g., 1 hour)
// const end = moment(start).add(1, 'hour').toDate();  // Add 1 hour to the start time
// const newEvent = {
//   start: moment(start).toDate(),
//   end,

// const endTimeString = prompt("Enter the end time (e.g., 2:00 PM):");
//     const end = moment(endTimeString, "h:mm A").toDate();  // Parse the input time string
//     const newEvent = {
//       start: moment(start).toDate(),
//       end,

  return (
    <div style={{ height: 500, border: '1px solid red' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={handleSelectSlot}
        selectable
      />
    </div>
  );
}

export default MyCalendar3;
