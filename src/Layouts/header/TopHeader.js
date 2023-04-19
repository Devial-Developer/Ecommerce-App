import React from 'react';
import '../header/TopHeader.css';
function TopHeader() {
    return (
        <div className='top-header d-flex align-items-center'>
            <div className='container'>
                <div className='row '>
                    <div className='col-6'>
                        <p>Welcome to Our Store Hiscraves</p>
                    </div>
                    <div className='col-6 top-header-left text-right'>
                        <a href='tel:1234567890' title='Call This Number' rel='nopanner' className='calling'><i class="fa-solid fa-phone"></i> Call Us: 1234567890</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;
