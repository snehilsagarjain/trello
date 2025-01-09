import React from 'react'
import "./Header.css";
// import {color1} from "./Page1";
const Header = () => {
    return (
        <div className="header" > 
        {/* style={{}} */}
            <div className="left-header">
                <div style={{ fontSize: '30px' }}>Trello</div>
                <div>Workspaces V</div>
                <div>Recent V</div>
                <div>Starred V</div>
                <div>Templates V</div>
                <button>Create</button>
            </div>
            <div className="right-header">
                <button>days left</button>
                <input type="text" placeholder="Search" />
                <CircleLetterLogo />
            </div>
        </div>
    )
}
const CircleLetterLogo = () => (
    <span style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '50%',  // Makes the background circular
        backgroundColor: '#4CAF50', // Circular background color
        color: 'white',  // Text color
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        fontSize: '20px',
        textTransform: 'uppercase',
    }}>
        SJ {/* Replace with your desired letters */}
    </span>
);
export default Header