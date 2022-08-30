import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Navigation from './navigation/Navigation';



function HistoryImageDisplay() {
    const location = useLocation();
    const data = location.state
    // console.log("The data is",data)

    const {id} = useParams();
    // console.log("ID ", id)
    const title = data[id].title
    const images = data[id].images
    // console.log(images)
  return (
    <>
        <Navigation/>
        <h2>{title}</h2>
        <div className="wrap">
        {images.map((item, index) => (
        <div className='box' key={index}>
            <div className='inner-Box'>
               <img src={item.urls.full} alt=""/>
            </div>
        </div>
    ))}
    </div>
    </>
  )
}

export default HistoryImageDisplay