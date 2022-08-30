import React from 'react'

function    ImageGallary(props) {
  const {gallaryImage, imagedisplay} = props;
  // console.log('image gal',imagedisplay);
  console.log(gallaryImage);

  return (
    <>
    <div className="wrap">
        {gallaryImage.map((item, index) => (
        <div className='box' key={index}>
            <div className='inner-Box'>
               <img src={item.urls.full} alt=""/>
            </div>
            <p>{item.user.name}</p>
        </div>
    ))}
    {imagedisplay.map((item, index) => (
        <div className='box' key={index}>
            <div className='inner-Box'>
               <img src={item.urls.full} alt=""/>
            </div>
            <p>{item.user.name}</p>
        </div>
    ))}
    </div>
    <div className='btn-1'>
        <button type="Text">Load More</button>
     </div>
    </>
  )
}

export default ImageGallary