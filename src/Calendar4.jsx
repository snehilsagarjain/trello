import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from 'axios';
import "./Calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerComponent from "./DatePickerComponent";
// import "./Model_add.css";
// import Model_add from "./Model_add";

// Set up Moment.js localizer for the calendar
const localizer = momentLocalizer(moment);

function MyCalendar4() {

    // const [isOpen, setIsOpen] = useState(false);
    // const [load, setLoad] = useState(true);
    // const [loading, setLoading] = useState([]);
    // const [search, setSearch] = useState('');
    // const [sort, setSort] = useState('');
    // const [isdisabled, setIsdisabled] = useState(true);

    const [isDisabled1, setIsDisabled1] = useState(true);
    const [isDisabled2, setIsDisabled2] = useState(true);

    const [events, setEvents] = useState([]);
    const [list, setList] = useState([]);
    const [task, setTask] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const modalClose = () => { setModel(false); } // setView('');
    let newEvent = {};

    const [taskName, setTaskName] = useState('');
    const handleTaskName = (event) => { setTaskName(event.target.value); /* const task = event.target.value; if(task != "" ){ setIsdisabled(false); } */ };
    //   const handleTextInputChange = (e) => { setTaskName(e.target.value); };

    // const [textValue, setTextValue] = useState('');    // State to track the value of the text field
    // const handleTextChange = (event) => { setTextValue(event.target.value); };     // Handle text field change

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const handlechecked1 = (event) => { setChecked1(!checked1); setIsDisabled1(!isDisabled1); };
    const handlechecked2 = (event) => { setChecked2(!checked2); setIsDisabled2(!isDisabled2); };
    console.log(isDisabled1);
    console.log(isDisabled2);

    // const [isChecked, setIsChecked] = useState(false); // State to track if the checkbox is checked

    // // Handle checkbox change
    // const handleCheckboxChange = (event) => { const checked = event.target.checked; setIsChecked(checked);
    //     if (checked) { setTextValue("Checkbox is checked"); }      // If checkbox is checked, set value in the text field
    //     else { setTextValue(""); }     // Clear text field when unchecked
    // };

    const [model, setModel] = useState(false); // Initially false: since, model to be shown on button click.
    // const [view, setView] = useState('');

    const [location, setLocation] = useState(false);
    const addlocation = () => { setLocation(!location); }
    var loc = "off";

    const [selectedOption, setSelectedOption] = useState('');
    // Handle the change event when a user selects an option
    const handleDropdownChange = (e) => { setSelectedOption(e.target.value); };
    // const handleChange = (event) => { setSelectedOption(event.target.value); };

    const isButtonDisabled = !selectedOption || !taskName.trim();

    // Function to handle the date change from the DatePickerComponent
    const handleDateChange = (date) => {
        setStartDate(date); // Update startDate with the selected date
        console.log("Selected date from App:", date); // Log the selected date
    };
    const handleDateChange2 = (date) => {
        setEndDate(date); // Update EndDate with the selected date
        console.log("Selected date from App:", date); // Log the selected date
    };

    // const result = () => {
    //     if(TaskName != "" && selectedOption != "") return false;
    //     else return true;
    // }

    async function fetchdata() {
        try {
            const products = await axios.get("http://localhost:6080/list/get"); console.log(products);
            setList(products.data);
            console.log("40")
            console.log(products.data);
        }
        catch (error) { console.log('41' + error); }
    }

    async function fetchEvents() {
        try {
            const products = await axios.get("http://localhost:6080/task/get"); console.log(products);
            setTask(products.data);
            console.log("40")
            console.log(products.data);
        }
        catch (error) { console.log('41' + error); }
    }

    useEffect(() => {
        fetchdata();
        fetchEvents();
        console.log(task)
        task.map((item, index) => {
            // newEvent = { start: startDate, end: endDate, title: taskName };
            // // newEvent = { start: moment(start).toDate(), end: moment(start).add(6, 'hour').toDate(), title };
            // setEvents([...events, newEvent]);

            newEvent = { start: item.startDate, end: item.endDate, title: item.task };
            setEvents([...events, newEvent]);
        })
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
        //     {
        //         start: new Date(2025, 0, 4, 16, 0),
        //         end: new Date(2025, 0, 4, 17, 0),
        //         title: 'Event 4',
        //     },
        //     {
        //         start: new Date(2025, 0, 4, 17, 30),
        //         end: new Date(2025, 0, 4, 18, 30),
        //         title: 'Event 5',
        //     },
        //     // More events...
        // ];
        setEvents([
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
        ]);
        // setEvents([
        //     {
        //         title: 'Meeting with Bob',
        //         start: new Date(2024, 0, 1, 10, 0),
        //         end: new Date(2024, 0, 1, 12, 0),
        //     },
        //     {
        //         title: 'Lunch with Alice',
        //         start: new Date(2024, 0, 2, 12, 0),
        //         end: new Date(2024, 0, 2, 13, 0),
        //     },
        // ]);
    }, [])

    // Handle selecting a slot to create an event
    const handleSelectSlot = ({ start, end }) => { //async 
        console.log(start); console.log(end);
        // setStartDate(start);
        // setEndDate(end);
        console.log(startDate);
        console.log(endDate);
        setStartDate(moment(start).toDate());
        setEndDate(moment(start).add(6, 'hour').toDate());  // Add 6 hour to the start time

        // const title = prompt("Enter the event title:");
        // if (title) {
        //     console.log(startDate); console.log(endDate);
        //     const newEvent = { start: moment(start).toDate(), end: moment(start).add(6, 'hour').toDate(), title };
        //     setEvents([...events, newEvent]);
        // }

        // setIsOpen(!isOpen);
        // const id = 1;https://dummyjson.com/products/${id}
        setModel(true);
        // const products = await axios.get(`http://localhost:6080/list/get/675d33ae651ede04c2d6e9a5`); console.log(products);
        // setView(products.data.products);
        // setView(products.data);

        // const title = prompt("Enter the event title:");
        // if (title) {
        //     const newEvent = { start: moment(start).toDate(), end: moment(end).toDate(), title };
        //     setEvents([...events, newEvent]);
        // }

        // newEvent = {
        //     startdate: startDate,//moment(start).toDate(),//new Date(year,month,date,hour,minute,second),
        //     enddate: endDate,
        // };
        // const startdate = moment(start).toDate();
        // // console.log(newEvent['startdate']);
        // // console.log(newEvent['startdate'].getMonth());
        // const year = startdate.getFullYear();
        // const month = startdate.getMonth();
        // const date = startdate.getDate();
        // const hour = startdate.getHours();
        // const minute = startdate.getMinutes();
        // const second = startdate.getSeconds();

        // start = new date(year, month, date, hour, minute, second);
        // end = new date(year, month, date, hour + 6, minute, second);
        // start: new Date(2024, 0, 1, 10, 0)
        // const endTimeString = prompt("Enter the end time (e.g., 2:00 PM):");
        // const end1 = moment(endTimeString, "h:mm A").toDate();  // Parse the input time string
        // console.log(end1);
        // const year = end1.getFullYear();
        // const month = end1.getMonth();
        // const date = end1.getDate();
        // const hour = end1.getHours();
        // const minute = end1.getMinutes();
        // const second = end1.getSeconds();
    };
    console.log(startDate);
    console.log(endDate);

    const addlist = async (event) => {
        event.preventDefault()
        let user = localStorage.getItem('user');  // Get the user data from localStorage
        if (user) {
            let userObj = JSON.parse(user);         // Parse the JSON string into an object
            let id1 = userObj._id;        // Access the _id property
            console.log(id1);  // Output the _id
            const title = prompt("Enter List Name:");
            if (title) {
                const data = { userId: id1, listType: title };
                const products = await axios.post("http://localhost:6080/list/save", data); console.log("16")
                console.log(products)
                setList([...list, title]);  // Add new list to the list state
            }
        }
        else { console.log("No user found in localStorage."); }
    }

    const handleSubmit = async () => {
        console.log(selectedOption);

        // newEvent = { taskName: taskName, listId: selectedOption}
        // newEvent = { taskName: taskName, listId: selectedOption, startDate: startDate}
        // newEvent = { taskName: taskName, listId: selectedOption,  endDate: endDate}
        // newEvent = { taskName: taskName, listId: selectedOption, startDate: startDate,  endDate: endDate }

        // checked1 ? 
        //     (checked2 ? 
        //         (newEvent = { taskName: taskName, listId: selectedOption, startDate: startDate,  endDate: endDate };) : 
        //         (newEvent = { taskName: taskName, listId: selectedOption, startDate: startDate})
        //     ) : 
        //     (checked2 ? 
        //         (newEvent = { taskName: taskName, listId: selectedOption,  endDate: endDate};) : 
        //         (newEvent = { taskName: taskName, listId: selectedOption};)
        //     )

        loc = location ? "on" : "off";

        const newEvents = (
            checked1 ?
                (checked2 ?
                    { listId: selectedOption, task: taskName, startDate: startDate, endDate: endDate, location: loc, nc: 1 } :
                    { listId: selectedOption, task: taskName, startDate: startDate, location: loc, nc: 2 }
                ) :
                (checked2 ?
                    { listId: selectedOption, task: taskName, endDate: endDate, location: loc, nc: 3 } :
                    { listId: selectedOption, task: taskName, location: loc, nc: 4 }
                )
        );
        // newEvent = { ...newEvent, taskName, selectedOption }; 
        // newEvent = { listId: selectedOption, task: taskName }
        // newEvent = {...newEvent, (
        //     checked1 ? (checked2 ? { startDate: startDate,  endDate: endDate } : { startDate: startDate }) : (checked2 ? { endDate: endDate } : { })
        // ) };


        console.log(newEvents);
        axios.post("http://localhost:6080/task/save", newEvents)
            .then(response => {
                console.log('Task saved:', response.data);
                console.log(taskName);

                newEvent = { start: startDate, end: endDate, title: taskName };
                // newEvent = { start: moment(start).toDate(), end: moment(start).add(6, 'hour').toDate(), title };
                setEvents([...events, newEvent]);
                // setEvents([...events, newEvent]);
            })
            .catch(error => {
                console.error('Error saving task:', error.response?.data || error.message);
            });

        // console.log('216');
        // const products = await axios.post("http://localhost:6080/task/save", newEvent); console.log(products);
        // setEvents([...events, newEvent]);

        setTaskName(''); setSelectedOption(''); setChecked1(false); setChecked2(false);
        // const endTimeString = prompt("Enter the end time (e.g., 2:00 PM):");
        // const end = moment(endTimeString, "h:mm A").toDate();  // Parse the input time string
        // console.log(end);
    }
    console.log(events);

    events.map((item, index) => { console.log(item); })

    // Handle clicking on an event
    const handleSelectEvent = (event) => {
        // Show event details in an alert or modal (you could expand this for editing, etc.)
        alert(`Event title: ${event.title}, Start: ${moment(event.start).format("LLL")}, End: ${moment(event.end).format("LLL")}`);
    };

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
        // const eventCount = localEvents.filter((e) => moment(e.start).isSame(moment(date), 'day')).length; console.log(eventCount);
        const eventCount = events.filter((e) => moment(e.start).isSame(moment(date), 'day')).length; console.log(eventCount);
        const style = {
            display: 'flex',
            flexDirection: 'column',  // Stack events vertically
            justifyContent: 'flex-start',
            position: 'relative', // Needed for correct event stacking
            height: `${eventCount * 400}px`,  // Adjust this height to fit all events
            border: '2px solid green'
        };

        return { style };
    };
    // border: '5px solid red', height: 500
    return (
        <div style={{}}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                onSelectSlot={handleSelectSlot}
                onSelectEvent={handleSelectEvent}  // Add the event click handler
                selectable
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
            {/* {isOpen && (<div style={{border: '1px solid red', position: 'absolute', top: '100px', left: '100px'}}>{"Add Task"}</div>)} */}
            {model && (  //&& view
                // <div style={{border: '1px solid blue',background: "rgba(0, 0, 0, 0.5)", position: 'fixed', top: '200px', left: '200px' }}>
                //     <div style={{backgroundColor: 'white'}}>
                //         <div>ADD TASK</div>
                //         <div onClick={modalclose}>close</div> 
                //     </div>
                // </div>
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-header"> {/* <div>ADD TASK</div> */}
                            <button onClick={modalClose}>Close</button>
                        </div>
                        <div className="modal-content">
                            {/* <h2>{view.title}</h2> */}
                            {/* <h2 style={{ border: '1px solid red', textAlign: 'center' }}>{"ADD TASK"}</h2> */}
                            {/* <img src={view.thumbnail} alt={view.title} />
                                <p>{view.description}</p>
                                <h3>Price: {view.price}</h3> */}

                            {/* style={{border: '1px solid blue'}} */}
                            <form>
                                <div style={{ display: 'flex', marginBottom: '10px' }}>
                                    <label htmlFor="taskname"><h3 style={{ border: '1px solid red', width: '120px', height: '40px', textAlign: 'center' }}> Task Name</h3></label>
                                    <div><input type="text" id="taskname" style={{ width: '240px', height: '40px', padding: '8px', fontSize: '20px' }} value={taskName} onChange={handleTaskName} /></div>
                                </div>
                                <div style={{ display: 'flex', marginBottom: '10px' }}>
                                    <label htmlFor="options"><h3 style={{ border: '1px solid red', width: '120px', textAlign: 'center', height: '40px' }}>Select List</h3></label>
                                    <select id="options" value={selectedOption} onChange={handleDropdownChange} style={{ width: '250px', height: '40px', padding: '8px', fontSize: '20px' }}>
                                        <option key={1} value="">Select...</option>
                                        {list.map((item, index) => (
                                            <option key={item._id} value={item._id}>{item.listType}</option>))}
                                        {/* <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option> */}
                                    </select>
                                    <button style={{
                                        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px',
                                        borderRadius: '50%',  // Makes the background circular
                                        backgroundColor: '#4CAF50', // Circular background color
                                        color: 'white',  // Text color
                                        fontFamily: 'Arial, sans-serif',
                                        fontWeight: 'bold',
                                        fontSize: '20px',
                                        textTransform: 'uppercase',
                                    }} onClick={addlist}>
                                        +
                                    </button>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ flexGrow: '1' }}><b>Start Date</b></div>
                                    <div style={{ flexGrow: '1', paddingLeft: '30px' }}><b>Due Date</b></div>
                                </div>
                                <div style={{ display: 'flex', marginBottom: '10px' }}>
                                    <div style={{ marginRight: '34px' }}>
                                        {/* <label> <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /> Check to set value in text field </label> */}
                                        <input type="checkbox" style={{ transform: 'scale(1.5)', marginRight: '10px' }} checked={checked1} onChange={handlechecked1} />
                                        {/* <datetime /> */}
                                        <DatePickerComponent onDateChange={handleDateChange} disabled={isDisabled1} start={startDate} />
                                        {/* start={startDate} */}
                                    </div>
                                    <div>
                                        <input type="checkbox" style={{ transform: 'scale(1.5)', marginRight: '10px' }} checked={checked2} onChange={handlechecked2} />
                                        {/* <input type="text" style={{ width: '140px', height: '40px', padding: '8px', fontSize: '20px' }} /> */}
                                        <DatePickerComponent onDateChange={handleDateChange2} disabled={isDisabled2} end={endDate} />
                                    </div>
                                </div>
                            </form>
                            <button onClick={addlocation}> {location ? "Remove Location" : "Add Location"} </button>
                            {/* <div> */}
                            {/* location ?
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.338484090619!2d75.82439617422045!3d26.892750760950396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db69383e9cba7%3A0xfa366ce932edaee3!2sSagar%20Fashions!5e0!3m2!1sen!2sin!4v1735478713395!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>   
                                        : ""  */
                            }
                            {/* </div> */}
                            <div style={{ width: '100%', height: '400px', border: 'none' }}>
                                {location &&
                                    (
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.338484090619!2d75.82439617422045!3d26.892750760950396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db69383e9cba7%3A0xfa366ce932edaee3!2sSagar%20Fashions!5e0!3m2!1sen!2sin!4v1735478713395!5m2!1sen!2sin"
                                            width="600"
                                            height="450"
                                            style={{ border: '0' }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Google Map"
                                        />
                                    )
                                }
                            </div>
                            <button style={{ border: '1px solid red', width: '100%' }} disabled={isButtonDisabled} onClick={handleSubmit}><h3><b>ADD TASK</b></h3></button>
                            {/* <span style={{ border: '1px solid blue' }}>disabled={isButtonDisabled}
                                <input type="text" />
                                <div>
                                    <select id="options" value={selectedOption} onChange={handleChange}>
                                        <option value="">Select...</option>
                                        {/* <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option> */}{/*
                                    </select>
                                </div>
                            </span> */}
                        </div>
                    </div >
                </div >
            )
            }
        </div >
    );
}
// function CircleLetterLogo({ onclick }) {
//     return (
//         <button style={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             width: '40px',
//             height: '40px',
//             borderRadius: '50%',  // Makes the background circular
//             backgroundColor: '#4CAF50', // Circular background color
//             color: 'white',  // Text color
//             fontFamily: 'Arial, sans-serif',
//             fontWeight: 'bold',
//             fontSize: '20px',
//             textTransform: 'uppercase',
//         }} onClick={() => onclick}>
//             +
//         </button>
//     );
// };
export default MyCalendar4;
// // -------------------------------------------------------------------
// // import React, { useState } from 'react';
// // // import './Modal.css';
// // import "./Calendar.css";
// // functi
// on ModalWithIframe() {
// //   const [isModalOpen, setIsModalOpen] = useState(false); // Controls modal visibility
// //   const [showIframe, setShowIframe] = useState(true);    // Controls iframe visibility

// //   const openModal = () => setIsModalOpen(true);

// //   const closeModal = () => setIsModalOpen(false);

// //   const toggleIframe = () => {
// //     setShowIframe(prevState => !prevState); // Toggle the iframe visibility
// //   };

// //   return (
// //     <div>
// //       <button onClick={openModal}>Open Modal with Map</button>

// //       {isModalOpen && (
// //         <div className="modal-overlay">
// //           <div className="modal">
// //             <div className="modal-header">
// //               <h2>Google Map</h2>
// //               <button onClick={closeModal}>Close Modal</button>
// //             </div>
// //             <div className="modal-content">
// //               {/* Conditionally render the iframe based on the `showIframe` state */}
// //               <form>
// //               <button onClick={toggleIframe}>
// //                 {showIframe ? 'Hide Map' : 'Show Map'}
// //               </button>
// //               </form>
// //               {showIframe && (
// //                 <iframe
// //                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.338484090619!2d75.82439617422045!3d26.892750760950396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db69383e9cba7%3A0xfa366ce932edaee3!2sSagar%20Fashions!5e0!3m2!1sen!2sin!4v1735478713395!5m2!1sen!2sin"
// //                   width="600"
// //                   height="450"
// //                   style={{ border: '0' }}
// //                   allowFullScreen=""
// //                   loading="lazy"
// //                   referrerPolicy="no-referrer-when-downgrade"
// //                   title="Google Map"
// //                 />
// //               )}
// //               {/* <button onClick={toggleIframe}>
// //                 {showIframe ? 'Hide Map' : 'Show Map'}
// //               </button> */}
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default ModalWithIframe;


// import React from 'react';

// // rendered inside the Outlet in Page1
// const MyCalendar4 = () => {
//   return (
//     <div>
//       <h1>This is the Calendar Page</h1>
//       {/* Calendar-specific content */}
//     </div>
//   );
// };

// export default MyCalendar4;
//------------------------------------------------------------------------------------------------------
// import React, { useState, useEffect } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import axios from 'axios';
// import "./Calendar.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import DatePickerComponent from "./DatePickerComponent";

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
//     // const handleChange = (event) => { setSelectedOption(event.target.value); };

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
//             setList(products.data); console.log("40"); console.log(products.data);
//         }
//         catch (error) { console.log('41' + error); }
//     }

//     async function fetchEvents() {
//         try {
//             const products = await axios.get("http://localhost:6080/task/get"); console.log(products);
//             setTask(products.data); console.log("40"); console.log(products.data);
//         }
//         catch (error) { console.log('41' + error); }
//     }

//     useEffect(() => {
//         fetchdata(); fetchEvents(); console.log(task)
//         task.map((item, index) => { newEvent = { start: item.startDate, end: item.endDate, title: item.task }; setEvents([...events, newEvent]); })
//         console.log(events);
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
//         // setStartDate(start);  // setEndDate(end);
//         console.log(startDate); console.log(endDate);
//         setStartDate(moment(start).toDate()); setEndDate(moment(start).add(6, 'hour').toDate());  // Add 6 hour to the start time

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

//     // const [localEvents, setLocalEvents] = useState(events);

//     // Custom event styling to prevent overflow and stack events
//     // const eventPropGetter = (event) => {
//     //     return { style: { backgroundColor: '#3174ad',  // Event color
//     //                         color: 'white',  // Text color
//     //                         borderRadius: '5px',

//     //                         margin: '2px',  // Space between events

//     //                         padding: '5px',  // Space inside events
//     //                         height: 'auto',  // Ensure events do not overflow

//     //                         maxWidth: '100%',
//     //                         position: 'relative', // To stack events
//     //                         zIndex: 1, // Ensure stacking
//     //                         border: '2px solid blue'                                } };
//     // };

//     // Custom day cell rendering to adjust the height and stacking of events
//     // const dayPropGetter = (date) => {
//     //     const eventCount = localEvents.filter((e) => moment(e.start).isSame(moment(date), 'day')).length; console.log(eventCount);
//     //     const style = {
//     //         display: 'flex', flexDirection: 'column',  // Stack events vertically
//     //         justifyContent: 'flex-start', position: 'relative', // Needed for correct event stacking
//     //         height: `${eventCount * 100}px`,  // Adjust this height to fit all events
//     //         border: '2px solid red'
//     //     };

//     //     return { style };
//     // };

//     // const [events, setEvents] = useState([]);
//     const [localEvents, setLocalEvents] = useState(events);

//     // useEffect(() => {
//     //     // Fetch events when the component mounts
//     //     async function fetchEvents() {
//     //         try { const response = await axios.get("http://localhost:6080/task/get"); setEvents(response.data); }
//     //         catch (error) { console.log('Error fetching events:', error); }
//     //     }

//     //     fetchEvents();
//     // }, []);

//     // Handle selecting a slot to create an event
//     // const handleSelectSlot = ({ start, end }) => { setEvents([...events, { start: start, end: end, title: 'New Event' }]); };

//     // Calculate the required height for each day based on the number of events for that day
//     const calculateTotalHeight = () => {
//         const eventHeight = 50;  // Height for each event in pixels
//         let totalHeight = 0;

//         // localEvents.map((item, index) => { console.log(item); })

//         // Calculate total height based on the number of events across all days
//         localEvents.forEach(event => {
//             const eventCountForDay = localEvents.filter(e => moment(e.start).isSame(moment(event.start), 'day')).length;
//             totalHeight += eventCountForDay * eventHeight;
//             // console.log(totalHeight);
//         });

//         console.log(totalHeight);

//         // Make sure totalHeight is enough to fit all events (add padding for spacing)
//         return totalHeight + 200;  // 200px padding for general spacing
//     };

//     // Dynamically calculate height for each day cell
//     const dayPropGetter = (date) => {
//         // console.log(date);
//         // console.log(localEvents);

//         const eventCount = localEvents.filter((e) => moment(e.start).isSame(moment(date), 'day')).length; // Count how many events are on this date
//         // console.log(eventCount);
//         // Set the height for the day cell to fit all events
//         const eventHeight = 50; // Height for each event in pixels
//         const height = eventCount * eventHeight; // Total height for the day cell
//         console.log(height);
//         return {
//             style: {
//                 height: `${height}px`, paddingBottom: '5px', // Adjust bottom padding for space between events
//                 border: '1px solid red'
//             }
//         };
//     };

//     // Custom event styling
//     const eventPropGetter = (event) => {
//         return {
//             style: {
//                 backgroundColor: '#3174ad', color: 'white', borderRadius: '5px', padding: '5px', height: 'auto', marginBottom: '5px',  // Add margin to separate events
//                 border: '4px solid blue'
//             }
//         };
//     };

//     return (
//         <div>
//             {/* Dynamic height for the calendar */}
//             {/* console.log(calculateTotalHeight()); style={{ minHeight: calculateTotalHeight() }} */}
//             <div>
//                 <Calendar
//                     localizer={localizer}
//                     events={events}
//                     startAccessor="start"
//                     endAccessor="end"
//                     onSelectSlot={handleSelectSlot}
//                     onSelectEvent={handleSelectEvent}  // Add the event click handler
//                     selectable
//                     eventPropGetter={eventPropGetter} // Apply custom event styles
//                     dayPropGetter={dayPropGetter} // Apply custom day styles
//                     views={['month', 'week', 'day']}  // Allow month, week, and day views
//                     style={{ height: '100vh', minHeight: calculateTotalHeight() }}
//                     components={{
//                         event: ({ event }) => (
//                             <div
//                                 style={{
//                                     backgroundColor: '#3174ad',
//                                     color: 'white',
//                                     padding: '5px',
//                                     borderRadius: '5px',
//                                     fontSize: '12px',
//                                 }}
//                             >
//                                 {event.title}
//                             </div>
//                         ),
//                     }}
//                 />
//                 {/* <Calendar
//                     localizer={localizer}
//                     events={events}
//                     startAccessor="start"
//                     endAccessor="end"
//                     onSelectSlot={handleSelectSlot}
//                     selectable
//                     eventPropGetter={eventPropGetter}
//                     dayPropGetter={dayPropGetter} // Apply custom day styles
//                     views={['month', 'week', 'day']}
//                     style={{ width: '100%' }}
//                 /> */}
//             </div>
//         </div>
//     );
// }

// export default MyCalendar4;
