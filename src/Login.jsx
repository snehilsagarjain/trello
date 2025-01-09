// import React, { useState } from 'react';
// import { Navigate, redirect, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const handleEmailChange = (e) => { setEmail(e.target.value); };
//   const handlePasswordChange = (e) => { setPassword(e.target.value); };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Simple validation
//     if (!email || !password) { setError('Please fill out both fields'); return; }
//     try {
//       const response = await axios.post('http://localhost:6080/user/login', { email, password });
//       const { userEmail } = response.data;
//       localStorage.setItem('user', JSON.stringify(userEmail)); //redux

//       // Reset form values
//       setEmail('');
//       setPassword('');
//       setError('');

//       // Navigate to the '/list' page after successful login
//       navigate('/ls');
//       // navigate('/page');
//     } catch (err) {
//       console.error('Login failed', err);
//       setError('Login failed. Please check your credentials.');
//     }
//   };
//   // , width: "100vw", height: "100%"
//   return (
//     <div>
//       <h1 style={{ margin: "10px", width: "100%" }}>LOGIN PAGE</h1>
//       <form onSubmit={handleSubmit} style={{ width: "100%", height: "100%" }}>
//         <input
//           type="text"
//           value={email}
//           onChange={handleEmailChange}
//           placeholder="Enter Username"
//           style={{ padding: '10px', margin: '10px', width: '100%' }}
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={handlePasswordChange}
//           placeholder="Enter Password"
//           style={{ padding: '10px', margin: '10px', width: '100%' }}
//           required
//         />
//         {error && <div style={{ color: 'red' }}>{error}</div>}
//         <button type="submit" style={{ padding: '10px 20px', margin: '10px' }}>Login</button>
//       </form>
//     </div>
//   );
// }
// export default LoginForm;
// //----------------------------------------------------------------------------------------
// // import React, { useState } from 'react';

// // // Simple Login Component
// // const Login = ({ style }) => {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert(`Username: ${username} Password: ${password}`);
// //   };

// //   return (
// //     <div style={style}>
// //       <h2>Login</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div style={{ marginBottom: '15px' }}>
// //           <input
// //             type="text"
// //             placeholder="Username"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //             style={{ padding: '10px', width: '100%' }}
// //           />
// //         </div>
// //         <div style={{ marginBottom: '15px' }}>
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             style={{ padding: '10px', width: '100%' }}
// //           />
// //         </div>
// //         <button type="submit" style={{ padding: '10px', width: '100%' }}>Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // // Main Component
// // const Demo = () => {
// //   return (
// //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
// //       <Login style={{ width: '400px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
// //     </div>
// //   );
// // };

// // export default Demo;
// // --------------------------------------------------------------------------------------------
// // import React, { useState } from 'react';

// // // CSS for bubble background effect
// // const styles = {
// //   container: {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     height: '100vh',
// //     background: 'radial-gradient(circle, #1e3c72, #2a5298)', // Gradient background
// //     overflow: 'hidden', // Prevent scrollbars
// //     position: 'relative',
// //   },
// //   loginBox: {
// //     width: '400px',
// //     backgroundColor: '#fff',
// //     padding: '20px',
// //     borderRadius: '8px',
// //     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// //     zIndex: 2, // Make sure the login box is on top of the bubbles
// //     position: 'relative',
// //   },
// //   loginForm: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //   },
// //   inputField: {
// //     padding: '10px',
// //     marginBottom: '15px',
// //     width: '100%',
// //     border: '1px solid #ccc',
// //     borderRadius: '5px',
// //   },
// //   submitButton: {
// //     padding: '10px',
// //     backgroundColor: '#2a5298',
// //     color: '#fff',
// //     border: 'none',
// //     borderRadius: '5px',
// //     cursor: 'pointer',
// //   },
// // };

// // // Bubble Animation CSS
// // const bubbleStyle = {
// //   position: 'absolute',
// //   borderRadius: '50%',
// //   opacity: 0.7,
// //   backgroundColor: 'rgba(255, 255, 255, 0.6)',
// //   pointerEvents: 'none', // Ensure bubbles don't interfere with login elements
// //   animation: 'bubbleAnimation 10s infinite', // Infinite animation for the bubbles
// // };

// // const generateBubbles = () => {
// //   const bubbles = [];
// //   for (let i = 0; i < 20; i++) {
// //     // Randomize size, position, and speed for each bubble
// //     const size = Math.random() * 30 + 20; // Bubbles with random sizes
// //     const positionX = Math.random() * 100; // Random X position
// //     const positionY = Math.random() * 100; // Random Y position
// //     const speed = Math.random() * 3 + 2; // Bubble rise speed

// //     bubbles.push(
// //       <div
// //         key={i}
// //         style={{
// //           ...bubbleStyle,
// //           width: `${size}px`,
// //           height: `${size}px`,
// //           left: `${positionX}vw`,
// //           bottom: `${positionY}vh`,
// //           animationDuration: `${speed}s`,
// //         }}
// //       ></div>
// //     );
// //   }
// //   return bubbles;
// // };

// // // Login Form Component
// // const Login = ({ style }) => {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert(`Username: ${username} Password: ${password}`);
// //   };

// //   return (
// //     <div style={style}>
// //       <h2>Login</h2>
// //       <form style={styles.loginForm} onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           placeholder="Username"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //           style={styles.inputField}
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           style={styles.inputField}
// //         />
// //         <button type="submit" style={styles.submitButton}>Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // // Main Component
// // const Demo = () => {
// //   return (
// //     <div style={styles.container}>
// //       <Login style={styles.loginBox} />
// //       {generateBubbles()} {/* Generate random bubbles */}
// //     </div>
// //   );
// // };

// // export default Demo;
// //----------------------------------------------------------------------------------------
// import React from 'react';
import Login from '@react-login-page/page6';
import './Login.css';  // Import the CSS file for custom styles
import Logo from 'react-login-page/logo-rect'; // Adjust the logo import path if necessary
// import logo from "./pngimg.com - letter_L_PNG29.png";
import React, { useState } from 'react';
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Demo = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = (e) => { setEmail(e.target.value); };
  const handlePasswordChange = (e) => { setPassword(e.target.value); };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('256');
    // Simple validation
    if (!email || !password) { setError('Please fill out both fields'); return; }
    try {
      const response = await axios.post('http://localhost:6080/user/login', { email, password });
      const { userEmail } = response.data;
      localStorage.setItem('user', JSON.stringify(userEmail)); //redux

      // Reset form values
      setEmail('');
      setPassword('');
      setError('');

      // Navigate to the '/list' page after successful login
      // navigate('/ls');
      navigate('/page1');
    } catch (err) {
      console.error('Login failed', err);
      setError('Login failed. Please check your credentials.');
    }
  };
  return (
    <div className="login-page" style={{ border: '2px solid purple' }}>
      {/* <Login logo={<img src={logo} alt="Custom Logo" style={{ width: '150px', height: 'auto' }} />} /> */}
      <Login onSubmit={handleSubmit}>
        <Login.Logo>
          <Logo />
          {/* <CircleLetterLogo /> */}
          {/* <img src={Logo} alt="logo" style={{ maxWidth: '150px', margin: '0 auto' }} /> */}
        </Login.Logo>
        <Login.Username value={email} onChange={handleEmailChange}
          placeholder="Enter Username"></Login.Username>
        <Login.Password value={password} onChange={handlePasswordChange}
          placeholder="Enter Password"></Login.Password>
        <Login.Submit onClick={handleSubmit}></Login.Submit>
        <Login.Footer>
          Not a member? <Link to="/signup" className="footer_style" >Sign up now</Link>
        </Login.Footer>
      </Login>
    </div>
  );
};
export default Demo;
// //---------------------------------------------------------------------------------
// import React from 'react';

const CircleLetterLogo = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70px',
    height: '70px',
    borderRadius: '50%',  // Makes the background circular
    backgroundColor: '#4CAF50', // Circular background color
    color: 'white',  // Text color
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '36px',
    textTransform: 'uppercase',
  }}>
    S {/* Replace with your desired letters */}
  </div>
);

// export default CircleLetterLogo;

//-------------------------------------------------------------------------------
// // import React from "react";

// // const Login = () => {
// //   return (
// //     <div style={{ textAlign: "center", paddingTop: "50px", border: "1px solid red" }}>
// //       {/* Styled Logo */}
// //       <div
// //         style={{
// //           fontSize: "80px",
// //           fontWeight: "bold",
// //           color: "#3498db",  // Choose the color of the logo
// //           marginBottom: "20px",
// //           border: "1px solid black"
// //         }}
// //       >
// //         L
// //       </div>

// //       {/* Rest of the login form */}
// //       <h2>Login</h2>
// //       <form>
// //         {/* Form Fields */}
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;
// //-----------------------------------------------------------------
// // import React from 'react';

// // const Login = () => {
// //   return (
// //     <div style={{ textAlign: 'center', paddingTop: '50px' }}>
// //       {/* Display the "L" letter emoji as logo */}
// //       <div style={{ fontSize: '100px', fontWeight: 'bold', color: '#3498db' }}>
// //         🅻
// //       </div>

// //       {/* Rest of your login form */}
// //       <h2>Login</h2>
// //       <form>
// //         <div style={{ marginBottom: '15px' }}>
// //           <label htmlFor="username">Username:</label>
// //           <input type="text" id="username" name="username" />
// //         </div>

// //         <div style={{ marginBottom: '15px' }}>
// //           <label htmlFor="password">Password:</label>
// //           <input type="password" id="password" name="password" />
// //         </div>

// //         <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>
// //           Login
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;
// //---------------------------------------------------------
// // import React from 'react';
// // import Login from '@react-login-page/page6';

// // import Logo from 'react-login-page/logo-rect';
// // // import './App.css';  // Import the custom CSS
// // // import logo from "./pngimg.com - letter_L_PNG29.png";
// // import './Login.css';
// // const Demo = () => {
// //   return (

// //       <Login >
// //         <Logo />

// //       <Login.Block keyname="logo" tagName="span">
// //         <Logo />
// //       </Login.Block>
// //       </Login>

// //   );
// // };

// // export default Demo;

// import React from 'react';
// import { Render } from 'react-login-page'; //Login,
// import Login from '@react-login-page/page6';
// import Logo from 'react-login-page/logo-rect';

// const Demo = () => {
//   return (
//     <Login logo={<Logo />} />
//   );
// };
// export default Demo;


// import React from 'react';
// import Login from '@react-login-page/page11';
// // import LoginBannerBgImg from '@react-login-page/page11/banner.jpg';

// const Demo = () => (
//   <Login style={{ height: 380, border: "1px solid black" }}>
//     <Login.Banner>
//       <Login.Logo>🅻</Login.Logo>
//       {/* <img src={LoginBannerBgImg} alt="banner" style={{ border: "1px solid red" }} /> */}
//     </Login.Banner>
//   </Login>
// );

// export default Demo;
//-----------------------------------------------

// import React from 'react';
// import Login from '@react-login-page/base';

// const Demo = () => <Login style={{ height: 380 }} />;

// export default Demo;
//-------------------------------------------------
// import React from 'react';
// import Login from '@react-login-page/page11'; // Adjust as necessary
// import Logo from 'react-login-page/logo-rect'; // Adjust the logo import path if necessary
// // import LoginBannerBgImg from './path-to-your-banner-image.jpg'; // Adjust the image import path if necessary
// // import LoginBannerBgImg from '@react-login-page/page11/banner.jpg';

// const Demo = () => (
//   <div style={{ height: 380 }}>
//     {/* Banner Section */}
//     {/* <div style={{ backgroundImage: `url(${LoginBannerBgImg})`, height: '200px', backgroundSize: 'cover', backgroundPosition: 'center' }}> */}
//     {/* Optionally, you can add other content here like a header */}
//     {/* </div> */}

//     {/* Login Section */}
//     <Login>
//       <Login.Logo>
//         <img src={<Logo />} alt="logo" style={{ maxWidth: '150px', margin: '0 auto' }} />
//       </Login.Logo>

//       {/* You can also add form inputs or other login components here */}
//     </Login>
//   </div>
// );

// export default Demo;

