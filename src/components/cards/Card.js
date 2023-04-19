import React from 'react';
import AddToCartButton from '../addToCartButton/AddToCartButton';

function Card({ item }) {
    return (
        <>
            {item != undefined &&
                
                <div className='product_card'>
                    <a href='#' title='Product image' className='card-block text-center d-block'>
                        <div className='product-image-block'>
                            <img src={item.featured_image.url} alt={item.featured_image.name} title={item.featured_image.name} className='img-fluid d-block'></img>
                            <AddToCartButton />
                        </div>
                        <p>{item.title}</p>
                        <span className="product_value">{item.price} <strong>{item.compare_price}</strong></span>
                        <div className='product-size d-flex align-items-center justify-content-between'>
                            {
                                item.size.map((itm, index) => (
                                    <span key={"size_" + index} className='sizep d-block'>{itm}</span>
                                ))
                            }

                        </div>
                    </a>
                </div>
            }
        </>

    )
}

export default Card;
