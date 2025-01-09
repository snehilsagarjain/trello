// // Filename - App.js
// import React, { useEffect, useState } from 'react';
// import List from './List';
// // import LoginForm from './Login';
// import Demo from './Login';
// // import Login from './Login';
// // import CircleLetterLogo from "./Login";
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import Newlist from './newlist';
// import Page from "./page";
// import Signup from './Signup';
// import New from './New';
// import List1 from './List1';
// import Page1 from './Page1';
// import SignupForm from './SignupForm';
// import Layout from './Layout';
// // import MyCalendar from './Calender';
// // import MyCalendar1 from './Calender1';
// // import Selectable from "./Calender2";
// // import MyCalendar3 from './Calender3';
// import MyCalendar4 from './Calendar4';
// // import Calender5 from "./Calender5";
// function App() {
//   const abc = () => {
//     console.log("8")
//     return localStorage.getItem('user') === 'true'
//   }
//   const ProtectedRoute = (element) => {
//     console.log("11")
//     return abc() ? element : <Navigate to='/login' />
//   }
//   // const id = localStorage.getItem('user');
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           {/* <Route path='/' element={<MyCalendar />}></Route> */}
//           {/* <Route path='/calender' element={<MyCalendar1 />}></Route> */}
//           {/* <Route path='/calender1' element={<Selectable />}></Route> */}
//           {/* <Route path='/calender3' element={<MyCalendar3 />}></Route> */}
//           {/* <Route path='/calender4' element={<MyCalendar4 />}></Route> */}
//           {/* <Route path='/calender5' element={<Calender5 />}></Route> */}
//           <Route path="/login" element={<Demo />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path='/' element={<Layout />}>
//             <Route index path="/board" element={<Page1 />} />
//             <Route path="/calender" element={ <MyCalendar4 /> } />
//           </Route>
//           {/* <Route path="/" element={<Page1 />} /> */}
//           {/* <Route path="/signup" element={<SignupForm />} /> */}
//           {/* <Route path="/" element={<Demo />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path='/new' element={<New />} />
//           <Route path='/list1' element={<List1 />} /> */}

//           {/* <Route path="/" element={<h1>{"/ location "}</h1>} /> */}
//           {/* <Route path="/login" element={<LoginForm />} /> */}
//           {/* <Route path="/login" element={<Demo />} /> */}
//           {/* <Route path="/login" element={<CircleLetterLogo />} /> */}
//           {/* <Route path="/login" element={<Login />} /> */}
//           {/* <Route path="/ls" element={<List />} /> */}

//           {/* <Route path="/ls" element={<Newlist />} />
//           <Route path="/page" element={<Page />} /> */}

//           {/* <Route path="/ls" element={ProtectedRoute({ List })}> </Route>
//           <Route path="/list" element={ProtectedRoute({ List })}> </Route> */}

//           {/* <Route path="/education" element={ProtectedRoute({ Education })}> </Route> */}
//           {/* <Route path="/signup" element={<Signup />} /> */}
//           {/* </Route> */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';  // Global layout with header
import Page1 from './Page1';    // Page that includes sidebar
import MyCalendar4 from './Calendar4';  // Page content (like calendar) to be shown inside Page1
import MyCalendar3 from './Calender3';  // Page content (like calendar) to be shown inside Page1
import Login from './Login';
import Signup from './Signup';
import Newlist from "./newlist";
import MyCalendar from './MyCalendar';
// Here, the routing is simplified. Instead of rendering MyCalendar4 as a direct route, you'll render it inside Page1 by using nested routes.
function App() {
  const abc = () => {
    console.log("8")
    return localStorage.getItem('user') === 'true'
  }
  const ProtectedRoute = (element) => {
    console.log("11")
    return abc() ? element : <Navigate to='/login' />
  }
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route index path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes with Layout */}
        <Route path="/" element={<Layout />}>
          {/* Main layout for authenticated users */}
          <Route path="page1" element={<Page1 />}>
            {/* Nested route: Render MyCalendar4 inside Page1 */}
            <Route path="board" element={<Newlist />} />
            <Route path="calender" element={<MyCalendar4 />} />
            <Route path="Mycalender" element={<MyCalendar />} />
            {/* <Route path="calender" element={<MyCalendar3 />} /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    // <MyCalendar1 />
  );
}

export default App;