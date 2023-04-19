import React from 'react';

function FashionBanner({image_url}) {
  return (
    <section className='fashion_banner-section section-padding'>
      <a href='#' title='banner' rel='noopnner'>
        <img src={image_url} alt='Banner' title='Banner' className='img-fluid'></img>
      </a>
    </section>
  )
}

export default FashionBanner;
