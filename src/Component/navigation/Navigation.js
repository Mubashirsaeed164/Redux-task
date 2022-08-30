import React from 'react'
import {
  Link
} from "react-router-dom";
function Navigation() {
  return (
    <div className="nav-bar">
            <div className="nav-menu">
                <nav>
                    <li><Link to="/">Home</Link></li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li><Link to="/history">History</Link></li>
                    <li>Log In</li>
                </nav>
            </div>
        <input type="text" name="" placeholder="  Search..." className="search-bar"/>
        </div>
  )
}

export default Navigation