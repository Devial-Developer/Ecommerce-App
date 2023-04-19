import React from 'react';
import './GetPrimiumOffers.css';
import diamondImg from '../../assets/images/icons/diamond.png';
import discountImg from '../../assets/images/icons/discount.png';

function GetPrimiumOffers() {
    return (
        <section className='getPrimiumOffer-section section-padding'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='getPrimiumOffer-card text-center mb-md-0 mb-4'>
                            <img src={diamondImg} alt='Product 1' title='Product 1' className='img-fluid d-block mx-auto'></img>
                            <span className='getPrimiumOffer-title d-block'>Hurry Up!</span>
                            <h2 className='getPrimiumOffer-heading'>85% OFF</h2>
                            <span className='getPrimiumOffer-title d-block'>Sale</span>
                            <a href='#' title='shop now' className='shopnow-btn d-inline-block text-center' >shop now</a>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='getPrimiumOffer-card text-center'>
                            <img src={discountImg} alt='Product 1' title='Product 1' className='img-fluid d-block mx-auto'></img>
                            <span className='getPrimiumOffer-title d-block'>Hurry Up!</span>
                            <h2 className='getPrimiumOffer-heading'>75% OFF</h2>
                            <span className='getPrimiumOffer-title d-block'>Sale</span>
                            <a href='#' title='shop now' className='shopnow-btn d-inline-block text-center' >shop now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetPrimiumOffers;
