import React from 'react';
import './Cards.css'


export default function ImageMask({imgSrc,text}) {
  return (
    <div className='bg-image'>
      <img src={imgSrc} className='w-100 card-img' alt='Sample' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100' style={{backgroundColor:"#addfad"}}>
          <p className='text-black mb-0 fs-5'>{text}</p>
        </div>
      </div>
    </div>
  );
}