// import React, { useState, useEffect } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// const MyCalendar = () => {
//     const [events, setEvents] = useState([]);

//     //   useEffect(() => {
//     //     setEvents([
//     //       {
//     //         title: 'Meeting',
//     //         start: new Date(2024, 0, 1, 10, 0),
//     //         end: new Date(2024, 0, 1, 12, 0),
//     //       },
//     //       {
//     //         title: 'Lunch',
//     //         start: new Date(2024, 0, 2, 12, 0),
//     //         end: new Date(2024, 0, 2, 13, 0),
//     //       },
//     //     ]);
//     //   }, []);

//     return (
//         <div style={{ height: 500 }}>
//             <Calendar
//                 localizer={localizer}
//                 events={events}
//                 startAccessor="start"
//                 endAccessor="end"
//                 style={{ height: '100%' }}
//             />
//         </div>
//     );
// };

// export default MyCalendar;

// import React, { useState, useEffect } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// // Initialize the localizer using Moment.js
// const localizer = momentLocalizer(moment);

// const MyCalendar = () => {
//     // State to hold events
//     const [events, setEvents] = useState([]);

//     // Add events to the calendar on component mount
//     useEffect(() => {
//         // Sample events
//         setEvents([
//             {
//                 title: 'Meeting with Bob',
//                 start: new Date(2024, 0, 1, 10, 0), // January 1, 2024, 10:00 AM
//                 end: new Date(2024, 0, 1, 12, 0),   // January 1, 2024, 12:00 PM
//             },
//             {
//                 title: 'Lunch with Alice',
//                 start: new Date(2024, 0, 2, 12, 0), // January 2, 2024, 12:00 PM
//                 end: new Date(2024, 0, 2, 13, 0),   // January 2, 2024, 1:00 PM
//             },
//         ]);
//     }, []);

//     return (
//         <div style={{ height: 600, width: '100%' }}>  {/* Defined container height */}
//             <Calendar
//                 localizer={localizer}
//                 events={events}
//                 startAccessor="start"  // Use "start" to define the event start time
//                 endAccessor="end"      // Use "end" to define the event end time
//                 style={{ height: '100%' }}  // Ensure the calendar takes full container height
//                 views={['month', 'week', 'day']}  // Allow views for month, week, day
//                 eventPropGetter={(event) => ({
//                     style: {
//                         backgroundColor: '#ff6347',  // Custom event color (e.g., Tomato)
//                         color: 'white',
//                         borderRadius: '5px',
//                         padding: '10px',
//                     },
//                 })}
//             />
//         </div>
//     );
// };

// export default MyCalendar;

// import React, { useState, useEffect } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// // Initialize the localizer using Moment.js
// const localizer = momentLocalizer(moment);

// const MyCalendar = () => {
//     const [events, setEvents] = useState([]);

//     // Add events to the calendar on component mount
//     useEffect(() => {
//         // Sample events
//         setEvents([
//             {
//                 title: 'Meeting with Bob',
//                 start: new Date(2024, 0, 1, 10, 0), // January 1, 2024, 10:00 AM
//                 end: new Date(2024, 0, 1, 12, 0),   // January 1, 2024, 12:00 PM
//             },
//             {
//                 title: 'Lunch with Alice',
//                 start: new Date(2024, 0, 2, 12, 0), // January 2, 2024, 12:00 PM
//                 end: new Date(2024, 0, 2, 13, 0),   // January 2, 2024, 1:00 PM
//             },
//         ]);
//     }, []);

//     return (
//         <div style={{ height: 600, width: '100%' }}>  {/* Defined container height */}
//             <Calendar
//                 localizer={localizer}
//                 events={events}
//                 startAccessor="start"  // Use "start" to define the event start time
//                 endAccessor="end"      // Use "end" to define the event end time
//                 style={{ height: '100%', backgroundColor: 'green' }}  // Ensure the calendar takes full container height
//                 views={['month', 'week', 'day']}  // Allow views for month, week, day
//                 eventPropGetter={(event) => ({
//                     style: {
//                         // backgroundColor: '#ff6347',  // Custom event color (e.g., Tomato)
//                         backgroundColor: 'blue',
//                         color: 'white',
//                         borderRadius: '5px',
//                         padding: '10px',
//                     },
//                 })}
//             />
//         </div>
//     );
// };

// export default MyCalendar;

// eventPropGetter: (event) => ({
//     style: {
//         backgroundColor: 'red',
//         color: 'white',
//         borderRadius: '5px',
//     },
//     className: 'my-custom-class',
// });
//---------------------------------------------------------------------------------

//-------------------------------------------------------------------------------
// const eventStyleGetter = (event) => {
//     const isWeekend = event.start.getDay() === 6 || event.start.getDay() === 0; // Saturday or Sunday
//     return {
//         style: {
//             backgroundColor: isWeekend ? 'gray' : 'blue',
//             color: 'white',
//         },
//     };
// };

// const eventStyleGetter = (event) => {
//     let className = event.title.toLowerCase().includes('meeting') ? 'meeting-event' : 'default-event';
//     return { className };
// };

import React, { useState, useEffect } from 'react';
import { Add, Person } from '@mui/icons-material'
import {
    Avatar,
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField,
} from '@mui/material'
import moment from 'moment'
import { EventCalendar } from 'react-mui-event-calendar'

const emails = ['username@gmail.com', 'user02@gmail.com']

function MyCalendar() {
    const data = [
        {
            date: new Date(),
            title: 'First',
            popupContent: (
                <>
                    <List sx={{ pt: 0 }}>
                        {emails.map((email) => (
                            <ListItem button key={email}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Person />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={email} />
                            </ListItem>
                        ))}

                        <ListItem autoFocus button>
                            <ListItemAvatar>
                                <Avatar>
                                    <Add />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Add account' />
                        </ListItem>
                    </List>
                </>
            ),
            id: '1',
        },
        {
            date: moment().subtract(2, 'days'),
            title: "Use Google's location service?",
            popupContent: (
                <>
                    <DialogContent>
                        <DialogContentText id='alert-dialog-description'>
                            Let Google help apps determine location. This means sending
                            anonymous location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button>Disagree</Button>
                        <Button>Agree</Button>
                    </DialogActions>
                </>
            ),
            id: '2',
        },
        {
            date: moment().subtract(3, 'days'),
            title: 'Third',
            popupContent: (
                <>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address
                            here. We will send updates occasionally.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin='dense'
                            id='name'
                            label='Email Address'
                            type='email'
                            fullWidth
                            variant='standard'
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button>Cancel</Button>
                        <Button>Subscribe</Button>
                    </DialogActions>
                </>
            ),
            color: '#000',
            id: '3',
        },
        {
            date: new Date(),
            title: 'Fourth',
            popupContent: (
                <>
                    <DialogContent>
                        <DialogContentText>
                            {[...new Array(50)]
                                .map(
                                    () => `Cras mattis consectetur purus sit amet fermentum.
                                            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                                )
                                .join('\n')}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button>Cancel</Button>
                        <Button>Subscribe</Button>
                    </DialogActions>
                </>
            ),
            color: '#ffe100',
            id: '4',
        },
        {
            date: moment().subtract(10, 'days'),
            title: 'Fourth',
            popupContent: (
                <>
                    <DialogContent>
                        <DialogContentText>
                            {[...new Array(50)]
                                .map(
                                    () => `Cras mattis consectetur purus sit amet fermentum.
                                            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                                )
                                .join('\n')}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button>Cancel</Button>
                        <Button>Subscribe</Button>
                    </DialogActions>
                </>
            ),
            color: '#ffe100',
            id: '4',
        },
        {
            date: moment().subtract(30, 'days'),
            title: 'Fourth',
            popupContent: (
                <>
                    <DialogContent>
                        <DialogContentText>
                            {[...new Array(50)]
                                .map(
                                    () => `Cras mattis consectetur purus sit amet fermentum.
                                            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                                )
                                .join('\n')}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button>Cancel</Button>
                        <Button>Subscribe</Button>
                    </DialogActions>
                </>
            ),
            id: '4',
        },
        {
            date: new Date(),
            title: 'Fourth',
            popupContent: (
                <>
                    <DialogContent>
                        <DialogContentText>
                            {[...new Array(50)]
                                .map(
                                    () => `Cras mattis consectetur purus sit amet fermentum.
                                            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                                )
                                .join('\n')}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button>Cancel</Button>
                        <Button>Subscribe</Button>
                    </DialogActions>
                </>
            ),
            color: '#ffe100',
            id: '4',
        },
        {
            date: moment().add(5, 'days'),
            title: 'Fourth',
            popupContent: (
                <>
                    <DialogContent>
                        <DialogContentText>
                            {[...new Array(50)]
                                .map(
                                    () => `Cras mattis consectetur purus sit amet fermentum.
                                            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                                )
                                .join('\n')}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button>Cancel</Button>
                        <Button>Subscribe</Button>
                    </DialogActions>
                </>
            ),
            color: '#ffe100',
            id: '4',
        },
        {
            date: new Date(),
            title: 'Fourth',
            popupContent: (
                <>
                    <DialogContent>
                        <DialogContentText>
                            {[...new Array(50)]
                                .map(
                                    () => `Cras mattis consectetur purus sit amet fermentum.
                                            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                                )
                                .join('\n')}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button>Cancel</Button>
                        <Button>Subscribe</Button>
                    </DialogActions>
                </>
            ),
            color: '#ffe100',
            id: '4',
        },
        {
            date: moment().subtract(2, 'days'),
            title: 'Fourth',
            popupContent: (
                <>
                    <DialogContent>
                        <DialogContentText>
                            {[...new Array(50)]
                                .map(
                                    () => `Cras mattis consectetur purus sit amet fermentum.
                                            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                                )
                                .join('\n')}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button>Cancel</Button>
                        <Button>Subscribe</Button>
                    </DialogActions>
                </>
            ),
            color: '#ffe100',
            id: '4',
        },
        {
            date: moment().add(30, 'days'),
            title: 'Fourth',
            popupContent: (
                <>
                    <DialogContent>
                        <DialogContentText>
                            {[...new Array(50)]
                                .map(
                                    () => `Cras mattis consectetur purus sit amet fermentum.
                                            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                                )
                                .join('\n')}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button>Cancel</Button>
                        <Button>Subscribe</Button>
                    </DialogActions>
                </>
            ),
            color: '#ffe100',
            id: '4',
        },
    ]

    const [dataSource, setDataSource] = useState(data)

    return (
        <div
            style={{
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '3em 0',
            }}
        >
            {console.log(dataSource)}
            <EventCalendar
                dataSource={dataSource}
                pallet={{ primary: '#32d3a2', secondary: '#2343d3' }}
                onDataChange={(newEvents) => setDataSource(newEvents)}
            />
        </div>
    )
}

export default MyCalendar