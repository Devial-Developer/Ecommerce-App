import React from 'react';
import '../footer/Footer.css';
import facebookIcon from '../../assets/images/icons/facebook.png';
import twitterIcon from '../../assets/images/icons/twitter.png';
import instragramIcon from '../../assets/images/icons/instragram.png';
import linkedinIcon from '../../assets/images/icons/linkedin.png';
import pinterestIcon from '../../assets/images/icons/pinterest.png';
import locationIcon from '../../assets/images/icons/location-icon.svg';
import callIcon from '../../assets/images/icons/call-icon.svg';
import emailIcon from '../../assets/images/icons/email-icon.svg';


function Footer() {

    return (
        <footer className='footer-section section-padding pb-0'>
            <div className='container section-padding'>
                <div className='d-flex flex-wrap p-sm-0 px-3'>
                    <div className='footer-block-txt mb-xl-0 mb-5'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries....</p>
                        <div class="footer-social-link">
                            <a href="#" class="footer-link d-inline-block" target='_blank' title='Facebook' rel='nofallow'>
                                <img src={facebookIcon} alt='FaceBook' title='Facebook'></img>
                            </a>
                            <a href="#" class="footer-link d-inline-block" target='_blank' title='Twitter' rel='nofallow'>
                                <img src={twitterIcon} alt='Twitter' title='Twitter'></img>
                            </a>
                            <a href="#" class="footer-link d-inline-block" target='_blank' title='Instragram' rel='nofallow'>
                                <img src={instragramIcon} alt='Instragram' title='Instragram'></img>
                            </a>
                            <a href="#" class="footer-link d-inline-block" target='_blank' title='Linkedin' rel='nofallow'>
                                <img src={linkedinIcon} alt='Linkedin' title='Linkedin'></img>
                            </a>
                            <a href="#" class="footer-link d-inline-block mr-0" target='_blank' title='Pinterest' rel='nofallow'>
                                <img src={pinterestIcon} alt='Pinterest' title='Pinterest'></img>
                            </a>
                        </div>
                    </div>


                  
                    <div className='footer-menu-block'>
                        <h2>ONLINE SHOPPING</h2>
                        <ul>
                            <li><a href='#' className='footer-page-link'> Men’s T-Shirts </a> </li>
                            <li><a href='#' className='footer-page-link'> Women’s Wear</a> </li>
                            <li><a href='#' className='footer-page-link'> Winter Collections</a> </li>
                            <li><a href='#' className='footer-page-link'> Hooded T-Shirts </a> </li>
                            <li><a href='#' className='footer-page-link'> Streetwear Collections</a> </li>
                        </ul>
                    </div>
                    <div className='footer-menu-block'>
                        <h2>CUSTOMER POLICIES</h2>
                        <ul>
                            <li><a href='#' className='footer-page-link'> About Us</a> </li>
                            <li><a href='#' className='footer-page-link'> Terms & Conditions </a> </li>
                            <li><a href='#' className='footer-page-link'> Shipping & Returns Policy </a> </li>
                            <li><a href='#' className='footer-page-link'> Cancellation & Refund Policy </a> </li>
                            <li><a href='#' className='footer-page-link'> Contact Us </a> </li>
                        </ul>
                    </div>
                  

                    
                    <div className='footer-menu-block mr-0 footer-right'>
                        <h2>CUSTOMER POLICIES</h2>
                        <ul>
                            <li>
                                <a href='#' className='footer-page-link mb-4'>
                                    <img src={locationIcon} alt='Location' className='mr-3 d-inline-block'></img>
                                  Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry.
                                </a>
                            </li>
                            <li>
                                <a href='tel:1234567890' className='footer-page-link mb-4'> <img src={callIcon} alt='Location' className='mr-3 d-inline-block'></img> Call Us: 1234567890 </a>
                            </li>
                            <li>
                                <a href='mailto:info@yourmail.com' className='footer-page-link'><img src={emailIcon} alt='Location' className='mr-3 d-inline-block'></img> Email Us: info@yourmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bottom-footer text-center'>
                ©2022-23 Powered By dummy team
            </div>
        </footer>
    )
}

export default Footer;
