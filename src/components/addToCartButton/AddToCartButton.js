import React from 'react'
import addToCardImg from '../../assets/images/icons/add-to-card.jpg';
import heartImg from '../../assets/images/icons/heart.jpg';
import shareImg from '../../assets/images/icons/share.jpg';

function AddToCartButton() {
    return (
        <div className='product-wishlist'>
            <a href='#' className='social-link-header'>
                <img src={addToCardImg} alt="Add To Card" title='Add To Card' className='img-fluid'></img>
            </a>
            <a href='#' className='social-link-header mx-2'>
                <img src={heartImg} alt="WishList" title='WishList' className='img-fluid'></img>
            </a>
            <a href='#' className='social-link-header'>
                <img src={shareImg} alt="Product Share" title='Product Share' className='img-fluid'></img>
            </a>
        </div>
    )
}

export default AddToCartButton
