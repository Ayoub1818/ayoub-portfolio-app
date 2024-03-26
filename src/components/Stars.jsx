import React from 'react'
import StarN from '../assets/StarN.png';
import StarF from '../assets/StarF.png';
import StarS from '../assets/StarS.png';

const Stars = () => {
  return (
    <div>
    <div className='absolute pt-10'>
        <img className='w-20 sm:animate-lineAnimation animate-starAnimationM' src={StarS} alt="HTML icon" />
      </div>
    </div>
  )
}

export default Stars