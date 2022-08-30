import React, { useEffect, useState } from 'react'
import Navigation from '../Component/navigation/Navigation';
import { useParams } from 'react-router-dom'
import { fetchUsers } from '../lib/Unsplashapi';

function UserProfile() {
    const {username} = useParams();
    // console.log(username)

    const [user, setUser] = useState('')

    useEffect(() => {
        // Instance.get(`users/${username}`)
        fetchUsers(username)
        .then((responce) => {
            console.log(responce)
            setUser(responce)
        })
    }, [username])

  return (
    <>
    <Navigation/>
        <div className="card-box">
            <div className="header">
                <div className="box-1"></div>
                <div className="box-2">
                    <img className="profile-image" src={user?.profile_image?.large} alt="user-profile"/>
                </div>
            </div>
            
            <h2>{user.name}</h2>
            <p>ID: <i>{user.numeric_id}</i></p>
            <h3>Location</h3>
            <p>{user.location || " No Location Defined"}</p>
            <h2>Bio</h2>
            <p>{user.bio || "..."}</p>
            <h2>Photos</h2>
            <div className="photo-image">
                {
                    user.photos?.map((item, key) => (
                        <div key={key}>
                            <img src={item.urls.full} alt="users"/>
                        </div>   
                    ))
                }  
            </div>     
        </div>
    </>
  )
}

export default UserProfile