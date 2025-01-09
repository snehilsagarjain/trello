// // // Sidebar.js
// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import "./sidebar.css";

// // const Sidebar = () => {
// //   const [isOpen, setIsOpen] = useState(true);
// //   const toggleSidebar = () => { setIsOpen(!isOpen); };
// //   return (
// //     <div style={{ border: '2px solid red' }}>
// //       {/* <div>
// //         <span>Trello Workspace</span>
// //         <button onClick={toggleSidebar}> {'>'} </button>
// //       </div> */}
// //       <button onClick={toggleSidebar} className={`sidebar ${isOpen ? 'displayoff' : 'displayon'}`}> {'<'} </button>
// //       <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
// //         <div>
// //           <span>Trello Workspace</span>
// //           <button onClick={toggleSidebar}> {'>'} </button>
// //         </div>
// //         <ul>
// //           <li><Link to="/boards">Boards</Link></li>
// //           <li><Link to="/members">Members</Link></li>
// //           <li><Link to="/workspace">Workspace settings</Link></li>
// //           <li><Link to="/contact">My Trello Board</Link></li>
// //         </ul>
// //       </div>
// //     </div >
// //   );
// // };
// // // Toggle Sidebar
// // export default Sidebar;

// //------------------------------------------------------------------------------------------------------------

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './sidebar.css';

// function Sidebar({ isOpen }) {
//   return (
//     <div className={`sidebar ${isOpen ? 'open' : 'no-sidebar'}`}>
//       <h2>Sidebar</h2>
//       <ul>
//         <li>
//           <Link to="/boards">Boards</Link>
//         </li>
//         <li>
//           <Link to="/members">Members</Link>
//         </li>
//         <li>
//           <Link to="/work-settings">Workspace settings</Link>
//         </li>
//         <li>
//           <Link to="/trello-board">My Trello Board</Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;


import React from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css";
// The Sidebar will allow users to navigate between different pages, like Page1 and MyCalendar4. 
// For example, when they click on "Calendar," MyCalendar4 will be displayed inside the content area of Page1.
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/page1/board">Board</Link></li>
        <li><Link to="/page1/calender">Calendar</Link></li>  {/* Link to MyCalendar4 inside Page1 */}
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;