import React from 'react';
import '../../components/newsLetter/NewsLetter.css';

const NewsLetter = () => {
    return (
        <section className='newsletter-section section-padding'>
            <div className='container'>


                <div className='newsletter-card text-center'>
                    <h2>Subscribe to get updates on exciting offers & deals</h2>
                    <div className='newsletter-form'>
                        <input type='text' placeholder='Enter your email' ></input>
                        <button type='submit' className='newsletter-ctn'>Subscribe</button>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default NewsLetter;
