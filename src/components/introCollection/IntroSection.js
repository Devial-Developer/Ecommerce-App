import React from 'react';
import './IntroSection.css';
import collectionImg1 from '../../assets/images/collections/mens-t-shirt.png';
import collectionImg2 from '../../assets/images/collections/womens-wear.png';
import collectionImg3 from '../../assets/images/collections/winter-collection.png';
import collectionImg4 from '../../assets/images/collections/hooded-t-shirt.png';
import collectionImg5 from '../../assets/images/collections/polo-neek-tshirt.png';
import collectionImg6 from '../../assets/images/collections/full-sleeves-shirts.png';






function IntroSection() {

  const inrtoData = [
    {
      img: collectionImg1,
      imgName: 'Product Image',
      img_title: 'Men’s T-Shirts',
      collectionColor: '#F1DBE9'
    },
    {
      img: collectionImg2,
      imgName: 'Product Image',
      img_title: 'Women’s Wear',
      collectionColor: '#DDD3EB'
    },
    {
      img: collectionImg3,
      imgName: 'Product Image',
      img_title: 'Winter Collections',
      collectionColor: '#D3EAEB'
    },
    {
      img: collectionImg4,
      imgName: 'Product Image',
      img_title: 'Hooded T-Shirts',
      collectionColor: '#EFF1D9'
    },
    {
      img: collectionImg5,
      imgName: 'Product Image',
      img_title: 'Polo Neck T-Shirts',
      collectionColor: '#F1DADB'
    },
    {
      img: collectionImg6,
      imgName: 'Product Image',
      img_title: 'Full Sleeves T-Shirts',
      collectionColor: '#D9F1DE'
    }
  ]


  return (
    <section className='intro-section section-padding'>
      <div className='container'>
        <div className='row justify-content-center'>

          {
            inrtoData.map((item, index) => {
              return <a href='#' title={item.img_title} className='collection-card text-center d-block' key={index}>
                <div className='collection-card-img' style={{ backgroundColor: item.collectionColor }}>
                  <img src={item.img} alt={item.imgName} title={item.imgName} className='img-fluid'></img>
                </div>
                <span className='d-block collection-title'>{item.img_title}</span>
              </a>
            })
          }

        </div>
      </div>
    </section>
  )
}

export default IntroSection;
