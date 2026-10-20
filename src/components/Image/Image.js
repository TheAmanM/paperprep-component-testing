import React from 'react'
import './Image.css'
import image1 from './img/img1.jpg'
import image2 from './img/img2.jpg'

const Image = () => {
    return (
        <div className="bg">
            <div className='image-container'>
                <img src={image1} alt="Image" className="bottom-img" />
                <img src={image2} alt="Image" style={{ filter: 'invert(100%) hue-rotate(165deg)' }} className="top-img" />
            </div>
        </div>
    )
}

export default Image