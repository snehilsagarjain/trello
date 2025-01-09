// import React, { useState, useEffect } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import axios from 'axios';
// import "./Calendar.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import DatePickerComponent from "./DatePickerComponent";

// // Set up Moment.js localizer for the calendar
// const localizer = momentLocalizer(moment);

// function MyCalendar4() {

//     const [isDisabled1, setIsDisabled1] = useState(true);
//     const [isDisabled2, setIsDisabled2] = useState(true);

//     const [events, setEvents] = useState([]);
//     const [list, setList] = useState([]);
//     const [task, setTask] = useState([]);
//     const [startDate, setStartDate] = useState(new Date());
//     const [endDate, setEndDate] = useState(new Date());

//     const modalClose = () => { setModel(false); } // setView('');
//     let newEvent = {};

//     const [taskName, setTaskName] = useState('');
//     const handleTaskName = (event) => { setTaskName(event.target.value); /* const task = event.target.value; if(task != "" ){ setIsdisabled(false); } */ };

//     const [checked1, setChecked1] = useState(false);
//     const [checked2, setChecked2] = useState(false);
//     const handlechecked1 = (event) => { setChecked1(!checked1); setIsDisabled1(!isDisabled1); };
//     const handlechecked2 = (event) => { setChecked2(!checked2); setIsDisabled2(!isDisabled2); };
//     console.log(isDisabled1);
//     console.log(isDisabled2);

//     const [model, setModel] = useState(false); // Initially false: since, model to be shown on button click.
//     // const [view, setView] = useState('');

//     const [location, setLocation] = useState(false);
//     const addlocation = () => { setLocation(!location); }
//     var loc = "off";

//     const [selectedOption, setSelectedOption] = useState('');
//     // Handle the change event when a user selects an option
//     const handleDropdownChange = (e) => { setSelectedOption(e.target.value); };

//     const isButtonDisabled = !selectedOption || !taskName.trim();

//     // Function to handle the date change from the DatePickerComponent
//     const handleDateChange = (date) => {
//         setStartDate(date); // Update startDate with the selected date
//         console.log("Selected date from App:", date); // Log the selected date
//     };
//     const handleDateChange2 = (date) => {
//         setEndDate(date); // Update EndDate with the selected date
//         console.log("Selected date from App:", date); // Log the selected date
//     };

//     async function fetchdata() {
//         try {
//             const products = await axios.get("http://localhost:6080/list/get"); console.log(products);
//             setList(products.data);
//             console.log("40")
//             console.log(products.data);
//         }
//         catch (error) { console.log('41' + error); }
//     }

//     async function fetchEvents() {
//         try {
//             const products = await axios.get("http://localhost:6080/task/get"); console.log(products);
//             setTask(products.data);
//             console.log("40")
//             console.log(products.data);
//         }
//         catch (error) { console.log('41' + error); }
//     }

//     useEffect(() => {
//         fetchdata();
//         fetchEvents();
//         console.log(task)
//         task.map((item, index) => {
//             newEvent = { start: item.startDate, end: item.endDate, title: item.task };
//             setEvents([...events, newEvent]);
//         })
//         setEvents([
//             {
//                 start: new Date(2025, 0, 4, 10, 0),
//                 end: new Date(2025, 0, 4, 11, 0),
//                 title: 'Event 1',
//             },
//             {
//                 start: new Date(2025, 0, 4, 12, 0),
//                 end: new Date(2025, 0, 4, 13, 0),
//                 title: 'Event 2',
//             },
//             {
//                 start: new Date(2025, 0, 4, 14, 0),
//                 end: new Date(2025, 0, 4, 15, 0),
//                 title: 'Event 3',
//             },
//             {
//                 start: new Date(2025, 0, 4, 16, 0),
//                 end: new Date(2025, 0, 4, 17, 0),
//                 title: 'Event 4',
//             },
//             {
//                 start: new Date(2025, 0, 4, 17, 30),
//                 end: new Date(2025, 0, 4, 18, 30),
//                 title: 'Event 5',
//             },
//             // More events...
//         ]);
//     }, [])

//     // Handle selecting a slot to create an event
//     const handleSelectSlot = ({ start, end }) => { //async 
//         console.log(start); console.log(end);
//         // setStartDate(start);
//         // setEndDate(end);
//         console.log(startDate);
//         console.log(endDate);
//         setStartDate(moment(start).toDate());
//         setEndDate(moment(start).add(6, 'hour').toDate());  // Add 6 hour to the start time
//         setModel(true);
//     };
//     console.log(startDate);
//     console.log(endDate);

//     const addlist = async (event) => {
//         event.preventDefault()
//         let user = localStorage.getItem('user');  // Get the user data from localStorage
//         if (user) {
//             let userObj = JSON.parse(user);         // Parse the JSON string into an object
//             let id1 = userObj._id;        // Access the _id property
//             console.log(id1);  // Output the _id
//             const title = prompt("Enter List Name:");
//             if (title) {
//                 const data = { userId: id1, listType: title };
//                 const products = await axios.post("http://localhost:6080/list/save", data); console.log("16")
//                 console.log(products)
//                 setList([...list, title]);  // Add new list to the list state
//             }
//         }
//         else { console.log("No user found in localStorage."); }
//     }

//     const handleSubmit = async () => {
//         console.log(selectedOption);


//         loc = location ? "on" : "off";

//         const newEvents = (
//             checked1 ?
//                 (checked2 ?
//                     { listId: selectedOption, task: taskName, startDate: startDate, endDate: endDate, location: loc, nc: 1 } :
//                     { listId: selectedOption, task: taskName, startDate: startDate, location: loc, nc: 2 }
//                 ) :
//                 (checked2 ?
//                     { listId: selectedOption, task: taskName, endDate: endDate, location: loc, nc: 3 } :
//                     { listId: selectedOption, task: taskName, location: loc, nc: 4 }
//                 )
//         );
//         console.log(newEvents);
//         axios.post("http://localhost:6080/task/save", newEvents)
//             .then(response => {
//                 console.log('Task saved:', response.data);
//                 console.log(taskName);

//                 newEvent = { start: startDate, end: endDate, title: taskName };
//                 // newEvent = { start: moment(start).toDate(), end: moment(start).add(6, 'hour').toDate(), title };
//                 setEvents([...events, newEvent]);
//                 // setEvents([...events, newEvent]);
//             })
//             .catch(error => {
//                 console.error('Error saving task:', error.response?.data || error.message);
//             });

//         setTaskName(''); setSelectedOption(''); setChecked1(false); setChecked2(false);
//     }
//     console.log(events);

//     events.map((item, index) => { console.log(item); })

//     // Handle clicking on an event
//     const handleSelectEvent = (event) => {
//         // Show event details in an alert or modal (you could expand this for editing, etc.)
//         alert(`Event title: ${event.title}, Start: ${moment(event.start).format("LLL")}, End: ${moment(event.end).format("LLL")}`);
//     };

//     const [localEvents, setLocalEvents] = useState(events);

//     // Custom event styling to prevent overflow and stack events
//     const eventPropGetter = (event) => {
//         return {
//             style: {
//                 backgroundColor: '#3174ad',  // Event color
//                 color: 'white',  // Text color
//                 borderRadius: '5px',
//                 margin: '2px',  // Space between events
//                 padding: '5px',  // Space inside events
//                 height: 'auto',  // Ensure events do not overflow
//                 maxWidth: '100%',
//                 position: 'relative', // To stack events
//                 zIndex: 1, // Ensure stacking
//                 border: '2px solid blue'
//             }
//         };
//     };

//     // Custom day cell rendering to adjust the height and stacking of events
//     const dayPropGetter = (date) => {
//         // const eventCount = localEvents.filter((e) => moment(e.start).isSame(moment(date), 'day')).length; console.log(eventCount);
//         const eventCount = events.filter((e) => moment(e.start).isSame(moment(date), 'day')).length; console.log(eventCount);
//         const style = {
//             display: 'flex',
//             flexDirection: 'column',  // Stack events vertically
//             justifyContent: 'flex-start',
//             position: 'relative', // Needed for correct event stacking
//             height: `${eventCount * 400}px`,  // Adjust this height to fit all events
//             border: '2px solid green'
//         };

//         return { style };
//     };
//     // border: '5px solid red', height: 500
//     return (
//         <div style= {{ }
// }>
//     <Calendar
//                 localizer={ localizer }
// events = { events }
// startAccessor = "start"
// endAccessor = "end"
// onSelectSlot = { handleSelectSlot }
// onSelectEvent = { handleSelectEvent }  // Add the event click handler
// selectable
// eventPropGetter = { eventPropGetter } // Apply custom event styles
// dayPropGetter = { dayPropGetter } // Apply custom day styles
// views = { ['month', 'week', 'day']}  // Allow month, week, and day views
// style = {{ height: '100vh' }}
// components = {{
//     event: ({ event }) => (
//         <div
//                             style= {{
//         backgroundColor: '#3174ad',
//             color: 'white',
//                 padding: '5px',
//                     borderRadius: '5px',
//                         fontSize: '12px',
//                             }
// }
//                         >
//     { event.title }
//     </div>
//                     ),
//                 }}
//             />
// {
//     model && (
//         <div className="modal-overlay" >
//             <div className="modal" >
//                 <div className="modal-header" > {/* <div>ADD TASK</div> */ }
//                     < button onClick = { modalClose } > Close </button>
//                         </div>
//                         < div className = "modal-content" >
//                             <form>
//                             <div style={ { display: 'flex', marginBottom: '10px' } }>
//                                 <label htmlFor="taskname" > <h3 style={ { border: '1px solid red', width: '120px', height: '40px', textAlign: 'center' } }> Task Name < /h3></label >
//                                     <div><input type="text" id = "taskname" style = {{ width: '240px', height: '40px', padding: '8px', fontSize: '20px' }
// } value = { taskName } onChange = { handleTaskName } /> </div>
//     </div>
//     < div style = {{ display: 'flex', marginBottom: '10px' }}>
//         <label htmlFor="options" > <h3 style={ { border: '1px solid red', width: '120px', textAlign: 'center', height: '40px' } }> Select List < /h3></label >
//             <select id="options" value = { selectedOption } onChange = { handleDropdownChange } style = {{ width: '250px', height: '40px', padding: '8px', fontSize: '20px' }}>
//                 <option key={ 1 } value = "" > Select...</option>
// {
//     list.map((item, index) => (
//         <option key= { item._id } value = { item._id } > { item.listType } </option>))
// }
// </select>
//     < button style = {{
//     display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px',
//         borderRadius: '50%',  // Makes the background circular
//             backgroundColor: '#4CAF50', // Circular background color
//                 color: 'white',  // Text color
//                     fontFamily: 'Arial, sans-serif',
//                         fontWeight: 'bold',
//                             fontSize: '20px',
//                                 textTransform: 'uppercase',
//                                     }} onClick = { addlist } >
//     +
//     </button>
//     </div>
//     < div style = {{ display: 'flex', justifyContent: 'space-between' }}>
//         <div style={ { flexGrow: '1' } }> <b>Start Date < /b></div >
//             <div style={ { flexGrow: '1', paddingLeft: '30px' } }> <b>Due Date < /b></div >
//                 </div>
//                 < div style = {{ display: 'flex', marginBottom: '10px' }}>
//                     <div style={ { marginRight: '34px' } }>
//                         <input type = "checkbox" style = {{ transform: 'scale(1.5)', marginRight: '10px' }} checked = { checked1 } onChange = { handlechecked1 } />
//                             <DatePickerComponent onDateChange = { handleDateChange } disabled = { isDisabled1 } start = { startDate } />
//                                 </div>
//                                 < div >
//                                 <input type="checkbox" style = {{ transform: 'scale(1.5)', marginRight: '10px' }} checked = { checked2 } onChange = { handlechecked2 } />
//                                     <DatePickerComponent onDateChange = { handleDateChange2 } disabled = { isDisabled2 } end = { endDate } />
//                                         </div>
//                                         </div>
//                                         </form>
//                                         < button onClick = { addlocation } > { location? "Remove Location": "Add Location" } </button>
//                                             < div style = { { width: '100%', height: '400px', border: 'none' } }>
//                                                 { location &&
//                                                 (
//                                                     <iframe
//                                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.338484090619!2d75.82439617422045!3d26.892750760950396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db69383e9cba7%3A0xfa366ce932edaee3!2sSagar%20Fashions!5e0!3m2!1sen!2sin!4v1735478713395!5m2!1sen!2sin"
// width = "600"
// height = "450"
// style = {{ border: '0' }}
// allowFullScreen = ""
// loading = "lazy"
// referrerPolicy = "no-referrer-when-downgrade"
// title = "Google Map"
//     />
//                                     )
//                                 }
// </div>
//     < button style = {{ border: '1px solid red', width: '100%' }} disabled = { isButtonDisabled } onClick = { handleSubmit } > <h3><b>ADD TASK < /b></h3 > </button>
//         </div>
//         </div >
//         </div >
//             )
//             }
// </div >
//     );
// }
// export default MyCalendar4;

//-----------------------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from 'axios';
import "./Calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerComponent from "./DatePickerComponent";

// Set up Moment.js localizer for the calendar
const localizer = momentLocalizer(moment);

function MyCalendar4() {

    const [events, setEvents] = useState([]);
    const [list, setList] = useState([]);
    const [task, setTask] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [model, setModel] = useState(false);

    async function fetchdata() {
        try {
            const products = await axios.get("http://localhost:6080/list/get");
            setList(products.data);
        }
        catch (error) { console.log('Error fetching lists', error); }
    }

    async function fetchEvents() {
        try {
            const products = await axios.get("http://localhost:6080/task/get");
            setTask(products.data);
        }
        catch (error) { console.log('Error fetching tasks', error); }
    }

    useEffect(() => {
        fetchdata();
        fetchEvents();
    }, []);

    useEffect(() => {
        const newEvents = task.map((item) => ({
            start: new Date(item.startDate),
            end: new Date(item.endDate),
            title: item.task,
        }));
        setEvents(newEvents);
    }, [task]);

    // Dynamically calculate the height of each day cell based on events
    const dayPropGetter = (date) => {
        const eventCount = events.filter((e) => moment(e.start).isSame(moment(date), 'day')).length;
        const height = Math.max(100, eventCount * 50); // Set a minimum height of 100px for the cell
        return {
            style: {
                height: `${height}px`,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }
        };
    };

    const eventPropGetter = (event) => {
        return {
            style: {
                backgroundColor: '#3174ad',
                color: 'white',
                borderRadius: '5px',
                margin: '2px',
                padding: '5px',
                zIndex: 10,  // Ensure events don't overlap
                height: 'auto',
            }
        };
    };

    const handleSelectSlot = ({ start, end }) => {
        setStartDate(start);
        setEndDate(end);
        setModel(true);
    };

    const handleSelectEvent = (event) => {
        alert(`Event title: ${event.title}, Start: ${moment(event.start).format("LLL")}, End: ${moment(event.end).format("LLL")}`);
    };

    return (
        <div>
        <Calendar
                localizer= { localizer }
    events = { events }
    startAccessor = "start"
    endAccessor = "end"
    onSelectSlot = { handleSelectSlot }
    onSelectEvent = { handleSelectEvent }
    selectable
    eventPropGetter = { eventPropGetter }
    dayPropGetter = { dayPropGetter }
    views = { ['month', 'week', 'day']}
    style = {{ height: 'auto' }
}  // Allow dynamic height for calendar
components = {{
    event: ({ event }) => (
        <div style= {{
        backgroundColor: '#3174ad',
            color: 'white',
                padding: '5px',
                    borderRadius: '5px',
                        fontSize: '12px',
                        }
}>
    { event.title }
    </div>
                    ),
                }}
            />
{
    model && (
        <div className="modal-overlay" >
            <div className="modal" >
                <button onClick={ () => setModel(false) }> Close </button>
    {/* Modal Content Here */ }
    </div>
        </div>
            )
}
</div>
    );
}

export default MyCalendar4;
