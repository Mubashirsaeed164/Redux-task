import React from 'react'
import Navigation from '../Component/navigation/Navigation'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function UserHistory() {
    const userData = useSelector(state => state.users)
    console.log('the user is', userData)
  return (
    <>
    <Navigation/>
    <h5>
    <div className='main-btn'>
        {
        userData.map((item, index) => ( 
            <Link to={`/searchuser?query=${item.title}`} key={index} state={userData}>
                <div>
                    {item.title}
                    <hr/>
                </div>
            </Link>  
        ))
        }
    </div>
    </h5>
    </>
  )
}

export default UserHistory