import React from 'react'
import "./List1.css";
import Newlist from './newlist';
import Sidebar from './sidebar';
const List1 = () => {
    return (
        <div className="flex-container">
            <div className="flex-item-left"><Sidebar /></div>
            <div className="flex-item-right"><Newlist /></div>
        </div>
    )
}

export default List1