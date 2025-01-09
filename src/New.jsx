import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './sidebar';
import './Page.css';

function New() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="app-container">
            <Sidebar isOpen={isSidebarOpen} />
            <div className="main-content" >
                {/* style={{ marginLeft: isSidebarOpen ? '250px' : '0' }} */}
                <button className="hamburger-menu" onClick={toggleSidebar}>
                    ☰
                </button>
                <h1>Main Content</h1>
                <p>
                    This is the main content of the page. When the sidebar opens, this content shifts to the right.
                </p>
                <p>
                    You can add more content here. Try clicking the hamburger menu to toggle the sidebar!
                </p>
                {/* <Routes>
            <Route path="/" element={<div>Welcome to the Home Page!</div>} />
            <Route path="/about" element={<div>About Page</div>} />
          </Routes> */}
            </div>
        </div>
    );
}

export default New;

//-----------------------------------------------------------

// import React, { useState } from 'react';
// import Sidebar from './sidebar'; // Make sure the Sidebar component is correctly imported
// import './Page.css';

// function New() {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     return (
//         <div className="app-container">
//             {/* Sidebar component, receiving 'isOpen' prop */}
//             <Sidebar isOpen={isSidebarOpen} />

//             <div
//                 className="main-content"
//                 style={{
//                     marginLeft: isSidebarOpen
//                         ? window.innerWidth <= 768
//                             ? '100vw'  // On mobile, set margin to 100vw when sidebar is open
//                             : '250px'  // On larger screens, set margin to 250px when sidebar is open
//                         : '0',      // On close, no margin
//                 }}
//             >
//                 {/* Hamburger menu for mobile */}
//                 <button className="hamburger-menu" onClick={toggleSidebar}>
//                     ☰
//                 </button>
//                 <h1>Main Content</h1>
//                 <p>
//                     This is the main content of the page. When the sidebar opens, this content shifts to the right.
//                 </p>
//                 <p>
//                     You can add more content here. Try clicking the hamburger menu to toggle the sidebar!
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default New;
