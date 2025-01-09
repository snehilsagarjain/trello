// Filename - App.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

// function DragDropList() {
// class App extends Component {
function List() {
    // state = { message: "" };

    // const [editable, setEditable] = useState();
    // const [focusStatus, setFocusStatus] = useState('');
    // const [count, setCount] = useState("")
    // const [focusStatus, setFocusStatus] = useState('');

    //------------------------------------
    // UseStates for multiple lists:: States to manage the lists of items - Initialized with an array of items
    const [list, setList] = useState([]);
    const [list1, setList1] = useState(["Item 1", "Item 2", "Item 3"]);
    const [list2, setList2] = useState(["Item 4", "Item 5", "Item 6"]);
    // const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);
    const [divs, setDivs] = useState([]); // State to hold the list of divs
    const [item, setItem] = useState([]);
    let id = "", token = "";
    // let response = "";

    useEffect(() => {
        const userdata = () => {
            const userArray = JSON.parse(localStorage.getItem('user')) || []; // Default to empty array if not found
            if (userArray.length > 0) {
                // const userId = '675d33ae651ede04c2d6e9a5';  // Replace with the id you're looking for
                // const user = userArray.find(item => item.id === userId);
                // if(user){} else{ console.log('User not found'); }

                // Access the first item in the array
                const user = userArray[0];
                console.log(user);
                // console.log(id1[0]); //Undefined
                id = user['id'];
                console.log(id);
                token = user['token'];
                console.log(token);
                // console.log(user['token'])

            }
            // else { Navigate("/login"); }
        }
        const fetchData = async () => {
            console.log(`>>>>>>>>>>>>>>`);

            try {
                // get list details based on userid
                const response = await axios.get(`http://localhost:6080/list/get/${id}`, { headers: { "authorization": `Bearer ${token}` } });
                // const snehil = await axios.get(`https://fakestoreapi.com/products/1`, { headers: { "authorization": `Bearer ${token}` } });
                // console.log(snehil);
                // setItem(snehil.data);
                //  response = await axios.get(`http://localhost:6080/list/get/${id}`, { headers: { "authorization": `Bearer ${token}` } });
                // const mylistData = await list_model.find().populate({ match: { userId: id } })
                console.log(`>>>>>>response>>>>>>>`, response);
                console.log(`>>>>>>>>>>>>>`, response.data);
                // if (response.data.length > 0) {
                //     console.log("58")
                // }

                setItem(response.data); // Assuming the response contains data in `response.data`
                // setItem(response.data[0])
                // if (response.data.length > 0) {
                //     setItem(response.data[0]); // Set first item if data is available
                // }
                // console.log(`>>>>>>>response.data>>>>>>`, response.data[0]);
                console.log(`>>>>>>65>>item=>>>>>>>`, item);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        userdata();
        fetchData();
        console.log(`>>>>>>72>>item=>>>>>>>`, item);

        // setItem(response.data); // Assuming the response contains data in `response.data`
        // console.log(`>>>>>>>>item=>>>>>>>`, item);
        // console.log(`>>>>>>>>>>>>>`, response.data);

        // Cleanup function if needed (optional)
        return () => {
            // Clean up logic, e.g., cancel any axios requests if needed
        };
    }, []); // Empty dependency array ensures this runs once on mount



    // Store the state setters in an object
    const setters = { list1: setList1, list2: setList2, list: setList };

    // Generic function to update a list based on its name
    const updateList = (listName, index, event) => {
        setters[listName](prevItems =>
            prevItems.map((item, idx) =>
                idx === index ? event.target.value : item // Update the item at the specific index with the input value
            )
        );
    };
    // list.map((item) => item === listName ? event.target.value: item )
    // list1.map((item) => item === listName ? event.target.value: item )
    // list2.map((item) => item === listName ? event.target.value: item )
    // -------------------------------------
    // Create a new array, preserving all elements except the one at the specified index
    // const updatedItems = [
    //   ...items.slice(0, index), // Copy items before the updated index
    //   newItem,                 // Add the new item at the specified index
    //   ...items.slice(index + 1) // Copy items after the updated index
    // ];

    // // Update the state with the new array
    // setItems(updatedItems);
    // };

    // Function to update an item at a specific index
    // const handleupdateItem = (index, event) => {
    const handleChange = (index, event) => {
        setItems(prevItems =>
            prevItems.map((item, idx) =>
                idx === index ? event.target.value : item // Update the item at the specific index with the input value
            )
        );
    };
    // ---------------------------------------

    // Store the current values of the lists in an object
    const lists = { list1: list1, list2: list2, list: list };

    // Function to add a new task to the list dynamically
    const add = async (listName) => {
        const newTask = `Task ${lists[listName].length + 1}`;

        //     setters[listName]([...lists[listName], newTask]);
        setters[listName]((prevItems) => [...prevItems, newTask]); // Add a new task
        // console.log(id);
        // Handle API calls for adding tasks
        if (listName === 'list') { await axios.post(`http://localhost:6080/list/save`, { userId: { id }, listType: 'someType' }, { headers: { "authorization": `Bearer ${token}` } }); }
        else { await axios.post(`http://localhost:6080/task/save`, { listId: { id }, task: { newTask } }, { headers: { "authorization": `Bearer ${token}` } }); }
    };

    // Function to remove a task from the list dynamically
    const removeTask = (listName, item) => {
        // setters[listName](prevItems => setters[listName](lists[listName].filter(task => task !== item)) ); 
        // This line is not updating the state properly because lists[listName] is a reference to the state, and 
        // modifying it directly can lead to unexpected behavior. Instead, use the state directly in the setter function:

        setters[listName]((prevItems) => prevItems.filter((task) => task !== item)); // Remove a task
        //delete api
    };

    // Functions to add an item at the end of the array
    const addItem = (newItem) => { setItems(prevItems => [...prevItems, newItem]); };
    const addDiv = () => {
        setDivs([...divs, `Div ${divs.length + 1}`]); // Create a new div and add it to the state
    };
    //--------------------------------------

    // ---------------------------------------
    // Handle the drag start event
    const handleDragStart = (e, item, list) => {
        // Set the dragged item's ID and the list it came from
        e.dataTransfer.setData("item", item);
        e.dataTransfer.setData("sourceList", list);
    };

    // Handle the drop event
    const handleDrop = (e, targetList) => {
        e.preventDefault();
        const draggedItem = e.dataTransfer.getData("item"), sourceList = e.dataTransfer.getData("sourceList");
        if (sourceList !== targetList) { // Update the lists based on where the item was dropped
            if (sourceList === "list1") {
                setList1(list1.filter(item => item !== draggedItem)); setList2([...list2, draggedItem]);
                for (const element of lists['list1']) { console.log(element); }
                // for (const element of list1) { console.log(element); }
                for (const element of lists['list2']) { console.log(element); }
            }
            else {
                setList2(list2.filter(item => item !== draggedItem)); setList1([...list1, draggedItem]);
                for (const element of lists['list1']) { console.log(element); }
                for (const element of lists['list2']) { console.log(element); }
            }
        }
    };

    // Allow dropping by preventing the default behavior
    const handleDragOver = (e) => { e.preventDefault(); };
    // ---------------------------------------

    //----------------------------------------
    // Event handler when input gains focus
    // const handleFocus = () => { setFocusStatus('Input has gained focus!'); };

    // Event handler when input loses focus
    // const handleBlur = () => { setFocusStatus('Input has lost focus!'); };
    //-----------------------------------------
    return (
        <div style={{ display: "flex" }}>
            {/* Render the fetched items */}
            {item.length > 0 ? (
                item.map((it, index) => (
                    <div key={index}>
                        <div style={{ border: "1px solid black", backgroundColor: "green", margin: '10px' }}>
                            <input type="text" onChange={(event) => updateList('list', index, event)}
                                placeholder="List Name" value={item.listType}
                                style={{ margin: '10px', width: '90%', border: '1px solid black' }} />
                                 {/* || "" */}
                            {/* <input 
                                type="text" 
                                value={it.listType || ""} // Adjust according to the structure of your item
                                onChange={(e) => {
                                    const updatedItem = [...item];
                                    updatedItem[index] = { ...updatedItem[index], listType: e.target.value };
                                    setItem(updatedItem); // Update state with modified value
                                }}
                            /> */}
                        </div>
                        <div
                            id="list1"
                            style={{ margin: "10px", border: "1px solid #ccc", padding: "10px", width: "300px" }}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, "list1")}
                        >
                            <button onClick={() => add('task')}>Add Task</button>
                            {list1.map((item, index) => (
                                <div key={index} draggable onDragStart={(e) => handleDragStart(e, item, "list1")}
                                    style={{ margin: "5px", padding: "5px", background: "#f0f0f0", cursor: "move" }} >
                                    <input key={index} type="text" onChange={(event) => updateList('list1', index, event)}
                                        placeholder="Focus on me!" value={item.task} style={{ margin: '5px' }} />
                                    <button style={{ border: 'black solid 1px' }} onClick={() => removeTask('list1', item)} >x</button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : ( <p>Loading...</p> /* Show loading while items are being fetched */ )}
            {/* {
                item.map((item) => {
                    // { console.log(item) }
                    // <div>{item}</div>
                    < div >
                        <div style={{ border: "1px solid black", backgroundColor: "green", margin: '10px' }}>
                            <input
                                type="text"
                                onChange={(event) => updateList('list', index, event)}
                                placeholder="Focus on me!"
                                value={item.listType}
                                style={{ margin: '10px', width: '90%', border: '1px solid black' }}
                            />
                        </div>

                        <div
                            id="list1"
                            style={{ margin: "10px", border: "1px solid #ccc", padding: "10px", width: "300px" }}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, "list1")}
                        >
                            <button onClick={() => add('task')}>Add Task</button>
                            {list1.map((item, index) => (
                                <div
                                    key={index}
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, item, "list1")}
                                    style={{ margin: "5px", padding: "5px", background: "#f0f0f0", cursor: "move" }}
                                >
                                    <input key={index}
                                        type="text"
                                        onChange={(event) => updateList('list1', index, event)}
                                        placeholder="Focus on me!"
                                        value={item}
                                        style={{ margin: '5px' }}
                                    />
                                    <button style={{ border: 'black solid 1px' }} onClick={() => removeTask('list1', item)} >x</button>
                                </div>
                            ))}
                        </div>
                    </div>
                })
            } */}

            <div style={{ border: "3px solid red", backgroundColor: "blue", margin: '10px' }}>
                <button onClick={() => add('list')}>Add List</button>
            </div>

            {/* List 1 */}
            {/* key={index} */}
            {/* <div>
                <div style={{ border: "1px solid black", backgroundColor: "green", margin: '10px' }}>
                    <input
                        type="text"
                        onChange={(event) => updateList('list', index, event)}
                        placeholder="Focus on me!"
                        value={`List ${list.length + 1}`}
                        style={{ margin: '10px', width: '90%', border: '1px solid black' }}
                    /> */}
            {/* , backgroundColor: 'none' */}
            {/* </div>
                <div
                    id="list1"
                    style={{ margin: "10px", border: "1px solid #ccc", padding: "10px", width: "300px" }}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, "list1")}
                >
                    <button onClick={() => add('list1')}>Add Task</button>
                    {list1.map((item, index) => (
                        <div
                            key={index}
                            draggable
                            onDragStart={(e) => handleDragStart(e, item, "list1")}
                            style={{ margin: "5px", padding: "5px", background: "#f0f0f0", cursor: "move" }}
                        >
                            <input key={index}
                                type="text"
                                onChange={(event) => updateList('list1', index, event)}
                                placeholder="Focus on me!"
                                value={item}
                                style={{ margin: '5px' }}
                            />
                            <button style={{ border: 'black solid 1px' }} onClick={() => removeTask('list1', item)} >x</button>
                        </div>
                    ))}
                </div>
            </div> */}
            {/* List 2 */}
            {/* <div>
                <div style={{ border: "1px solid black", backgroundColor: "green", margin: '10px' }}>
                    <input
                        type="text"
                        onChange={(event) => updateList('list', index, event)}
                        placeholder="Focus on me!"
                        value={`Task ${list.length + 1}`}
                        style={{ margin: '10px', width: '90%', border: '1px solid black' }}
                    />
                </div>
                <div
                    id="list2"
                    style={{ margin: "10px", border: "1px solid #ccc", padding: "10px", width: "300px" }}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, "list2")}
                >
                    <button onClick={() => add('list2')}>Add Task</button>
                    {list2.map((item, index) => (
                        <div
                            key={index}
                            draggable
                            onDragStart={(e) => handleDragStart(e, item, "list2")}
                            style={{ margin: "5px", padding: "5px", background: "#f0f0f0", cursor: "move" }}
                        >
                            <input key={index}
                                type="text"
                                onChange={(event) => updateList('list2', index, event)}
                                placeholder="Focus on me!"
                                value={item}
                                style={{ margin: '5px' }}
                            /> */}
            {/* readOnly={editable}
                  onFocus={handleFocus}  // Triggered when input gains focus
                  onBlur={ (event) => handleupdateItem(index, event) }    // Triggered when input loses focus
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setEditable(false);
                      this.setState({ message: e.target.value }, () => { alert(this.state.message); });
                    }
                  }}
              */}
            {/* <button style={{ border: 'black solid 1px' }} onClick={() => removeTask('list2', item)} >x</button>
                        </div>
                    ))}
                </div>
            </div> */}
        </div >
    );
}
export default List;
// export default DragDropList;

// There are generally a couple ways to update arrays in JavaScript. Importantly, whatever you do, you want to make sure you don't mutate the existing state.

// One way is to make a shallow copy of the array, mutate the copy, and set the new state:

// function update(index, newValue) {
//   // shallow copy
//   const newArray = [..._value];
//   // mutate copy
//   newArray[index] = newValue;
//   // set state
//   setValue(newArray);
// }
// Another option is to map over the array, returning the new value when the index matches the desired index.

// function update(index, newValue) {
//   const newArray = _value.map((v, i) => {
//     if (i === index) return newValue;
//     return v;
//   });
//   setValue(newArray);
// }

// In React you need to return a new state array reference.
// You can achieve this by mapping the previous state to the next state, using the index to match by,
// when the index matches return the new value, otherwise return the current value.
// const updateByIndex = (newValue, index) => { setValue(values => values.map((value, i) => i === index ? newValue: value); };

// const [users, setUsers] = useState([
//   { name: 'Deepak', rollNo: '123', },
//   { name: 'Yash', rollNo: '124', },
//   { name: 'Raj', rollNo: '125', },
//   { name: 'Rohan', rollNo: '126', },
//   { name: 'Puneet', rollNo: '127', },
//   { name: 'Vivek', rollNo: '128', },
//   { name: 'Aman', rollNo: '129', },
// ]);

// const handlechange = (index) => {
//   const newUsers = [...users];
//   newUsers[index].name = 'New Name';
//   newUsers[index].rollNo = 'New RollNo';
//   setUsers(newUsers);
// };

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

