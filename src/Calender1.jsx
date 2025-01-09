import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar1 = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setEvents([
            {
                title: 'Meeting with Bob',
                start: new Date(2024, 0, 1, 10, 0),
                end: new Date(2024, 0, 1, 12, 0),
            },
            {
                title: 'Lunch with Alice',
                start: new Date(2024, 0, 2, 12, 0),
                end: new Date(2024, 0, 2, 13, 0),
            },
        ]);
    }, []);

    const eventStyleGetter = (event) => {
        // Conditional styling based on event title
        let style = {};
        if (event.title.toLowerCase().includes('meeting')) {
            style = { backgroundColor: 'blue', color: 'white' };
        } else {
            style = { backgroundColor: 'green', color: 'white' };
        }

        return {
            style,
        };
    };

    return (
        <div style={{ height: 600 }}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '100%' }}
                eventPropGetter={eventStyleGetter}  // Applying custom styles using eventPropGetter
            />
        </div>
    );
};

export default MyCalendar1;