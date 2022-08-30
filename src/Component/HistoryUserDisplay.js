import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Navigation from './navigation/Navigation';

function HistoryUserDisplay() {
    const location = useLocation();
    const {id} = useParams();
    // console.log("id is", id)
    const data = location.state
    // console.log(data)
    const user = data[id].user
    // console.log("data of user",user)
  return (
    <>
        <Navigation/>
        <div className="wrap">
        {user.map((item, index) => (
        <div className='box' key={index}>
            <div className='inner-Box'>
               <img src={item.profile_image.large} alt=""/>
            </div>
        </div>
    ))}
    </div>
    </>
    
  )
}

export default HistoryUserDisplay
