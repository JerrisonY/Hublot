import React from 'react'

import hublotLight from '../assets/img/image_feature/hublotlight.jpg'
import hublotDark from '../assets/img/image_feature/hublotdark.jpeg'

function ImageFeature() {
  return (
    <div className='image-feat-c'>
        <div className='image-feat-one'>
            <img src={hublotLight} alt="" />
            <div>

            </div>
        </div>

        <div className='image-feat-two'>
            <img src={hublotDark} alt="" />
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default ImageFeature