import React from "react";
import { Link } from "react-router-dom"; 

const Sidebar = () => {
    return (
         <div className="sidebar-container">
        <ul className="sidebar-ul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="create/">Create Crewmates</Link></li>
            <li><Link to="gallery/">Crewmate Gallery</Link></li>
        </ul>
    </div>
    )
   
}
export default Sidebar;