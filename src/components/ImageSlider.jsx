import React from 'react';

function ImageSlider({img}) {
  return <div className='image-slider'>
      <img src={img} alt="image" />
  </div>;
}

export default ImageSlider;