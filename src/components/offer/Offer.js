import React from 'react';
import '../offer/Offer.css';
import offer1Img from '../../assets/images/offer/intro-baggy-offter.jpg';
import offer2Img from '../../assets/images/offer/intro-winner-offter.jpg';
import offer3Img from '../../assets/images/offer/intro-womens-offter.jpg';
import offer4Img from '../../assets/images/offer/intro-best_deal-offter.jpg';
import offer5Img from '../../assets/images/offer/intro-trendy-offter.jpg';


function Offer() {
  return (
    <section className='offer-section section-padding'>
      <div className='container'>
        <div className='d-flex flex-wrap'>

          <div className='offerPoster_card'>
            <a href='#' title='offer' className='offer-card d-block' >
              <img src={offer1Img} alt="collection 1" title="offer" className='img-fluid'></img>
            </a>
          </div>
          <div className='offerPoster_card'>
            <a href='#' title='offer' className='offer-card d-block'>
              <img src={offer2Img} alt="collection 1" title="offer" className='img-fluid'></img>
            </a>
          </div>
          <div className='offerPoster_smallPoster'>
            <a href='#' title='offer' className='offer-card d-block '>
              <img src={offer3Img} alt="collection 1" title="offer" className='img-fluid'></img>
            </a>
          </div>
          <div className='offerPoster_smallPoster'>
            <a href='#' title='offer' className='offer-card d-block'>
              <img src={offer4Img} alt="collection 1" title="offer" className='img-fluid'></img>
            </a>
          </div>
          <div className='offerPoster_smallPoster'>
            <a href='#' title='offer' className='offer-card d-block'>
              <img src={offer5Img} alt="collection 1" title="offer" className='img-fluid'></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offer;
