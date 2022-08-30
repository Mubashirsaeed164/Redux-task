import React from 'react'
import Navigation from "../Component/navigation/Navigation";
import {
    Link
  } from "react-router-dom";

function History() {
  return (
    <>
    <Navigation/>
    <div className="history-btn">
            <nav>
                <ul>
                    <li>
                        <Link to='/imagehistory'>Search Images</Link>
                    </li>
                    <li>
                        <Link to='/userhistory'>Search User</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default History