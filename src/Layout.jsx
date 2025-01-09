// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import "./Layout.css";
// import Header from './Header';
// // import {color1} from "./Page1";
// const Layout = () => {
//     return (
//         <div >
//             {/* style={{backgroundColor: color1}} */}
//             <Header />
//             <Outlet />
//         </div>
//     )
// }

// export default Layout

import React from 'react';
import { Outlet } from 'react-router-dom';  // To render the nested routes content
import Header from './Header';  // Global header
import './Layout.css';

// Layout.js still remains responsible for rendering the Header, but Page1 will handle its own sidebar. The Outlet will render the nested routes (like MyCalendar4).
const Layout = () => {
  return (
    <div>
      <Header />  {/* Header appears on all pages */}
      <div className="main-content">
        {/* Outlet will render the Page1 component */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;


/*
Key Points:
Routing Structure: We use nested routes in App.js for MyCalendar4. It’s rendered inside the Page1 component, on the right side of the Sidebar.
Sidebar: The Sidebar links to MyCalendar4 under the /board/calender route. It allows users to switch between different components within Page1 without replacing the entire page.
Outlet: The Outlet inside Page1 is where the nested content (like MyCalendar4) will be injected. This means Page1 handles both the sidebar and content display.
No Full Page Switch: MyCalendar4 will be displayed inside Page1 (on the right side of the sidebar), instead of rendering it as a full-page component.
Final Structure:
Login/Signup: These routes remain independent and don't include the header/sidebar.
Protected Routes: After login, the user will see Page1 (with Sidebar), and inside Page1, they can view different components like MyCalendar4 by navigating through the sidebar links.
With this structure, you achieve the effect where the Sidebar is part of Page1 and the content changes within that layout without affecting the rest of the page structure. */