import axios from "axios";
import { react, useEffect, useState } from "react";

function Newlist() {
    const [items, setItems] = useState([]);
    const [editableItems, setEditableItems] = useState({}); // State to track which input is editable
    const [color, setColor] = useState("");
    useEffect(() => {
        fetchdata();
    }, [])

    async function fetchdata() {
        try{
            const response = await axios.get(`http://localhost:6080/list/get/675d33ae651ede04c2d6e9a5`); console.log(`>>>>>>>>`, response);
            setItems(response.data); console.log("item=", items);
        } catch(error){
            console.error("Error fetching data", error);
        }
    }

    const handleClick = (id) => { // Toggle the editability of an input when clicked // console.log(id)
        setEditableItems((prevState) => ({
            ...prevState,
            [id]: !prevState[id], // Toggle editability
        }));  
        // console.log(id);
        // console.log("editableItems["+id+"]=",editableItems[id]);
        // console.log("!editableItems["+id+"]=",!editableItems[id]); 
    };

    const handleDragStart = (e, item, list) => {
        // Set the dragged item's ID and the list it came from
        e.dataTransfer.setData("item", item); //taskid
        e.dataTransfer.setData("sourceList", list); //listid
    
    };

    // Handle the drop event
    const handleDrop = async(e, targetList) => {
        e.preventDefault();
        const draggedItem = e.dataTransfer.getData("item");
        const sourceList = e.dataTransfer.getData("sourceList");        console.log("draggedItem=",draggedItem); console.log("sourceList=",sourceList); console.log("targetList=",targetList);

        if (sourceList !== targetList) { // Update the lists based on where the item was dropped - //update api:: update listid in task table where taskid = sourceitem and listid = targetitem
            try{
            const response = await axios.patch('http://localhost:6080/task/updatetask', { draggedItem, targetList });
            console.log("Task updated:",response);
            fetchdata(); //Refresh data after task is moved - // setItems(response.data); // console.log("item=", items);            // if (sourceList === "list1") { //     setList1(list1.filter(item => item !== draggedItem)); setList2([...list2, draggedItem]);            //     for (const element of lists['list1']) { console.log(element); } //     // for (const element of list1) { console.log(element); } //     for (const element of lists['list2']) { console.log(element); } // } // else {            //     setList2(list2.filter(item => item !== draggedItem)); setList1([...list1, draggedItem]);//     for (const element of lists['list1']) { console.log(element); }            //     for (const element of lists['list2']) { console.log(element); }            // }
            } catch(error){
                console.error("Error updating task:", error);
            }
        }
    };

    // Allow dropping by preventing the default behavior
    const handleDragOver = (e) => { 
        e.preventDefault(); 
    };

    const handleInputChange = (e, listId) => {
        // Handle the change of input (editable items)
        const updatedItems = items.map((list) =>
            list["listDetails"]._id === listId
                ? { ...list, listDetails: { ...list["listDetails"], listType: e.target.value } }
                : list
        );
        setItems(updatedItems);
        console.log(items)
    };

    const handleColorChange = (event) => {
        setColor(event.target.value); // Update state with the new color value
    };
    
    return (

        
        <div style={{ display: "flex" }}> {/*, border: '2px solid blue' */}
            <>
                {/* {console.log("item")} */}
                {
                    items && items.length > 0 ? (
                        <>
                        {/* {console.log("item")} */}
                            {
                                items.map((item, index) => (
                                    <div key={item["listDetails"]._id} style={{ margin: '10px', border: '1px solid black', backgroundColor: color }}>
                                        {/* Editable List Name */}
                                        <div style={{  padding: "10px" }}>
                                        {/* backgroundColor: "green", */}
                                            <input type="text" placeholder="List Name" value={item["listDetails"].listType}
                                                style={{ border: '1px solid black' }}
                                                onClick={() => handleClick(item["listDetails"]._id)}
                                                onChange={(e) => handleInputChange(e, item["listDetails"]._id)}
                                                readOnly={!editableItems[item["listDetails"]._id]} />
                                            <input
                                                type="color"
                                                id="color"
                                                value={color} // Bind value to the state
                                                onChange={handleColorChange} // Set up the change handler
                                            />
                                            {/* call update api for color */}
                                        </div>
                                        <div id="list1" style={{ margin: "10px", border: "1px solid #ccc", padding: "10px", width: "300px" }}
                                            onDragOver={handleDragOver} onDrop={(e) => handleDrop( e, item["listDetails"]._id ) } >
                                            <button onClick={() => add('task')}>Add Task</button>

                                            {item["tasks"].map( ( task, index ) => (
                                                task.map( ( task_i, index ) => (
                                                    <div key={task_i._id} draggable onDragStart={(e) => handleDragStart(e, task_i._id, item["listDetails"]._id)} //taskid,listid
                                                        style={{ margin: "5px", padding: "5px", background: "#f0f0f0", cursor: "move" }} >
                                                            {/* {console.log(task)}
                                                            {console.log(task_i._id)} */}
                                                        <input key={index} type="text" onChange={(event) => updateList('list1', index, event)}
                                                            placeholder="Task Name" value={task_i["task"]} style={{ margin: '5px' }} />
                                                        <button style={{ border: 'black solid 1px' }} onClick={() => removeTask('list1', item)} >x</button>
                                                    </div>
                                                ))
                                            ))}

                                            {/* {list1.map((item, index) => (
                                                <div key={item._id} draggable onDragStart={(e) => handleDragStart(e, item, "list1")}
                                                    style={{ margin: "5px", padding: "5px", background: "#f0f0f0", cursor: "move" }} >
                                                    <input key={index} type="text" onChange={(event) => updateList('list1', index, event)}
                                                        placeholder="Focus on me!" value={item.task} style={{ margin: '5px' }} />
                                                    <button style={{ border: 'black solid 1px' }} onClick={() => removeTask('list1', item)} >x</button>
                                                </div>
                                            ))} */}

                                        </div>
                                    </div>
                                ))
                            }
                        </>
                    )
                        : (<p> Loading... </p>)
                    /* Show loading while items are being fetched */

                }
                <div style={{   margin: '10px' }}> <button onClick={() => add('list')}>Add List</button> </div>
                {/* backgroundColor: "green", border: "1px solid black", */}
            </>
        </div>
        // <div style={{ display: "flex" }}>
        //     {items.length > 0 ? (
        //         items.map((it, index) => (
        //             <div key={index}>
        //                 <div style={{ border: "1px solid black", backgroundColor: "green", margin: '10px' }}>

        //                     <input type="text" onChange={(event) => updateList('list', index, event)}
        //                         placeholder="List Name" value={items.listType || ""}
        //                         style={{ margin: '10px', width: '90%', border: '1px solid black' }} />

        //                     {/* <input type="text" value={it.listType || ""} // Adjust according to the structure of your item
        //                             onChange={(e) => {  const updatedItem = [...item]; updatedItem[index] = { ...updatedItem[index], listType: e.target.value };
        //                                                 setItem(updatedItem); /* Update state with modified value */ /* }}                                       /> */}
        //                 </div>
        //                 <div id="list1" style={{ margin: "10px", border: "1px solid #ccc", padding: "10px", width: "300px" }}
        //                     onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, "list1")} >
        //                     <button onClick={() => add('task')}>Add Task</button>
        //                     {list1.map((item, index) => (
        //                         <div key={index} draggable onDragStart={(e) => handleDragStart(e, item, "list1")}
        //                             style={{ margin: "5px", padding: "5px", background: "#f0f0f0", cursor: "move" }} >
        //                             <input key={index} type="text" onChange={(event) => updateList('list1', index, event)}
        //                                 placeholder="Focus on me!" value={item.task} style={{ margin: '5px' }} />
        //                             <button style={{ border: 'black solid 1px' }} onClick={() => removeTask('list1', item)} >x</button>
        //                         </div>
        //                     ))}
        //                 </div>
        //             </div>
        //         ))
        //     ) : (<p>Loading...</p> /* Show loading while items are being fetched */)}
            // <div style={{ border: "1px solid black", backgroundColor: "green", margin: '10px' }}> <button onClick={() => add('list')}>Add List</button> </div>
        // </div>
    );
}
export default Newlist;
// import axios from "axios";
// import { useEffect, useState } from "react";

// function Newlist() {
//     const [items, setItems] = useState([]);
//     const [editableItems, setEditableItems] = useState({});

//     useEffect(() => {
//         fetchdata();
//     }, []);

//     async function fetchdata() {
//         try {
//             const response = await axios.get(`http://localhost:6080/list/get/675d33ae651ede04c2d6e9a5`);
//             setItems(response.data);
//         } catch (error) {
//             console.error("Error fetching data", error);
//         }
//     }

//     const handleClick = (id) => {
//         setEditableItems((prevState) => ({
//             ...prevState,
//             [id]: !prevState[id], // Toggle editability
//         }));
//     };

//     const handleDragStart = (e, taskId, listId) => {
    
//         e.dataTransfer.setData("taskId", taskId);
//         e.dataTransfer.setData("sourceListId", listId);

// //         // Set the dragged item's ID and the list it came from
// //         e.dataTransfer.setData("item", item); //taskid
// //         e.dataTransfer.setData("sourceList", list); //listid

//     };


//     const handleDrop = async (e, targetListId) => {
//         e.preventDefault();
//         const taskId = e.dataTransfer.getData("taskId");
//         const sourceListId = e.dataTransfer.getData("sourceListId");

//         // const draggedItem = e.dataTransfer.getData("item");
//         // const sourceList = e.dataTransfer.getData("sourceList");        console.log("draggedItem=",draggedItem); console.log("sourceList=",sourceList); console.log("targetList=",targetList);

//         if (sourceListId !== targetListId) {
//             try {
//                 const response = await axios.patch('http://localhost:6080/task/updatetask', { taskId, targetListId });
//                 console.log("Task updated:", response);
//                 fetchdata(); // Refresh data after task is moved
//             } catch (error) {
//                 console.error("Error updating task:", error);
//             }
//         }
//     };


//     const handleDragOver = (e) => {
//         e.preventDefault();
//     };

//     const handleInputChange = (e, listId) => {
//         // Handle the change of input (editable items)
//         const updatedItems = items.map((list) =>
//             list["listDetails"]._id === listId
//                 ? { ...list, listDetails: { ...list["listDetails"], listType: e.target.value } }
//                 : list
//         );
//         setItems(updatedItems);
//     };
//     return (
//         <div style={{ display: "flex" }}>


//             {
//                 items && items.length > 0 ? (


//                 items.map((item) => (

//                     <div key={item["listDetails"]._id} style={{ margin: '10px', border: '1px solid black' }}>
//                         {/* Editable List Name */}
//                         <div style={{ backgroundColor: "green", padding: "10px" }}>
//                             <input type="text" placeholder="List Name" value={item["listDetails"].listType}
//                                 onClick={() => handleClick(item["listDetails"]._id)}
//                                 onChange={(e) => handleInputChange(e, item["listDetails"]._id)}
//                                 readOnly={!editableItems[item["listDetails"]._id]} />
//                         </div>

//                         {/* Tasks Section */}
//                         <div
//                             style={{
//                                 margin: "10px",
//                                 border: "1px solid #ccc",
//                                 padding: "10px",
//                                 width: "300px",
//                             }}
//                             onDragOver={handleDragOver}
//                             onDrop={(e) => handleDrop(e, item["listDetails"]._id)}
//                         >
//                             <button onClick={() => console.log("Add task button clicked")}>Add Task</button>

//                             {item["tasks"].map((task) => (
//                                 <div
//                                     key={task._id}
//                                     draggable
//                                     onDragStart={(e) => handleDragStart(e, task._id, item["listDetails"]._id)}
//                                     style={{ margin: "5px", padding: "5px", background: "#f0f0f0", cursor: "move" }}
//                                 >
//                                     <input
//                                         type="text"
//                                         value={task.task}
//                                         style={{ margin: '5px' }}
//                                         readOnly
//                                     />
//                                     <button style={{ border: 'black solid 1px' }} onClick={() => console.log("Remove Task")}>
//                                         x
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// }

// export default Newlist;

// import axios from "axios";
// import { useEffect, useState } from "react";

// function Newlist() {
//     const [items, setItems] = useState([]);
//     const [editableItems, setEditableItems] = useState({});

//     useEffect(() => {
//         fetchdata();
//     }, []);

//     async function fetchdata() {
//         try {
//             const response = await axios.get(`http://localhost:6080/list/get/675d33ae651ede04c2d6e9a5`);
//             setItems(response.data);
//         } catch (error) {
//             console.error("Error fetching data", error);
//         }
//     }

//     const handleClick = (id) => {
//         setEditableItems((prevState) => ({
//             ...prevState,
//             [id]: !prevState[id], // Toggle editability
//         }));
//     };

//     const handleDragStart = (e, taskId, listId) => {
//         // Store task and list data in the dataTransfer object
//         e.dataTransfer.setData("taskId", taskId);
//         e.dataTransfer.setData("sourceListId", listId);
//         console.log("Drag started:", taskId, listId);
//     };

//     const handleDrop = async (e, targetListId) => {
//         e.preventDefault();
//         const taskId = e.dataTransfer.getData("taskId");
//         const sourceListId = e.dataTransfer.getData("sourceListId");

//         if (sourceListId !== targetListId) {
//             try {
//                 const response = await axios.patch('http://localhost:6080/task/updatetask', { taskId, targetListId });
//                 console.log("Task updated:", response);
//                 fetchdata(); // Refresh data after task is moved
//             } catch (error) {
//                 console.error("Error updating task:", error);
//             }
//         }
//     };

//     const handleDragOver = (e) => {
//         e.preventDefault(); // Allow dropping by preventing the default behavior
//     };

//     const handleInputChange = (e, listId) => {
//         const updatedItems = items.map((list) =>
//             list["listDetails"]._id === listId
//                 ? { ...list, listDetails: { ...list["listDetails"], listType: e.target.value } }
//                 : list
//         );
//         setItems(updatedItems);
//     };

//     return (
//         <div style={{ display: "flex" }}>
//             {items && items.length > 0 ? (
//                 items.map((item) => (
//                     <div key={item["listDetails"]._id} style={{ margin: '10px', border: '1px solid black' }}>
//                         {/* Editable List Name */}
//                         <div style={{ backgroundColor: "green", padding: "10px" }}>
//                             <input
//                                 type="text"
//                                 placeholder="List Name"
//                                 value={item["listDetails"].listType}
//                                 onClick={() => handleClick(item["listDetails"]._id)}
//                                 onChange={(e) => handleInputChange(e, item["listDetails"]._id)}
//                                 readOnly={!editableItems[item["listDetails"]._id]}
//                             />
//                         </div>

//                         {/* Tasks Section */}
//                         <div
//                             style={{
//                                 margin: "10px",
//                                 border: "1px solid #ccc",
//                                 padding: "10px",
//                                 width: "300px",
//                             }}
//                             onDragOver={handleDragOver}
//                             onDrop={(e) => handleDrop(e, item["listDetails"]._id)}
//                         >
//                             <button onClick={() => console.log("Add task button clicked")}>Add Task</button>

//                             {item["tasks"].map((task) => (
//                                 <div
//                                     key={task._id}
//                                     draggable
//                                     onDragStart={(e) => handleDragStart(e, task._id, item["listDetails"]._id)}
//                                     style={{ margin: "5px", padding: "5px", background: "#f0f0f0", cursor: "move" }}
//                                 >
//                                     <input
//                                         type="text"
//                                         value={task.task}
//                                         style={{ margin: '5px' }}
//                                         readOnly
//                                     />
//                                     <button style={{ border: 'black solid 1px' }} onClick={() => console.log("Remove Task")}>
//                                         x
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// }

// export default Newlist;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
// import "./Display.css";

// const Display = () => {
//   const [lists, setLists] = useState([]); // State to hold all lists
//   const [listName, setListName] = useState(""); // New list name
//   const [taskName, setTaskName] = useState(""); // New task name
//   const [activeListId, setActiveListId] = useState(null); // Active list ID for task input
//   const [isAddingList, setIsAddingList] = useState(false); // Toggle for list creation

//   const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage

  
//   const fetchLists = async () => {
//     if (!userId) {
//       console.error("User ID not found.");
//       return;
//     }
//     try {
//       const response = await axios.get(http://localhost:5050/lists/${userId});
//       // Add default color if not set
//       const listsWithColors = response.data.map((list) => ({
//         ...list,
//         color: list.color || "#f9f9f9", // Default color if not available
//       }));
//       setLists(listsWithColors);
//     } catch (error) {
//       console.error("Error fetching lists:", error.response?.data || error.message);
//     }
//   };

//   const fetchTasks = async (listId) => {
//     try {
//       const response = await axios.get(http://localhost:5050/tasks/${listId});
//       setLists((prevLists) =>
//         prevLists.map((list) =>
//           list._id === listId ? { ...list, tasks: response.data } : list
//         )
//       );
//     } catch (error) {
//       console.error(Error fetching tasks for list ${listId}:, error.response?.data || error.message);
//     }
//   };

//   useEffect(() => {
//     fetchLists();
//   }, []);

//   useEffect(() => {
//     if (lists.length > 0) {
//       lists.forEach((list) => {
//         fetchTasks(list._id);
//       });
//     }
//   }, [lists]);

//   const addList = async () => {
//     if (!listName.trim()) {
//       alert("List name cannot be empty.");
//       return;
//     }
//     if (!userId) {
//       console.error("User ID is missing.");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5050/lists/create", {
//         name: listName,
//         user: userId,
//       });
//       setListName("");
//       setIsAddingList(false);
//       fetchLists();
//     } catch (error) {
//       console.error("Error creating list:", error.response?.data || error.message);
//     }
//   };

//   const addTask = async (listId) => {
//     if (!taskName.trim()) {
//       alert("Task name cannot be empty.");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5050/tasks/create", {
//         name: taskName,
//         listId,
//       });
//       setTaskName("");
//       setActiveListId(null);
//       fetchTasks(listId);
//     } catch (error) {
//       console.error("Error adding task:", error.response?.data || error.message);
//     }
//   };

//   // Function to update list color and change task container color
//   const updateListColor = async (listId, newColor) => {
//     try {
//       const response = await axios.put("http://localhost:5050/lists/updatecolor", {
//         listId,
//         color: newColor,
//       });
//       // Update the list color in the frontend state with the updated response
//       setLists((prevLists) =>
//         prevLists.map((list) =>
//           list._id === listId ? { ...list, color: newColor } : list
//         )
//       );
//       console.log("Color updated:", response.data);
//     } catch (error) {
//       console.error("Error updating color:", error.response?.data || error.message);
//     }
//   };

//   const onDragEnd = async (result) => {
//     const { source, destination, draggableId } = result;

//     if (!destination) return;

//     if (source.droppableId === destination.droppableId && source.index === destination.index)
//       return;

//     const sourceList = lists.find((list) => list._id === source.droppableId);
//     const destinationList = lists.find((list) => list._id === destination.droppableId);

//     if (!sourceList || !destinationList) return;

//     const [movedTask] = sourceList.tasks.splice(source.index, 1);
//     destinationList.tasks.splice(destination.index, 0, movedTask);

//     setLists([...lists]);

//     try {
//       await axios.put(http://localhost:5050/tasks/update/${draggableId}, {
//         listId: destination.droppableId,
//       });
//     } catch (error) {
//       console.error("Error updating task:", error.response?.data || error.message);
//     }
//   };

//   return (
//     <div className="display-container">
//       <button className="add-list-button" onClick={() => setIsAddingList(true)}>
//         Add List
//       </button>

//       {isAddingList && (
//         <div className="add-list-container">
//           <input
//             type="text"
//             value={listName}
//             onChange={(e) => setListName(e.target.value)}
//             placeholder="Enter list name"
//           />
//           <button onClick={addList}>Save</button>
//           <button onClick={() => setIsAddingList(false)}>Cancel</button>
//         </div>
//       )}

//       <h3>Your Lists:</h3>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <div className="lists-wrapper">
//           {lists.map((list) => (
//             <div
//               key={list._id}
//               className="list-item"
//               style={{ backgroundColor: list.color }} // Apply list color to the list item
//             >
//               <h4>{list.name}</h4>
//               <div className="color-picker">
//                 <label>Change Color:</label>
//                 <input
//                   type="color"
//                   value={list.color}
//                   onChange={(e) => updateListColor(list._id, e.target.value)} // Use updateListColor
//                 />
//               </div>

//               <button
//                 onClick={() =>
//                   setActiveListId(activeListId === list._id ? null : list._id)
//                 }
//               >
//                 {activeListId === list._id ? "Cancel" : "Add Task"}
//               </button>

//               {activeListId === list._id && (
//                 <div className="task-input-container">
//                   <input
//                     type="text"
//                     value={taskName}
//                     onChange={(e) => setTaskName(e.target.value)}
//                     placeholder="Enter task name"
//                   />
//                   <button onClick={() => addTask(list._id)}>Save Task</button>
//                 </div>
//               )}

//               <Droppable droppableId={list._id}>
//                 {(provided) => (
//                   <div
//                     className="tasks-container"
//                     {...provided.droppableProps}
//                     ref={provided.innerRef}
//                     style={{ backgroundColor: list.color }} // Apply list color to the tasks container
//                   >
//                     {list.tasks && list.tasks.length > 0 ? (
//                       list.tasks.map((task, index) => (
//                         <Draggable key={task._id} draggableId={task._id} index={index}>
//                           {(provided) => (
//                             <div
//                               className="task-item"
//                               ref={provided.innerRef}
//                               {...provided.draggableProps}
//                               {...provided.dragHandleProps}
//                             >
//                               {task.name}
//                             </div>
//                           )}
//                         </Draggable>
//                       ))
//                     ) : (
//                       <p>No tasks for this list.</p>
//                     )}
//                     {provided.placeholder}
//                   </div>
//                 )}
//               </Droppable>
//             </div>
//           ))}
//         </div>
//       </DragDropContext>
//     </div>
//   );
// };

// export default Display;
