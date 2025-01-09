// import React, { useState } from 'react';
// import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';  // Correct import
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// const events = [
//     {
//         start: new Date(2025, 0, 4, 10, 0),
//         end: new Date(2025, 0, 4, 11, 0),
//         title: 'Event 1',
//     },
//     {
//         start: new Date(2025, 0, 4, 12, 0),
//         end: new Date(2025, 0, 4, 13, 0),
//         title: 'Event 2',
//     },
//     // More events...
// ];

// const MyCalendar = () => {
//     const [localEvents, setLocalEvents] = useState(events);

//     return (
//         <BigCalendar
//             events={localEvents}
//             startAccessor="start"
//             endAccessor="end"
//             localizer={localizer}  // Pass the localizer to the Calendar
//             style={{ height: '100vh' }}
//         />
//     );
// };

// export default MyCalendar;



import React, { useState } from 'react';
// import BigCalendar from 'react-big-calendar';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';  // Correct import
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
// BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

const events = [
    {
        start: new Date(2025, 0, 4, 10, 0),
        end: new Date(2025, 0, 4, 11, 0),
        title: 'Event 1',
    },
    {
        start: new Date(2025, 0, 4, 12, 0),
        end: new Date(2025, 0, 4, 13, 0),
        title: 'Event 2',
    },
    {
        start: new Date(2025, 0, 4, 14, 0),
        end: new Date(2025, 0, 4, 15, 0),
        title: 'Event 3',
    },
    {
        start: new Date(2025, 0, 4, 16, 0),
        end: new Date(2025, 0, 4, 17, 0),
        title: 'Event 4',
    },
    {
        start: new Date(2025, 0, 4, 17, 30),
        end: new Date(2025, 0, 4, 18, 30),
        title: 'Event 5',
    },
    // More events...
];

const MyCalendar = () => {
    const [localEvents, setLocalEvents] = useState(events);

    // Custom event styling to prevent overflow and stack events
    const eventPropGetter = (event) => {
        return {
            style: {
                backgroundColor: '#3174ad',  // Event color
                color: 'white',  // Text color
                borderRadius: '5px',
                margin: '2px',  // Space between events
                padding: '5px',  // Space inside events
                height: 'auto',  // Ensure events do not overflow
                maxWidth: '100%',
                position: 'relative', // To stack events
                zIndex: 1, // Ensure stacking
                border: '2px solid blue'
            }
        };
    };

    // Custom day cell rendering to adjust the height and stacking of events
    const dayPropGetter = (date) => {
        const eventCount = localEvents.filter((e) => moment(e.start).isSame(moment(date), 'day')).length; console.log(eventCount);
        const style = {
            display: 'flex',
            flexDirection: 'column',  // Stack events vertically
            justifyContent: 'flex-start',
            position: 'relative', // Needed for correct event stacking
            height: `${eventCount * 100}px`,  // Adjust this height to fit all events
            border: '2px solid red'
        };

        return { style };
    };

    return (
        <BigCalendar
            events={localEvents}
            startAccessor="start"
            endAccessor="end"
            localizer={localizer}  // Pass the localizer to the Calendar
            eventPropGetter={eventPropGetter} // Apply custom event styles
            dayPropGetter={dayPropGetter} // Apply custom day styles
            views={['month', 'week', 'day']}  // Allow month, week, and day views
            style={{ height: '100vh' }}
            components={{
                event: ({ event }) => (
                    <div
                        style={{
                            backgroundColor: '#3174ad',
                            color: 'white',
                            padding: '5px',
                            borderRadius: '5px',
                            fontSize: '12px',
                        }}
                    >
                        {event.title}
                    </div>
                ),
            }}
        />
    );
};

export default MyCalendar;


// import React, { useState } from 'react';
// import BigCalendar from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

// const events = [
//     {
//         start: new Date(2025, 0, 4, 10, 0),
//         end: new Date(2025, 0, 4, 11, 0),
//         title: 'Event 1',
//     },
//     {
//         start: new Date(2025, 0, 4, 12, 0),
//         end: new Date(2025, 0, 4, 13, 0),
//         title: 'Event 2',
//     },
//     {
//         start: new Date(2025, 0, 4, 14, 0),
//         end: new Date(2025, 0, 4, 15, 0),
//         title: 'Event 3',
//     },
//     // More events...
// ];

// const MyCalendar = () => {
//     const [localEvents, setLocalEvents] = useState(events);

//     // Custom style function for events
//     const eventPropGetter = (event) => {
//         const eventCount = localEvents.filter(
//             (e) => moment(e.start).isSame(moment(event.start), 'day')
//         ).length;

//         // Dynamically adjust the height based on the number of events
//         const style = {
//             minHeight: `${eventCount * 40}px`, // Example: 40px height per event
//         };

//         return {
//             style,
//         };
//     };

//     return (
//         <BigCalendar
//             events={localEvents}
//             startAccessor="start"
//             endAccessor="end"
//             eventPropGetter={eventPropGetter} // Apply custom event styles
//             style={{ height: '100vh' }}
//         />
//     );
// };

// export default MyCalendar;
