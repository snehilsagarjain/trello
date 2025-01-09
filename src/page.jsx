// // // App.js
// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Sidebar from './sidebar';
// // import Newlist from "./newlist";
// // import "./Page.css";
// // function Page() {
// //   return (
// //     <div style={{ border: '2px solid green' }}>
// //       <h1>Page</h1>
// //       <Sidebar />
// //       <div className="page-content">
// //         <Newlist />
// //       </div>
// //     </div>
// //   );
// // }

// // export default Page;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Sidebar from './sidebar';
// import Newlist from "./newlist";
// import "./Page.css";

// function Page() {
//   const [isOpen, setIsOpen] = useState(true);
//   const toggleSidebar = () => { setIsOpen(!isOpen); };
//   return (
//     <>
//       {/* <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}> */}
//       {/* <div id="mySidenav" className="sidenav">
//         <a href="" className="closebtn" onClick={toggleSidebar} >&times;</a>
//         <Link to="#">About</Link>
//         <Link to="#">Services</Link>
//         <Link to="#">Clients</Link>
//         <Link to="#">Contact</Link>
//       </div>

//       <div id="main">
//         <h2>Sidenav Push Example</h2>
//         <p>Click on the element below to open the side navigation menu, and push this content to the right.</p>
//         <span style="font-size:30px;" onClick={toggleSidebar}>&#9776; open</span>
//       </div> */}


//       <div className="page-container">
//         <div className="content">
//           <Sidebar />
//           <div className="page-content">
//             <Newlist />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Page;

//-----------------------------------------------------------------

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import sidebar from './sidebar';
// import Home from './Home';
// import About from './About';
// import './App.css';
import "./Page.css";
import Sidebar from './sidebar';
import Newlist from './newlist';

function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    // <Router>
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="main-content" style={{ marginLeft: isSidebarOpen ? '250px' : '0' }}>
        <button className="hamburger-menu" onClick={toggleSidebar}>
          ☰
        </button>
        <Newlist />
        {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes> */}
      </div>
    </div>
  );
}

export default Page;
