import React from 'react';
import './MixingProduct.css';
import mixingProduct1 from '../../assets/images/mixing-product/mixing-product1.png';
import mixingProduct2 from '../../assets/images/mixing-product/mixing-product2.png';
import mixingProduct3 from '../../assets/images/mixing-product/mixing-product3.png';
import mixingProduct4 from '../../assets/images/mixing-product/mixing-product4.png';
import mixingProduct5 from '../../assets/images/mixing-product/mixing-product5.png';
import mixingProduct6 from '../../assets/images/mixing-product/mixing-product6.png';

function MixingProduct() {
    return (
        <section className='mixingProduct-section section-padding text-center'>
            <div className='container'>
                <div className='row'>
                    <div className='mixingProduct_card'>
                        <a href='#' title='Product image' className='mixingProduct-block mixing-color1 text-center d-block'>
                            <img src={mixingProduct1} alt='Product 1' title='Product 1' className='img-fluid d-block'></img>
                            <p className='product-text'>Streetwear Collections</p>
                        </a>
                    </div>
                    <div className='mixingProduct_card'>
                        <a href='#' title='Product image' className='mixingProduct-block mixing-color2 text-center d-block'>
                            <img src={mixingProduct2} alt='Product 1' title='Product 1' className='img-fluid d-block'></img>
                            <p className='product-text'>Streetwear Collections</p>
                        </a>
                    </div>
                    <div className='mixingProduct_card'>
                        <a href='#' title='Product image' className='mixingProduct-block mixing-color3 text-center d-block'>
                            <img src={mixingProduct3} alt='Product 1' title='Product 1' className='img-fluid d-block'></img>
                            <p className='product-text'>Streetwear Collections</p>
                        </a>
                    </div>
                    <div className='mixingProduct_card'>
                        <a href='#' title='Product image' className='mixingProduct-block mixing-color4 text-center d-block'>
                            <img src={mixingProduct4} alt='Product 1' title='Product 1' className='img-fluid d-block'></img>
                            <p className='product-text'>Streetwear Collections</p>
                        </a>
                    </div>
                    <div className='mixingProduct_card'>
                        <a href='#' title='Product image' className='mixingProduct-block mixing-color5 text-center d-block'>
                            <img src={mixingProduct5} alt='Product 1' title='Product 1' className='img-fluid d-block'></img>
                            <p className='product-text'>Streetwear Collections</p>
                        </a>
                    </div>
                    <div className='mixingProduct_card'>
                        <a href='#' title='Product image' className='mixingProduct-block mixing-color6 text-center d-block'>
                            <img src={mixingProduct6} alt='Product 1' title='Product 1' className='img-fluid d-block'></img>
                            <p className='product-text'>Streetwear Collections</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MixingProduct;
