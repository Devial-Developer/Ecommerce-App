import React from 'react';
import returnFrom from '../../assets/images/icons/return.svg';
import qaulityProduct from '../../assets/images/icons/qaulity-product.svg';
import safePayemnt from '../../assets/images/icons/safe-payemnt.svg';
import userSupport from '../../assets/images/icons/customer-support.svg';
import './CustomerSupports.css';

function CustomerSupports() {

    const customerData = [
        {
            image: returnFrom,
            name: '7 Days Return'
        },
        {
            image: qaulityProduct,
            name: 'Quality Products'
        },
        {
            image: safePayemnt,
            name: 'Safe Payment'
        },
        {
            image: userSupport,
            name: '24x7 Helpline'
        }
    ]

  return (
     <section className='customer_support-section section-padding py-5 mt-4'>
            <div className='container'>
                <div className='row align-items-center'>
                    {
                        customerData.map((item, index) => {
                            return <div className='col-md-3 col-6 mb-md-0 mb-sm-5 mb-4 borderRight'>
                                <div className='customer_support-card text-center'>
                                    <img src={item.image} alt={item.image} title={item.name} className='img-fluid d-block mx-auto'></img>
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
  )
}

export default CustomerSupports;
