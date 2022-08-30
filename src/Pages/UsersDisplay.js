import React from 'react'
import { useNavigate } from 'react-router-dom'


function UsersDisplay(props) {
    const {users, load, userHistoryData} = props
    let navigate = useNavigate();
    // console.log('user history data',userHistoryData);
  return (
    <>
     <div className="wrap">
        {users?.map((user, index)=> (
            <div className="box" key={index} onClick={() => {navigate(`/userprofile/${user.username}`)}} >
                <div className="inner-box">
                    <img src={user.profile_image.large} alt=""/>
                    <h2>{user.name}</h2>
                    <p>{user.username}</p>
                </div>     
            </div>
        ))} 
     </div>
     <div className='wrap'>
          {
            userHistoryData.map((item,index)=> (
              <div key={index} className="box">
                <div className='innerbox'>
                <img src={item.profile_image?.large} alt=""/>

                </div>
              </div>
            ))
          }
     </div>
     <div className='btn-1'>
        <button type="Text" onClick={() => load()}>Load More</button>
     </div>
    </>
  )
}

export default UsersDisplay