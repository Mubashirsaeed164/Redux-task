import React from 'react'
import Navigation from '../Component/navigation/Navigation'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function ImageHistory() {
  // const images = useSelector(state => state.galleryImages.images)

 
  const galleryImages = useSelector(state => state.galleryImages)
  // console.log('title is', galleryImages)
  return (
   <>
    <div>
      <Navigation/>
      <h2>Images history </h2>
      <h5>
        {galleryImages.map((item, index) => (
          <Link to={`/searchimage?query=${item.title}`} state={galleryImages} key={index}>
            <div className='main-btn'>
                {item.title}
                <hr/>
            </div>
          </Link>
        ))}
      </h5>
    </div>
   </>
  )
}



export default ImageHistory