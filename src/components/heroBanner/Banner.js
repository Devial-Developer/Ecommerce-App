import React from 'react';
import './Banner.css';
import  bannerImg from '../../assets/images/banner/hero_banner.jpg';

function Banner() {
  return (
    <section className='banner-section section-padding header-top-padding'>
      <a href='#' title='banner' rel='noopnner'>
        <img src={bannerImg} alt='Banner' title='Banner' className='img-fluid'></img>
      </a>
    </section>
  )
}

export default Banner;
