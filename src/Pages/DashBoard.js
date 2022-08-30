import React from "react";
import Navigation from "../Component/navigation/Navigation";
import {
    Link  
  } from "react-router-dom";
function DashBoard(){
    return(
    <>
    <Navigation/>
    <div className="main-btn">
        <nav>
            <ul>
                <li>
                    <Link to='/searchimage'>Search Images</Link>
                </li>
                <li>
                    <Link to='/searchuser'>Search User</Link>
                </li>
            </ul>
        </nav>
     </div>
    </>       
    )
}

export default DashBoard