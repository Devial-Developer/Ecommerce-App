import React from 'react';
import '../header/MiddleHeader.css';
import TopHeader from './TopHeader';

function MiddleHeader() {
    return (
        <>
            <header>
                <TopHeader />
                <div className='bottom-header'>
                    <div className='container'>
                        <input type="checkbox" id="openSideMenu" className="openSideMenu" />
                        <label for="openSideMenu" className="menuIconToggle">
                            <div className="hamb-line dia part-1"></div>
                            <div className="hamb-line hor"></div>
                            <div className="hamb-line dia part-2"></div>
                        </label>
                        <nav>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Shipping & Returns Policy</a></li>
                                <li><a href="#"> Cancellation & Refund Policy</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </nav>
                        <div className='logo'>
                            <a href='#' className='logo-link d-inline-block'>
                                Logo Here
                            </a>
                        </div>
                        <div className='header-left-content'>
                            <a href='#' className='social-link-header d-inline-block'>
                                <img src="https://i.ibb.co/3sSrqq0/search-icon.png" alt="Search Product" className='img-fluid'></img>
                            </a>
                            <a href='#' className='social-link-header d-inline-block'>
                                <img src="https://i.ibb.co/vs9y78N/heart-icon.png" alt="WishList" className='img-fluid'></img>
                            </a>
                            <a href='#' className='social-link-header d-inline-block'>
                                <img src="https://i.ibb.co/wrdV2NR/card-addto.png" alt="Add Your Product in Card" className='img-fluid'></img>
                            </a>
                            <a href='#' className='social-link-header d-inline-block'>
                                <img src="https://i.ibb.co/fdCmvrR/user.png" alt="User Profile" className='img-fluid'></img>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default MiddleHeader;
