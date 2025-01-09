// import React, { useState } from 'react';
// import "./Page1.css";
// import Newlist from './newlist';
// import axios from 'axios';
// import {Link} from 'react-router-dom';
// const Page1 = () => {
//     const [color1, setColor1] = useState("");
//     const handleColor1Change = async(event) => {
//         setColor1(event.target.value); // Update state with the new color value
//         const products = await axios.get(`https://dummyjson.com/products/${id}`); console.log("16")
//         console.log(products)
//         const response = await axios.put("http://localhost:5050/lists/updatecolor", {
//                     listId,
//                     color: newColor,
//                   });    
//     };
//     return (
//         <div >
//             {/* style={{ backgroundColor: color1 }} */}
//             <div className="body">
//                 <div className="left-body">
//                     <div className="left-body-header">
//                         <div className="left-inner-header">
//                             <div className="workspace-logo"> <SquareLetterLogo /> </div>
//                             <div>
//                                 <div>Trello Workspace</div>
//                                 <div>Premium</div>
//                             </div>
//                         </div>
//                         <div>{"<"}</div>
//                     </div>
//                     <div className="left-lower-body">
//                         <div>Boards</div>
//                         <div>Members</div>
//                         <div>Workspace settings</div>
//                         <div> <b>Workspace views</b> </div>
//                         <div>Table</div>
//                         <div>
//                             <Link to="/calender">Calender</Link>
//                         </div>
//                         <div> Your Boards </div>
//                         <div>My Trello Board</div>
//                     </div>
//                 </div>
//                 <div className="right-body">
//                     <div className="right-body-header">
//                         <div style={{ border: '1px solid red' }}>
//                             <div style={{ fontSize: '30px' }}>My Trello Board</div>
//                         </div>
//                         <div className="right-body-header-right" style={{ border: '1px solid red' }}>
//                             <button className="share">
//                                 Share
//                             </button>
//                             <input
//                                 className=''
//                                 type="color"
//                                 id="color"                                                                          //namr,color, theme
//                                 value={color1} // Bind value to the state
//                                 onChange={handleColor1Change} // Set up the change handler  //call update api for color 
//                             />
//                         </div>
//                     </div>
//                     <div style={{ border: '1px solid red' }}>
//                         <Newlist />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// const Header = () => {
//     return (
//         <div className="box">
//             <div>1</div>
//             <div>2</div>
//         </div>
//     )
// }
// const SquareLetterLogo = () => (
//     <div style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '50px',
//         height: '50px',
//         borderRadius: '5px',  // Makes the background circular
//         backgroundColor: '#4CAF50', // Circular background color
//         color: 'white',  // Text color
//         fontFamily: 'Arial, sans-serif',
//         fontWeight: 'bold',
//         fontSize: '30px',
//         textTransform: 'uppercase',
//         marginRight: '10px'
//     }}>
//         T {/* Replace with your desired letters */}
//     </div>
// );
// export default Page1;
// // export {color1, Page1};

import React from 'react';
import Sidebar from './Sidebar';  // Sidebar specific to this page
import { Outlet } from 'react-router-dom';  // To render the nested route content (like MyCalendar4)

// Page1 will include the Sidebar and use an Outlet to render the content (like MyCalendar4) inside the main content area.
const Page1 = () => {
  return (
    <div className="page-container">
      <Sidebar />  {/* Sidebar is rendered here */}
      <div className="page-content">
        {/* Outlet renders MyCalendar4 or any other nested page */}
        <Outlet />
      </div>
    </div>
  );
};

export default Page1;