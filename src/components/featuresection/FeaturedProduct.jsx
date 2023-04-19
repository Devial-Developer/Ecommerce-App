import React from 'react';
import Heading from '../Heading';
import './featurePro.css';
import Card from '../cards/Card';

function FeaturedProduct({section_heading,products}) {
console.log(products)
  return (
    <section className='card-section section-padding text-center'>
    <div className='container'>
        <Heading heading={section_heading} />
        {products.length>0 && 
        <div className='d-flex flex-wrap'>
            {
              products.map((itm,index)=>(
                <Card key={"card_"+index} item={itm} />
              ))
            }
        </div>
        }
        
        <a href='#' title='VIEW ALL' className='viewall-cta d-inline-block text-center' >VIEW ALL</a>
    </div>
</section>
  )
}

export default FeaturedProduct
