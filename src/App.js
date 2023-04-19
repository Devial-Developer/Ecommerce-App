import MiddleHeader from "./Layouts/header/MiddleHeader";
import Banner from "./components/heroBanner/Banner";
import GetPrimiumOffers from "./components/getPrimiumOffer/GetPrimiumOffers";
import IntroSection from "./components/introCollection/IntroSection";
import MixingProduct from "./components/mixingProduct/MixingProduct";
import Offer from "./components/offer/Offer";
import fashionBanner from './assets/images/banner/banner-1.jpg';
import OutBanner from './assets/images/banner/banner-2.jpg';
import product1Img from './assets/images/product-1.jpg';
import product2Img from './assets/images/product-2.jpg';
import product3Img from './assets/images/product-3.jpg';
import product4Img from './assets/images/product-4.jpg';
import FeaturedProduct from './components/featuresection/FeaturedProduct'
import CustomerSupports from "./components/customerSupport/CustomerSupports";
import NewsLetter from "./components/newsLetter/NewsLetter";
import Footer from "./Layouts/footer/Footer";
import FashionBanner from "./components/FashionBanner/FashionBanner";


function App() {
  const Trending_products = [
    {
      title: "Men Henley Neck Full Sleeve Red Wine",
      price: "₹399",
      compare_price: "₹1299",
      featured_image: {
        url: product1Img,
        name: "product image"
      },
      size: ["S", "M", "L", "XL", "XXL"]
    },
    {
      title: "Men Henley Neck Full Sleeve Red Wine",
      price: "₹399",
      compare_price: "₹1299",
      featured_image: { url: product2Img, name: "product image" },
      size: ["S", "M", "L", "XL"]
    },
    {
      title: "Men Henley Neck Full Sleeve Red Wine",
      price: "₹399",
      compare_price: "₹1299",
      featured_image: { url: product3Img, name: "product image" },
      size: ["S", "M", "L", "XL"]
    },
    {
      title: "Men Henley Neck Full Sleeve Red Wine",
      price: "₹399",
      compare_price: "₹1299",
      featured_image: { url: product4Img, name: "product image" },
      size: ["S", "M", "L", "XL"]
    },
    {
      title: "Men Henley Neck Full Sleeve Red Wine",
      price: "₹399",
      compare_price: "₹1299",
      featured_image: {
        url: product1Img,
        name: "product image"
      },
      size: ["S", "M", "L", "XL", "XXL"]
    },
    {
      title: "Men Henley Neck Full Sleeve Red Wine",
      price: "₹399",
      compare_price: "₹1299",
      featured_image: { url: product2Img, name: "product image" },
      size: ["S", "M", "L", "XL"]
    },
    {
      title: "Men Henley Neck Full Sleeve Red Wine",
      price: "₹399",
      compare_price: "₹1299",
      featured_image: { url: product3Img, name: "product image" },
      size: ["S", "M", "L", "XL"]
    },
    {
      title: "Men Henley Neck Full Sleeve Red Wine",
      price: "₹399",
      compare_price: "₹1299",
      featured_image: { url: product4Img, name: "product image" },
      size: ["S", "M", "L", "XL"]
    }
  ];
  const Featured_products = [
    {
      title: "Men Henley Neck Full Sleeve Red Wine",
      price: "₹399",
      compare_price: "₹1299",
      featured_image: {
        url: product1Img,
        name: "product image"
      },
      size: ["S", "M", "L", "XL", "XXL"]
    },
    {
      title: "Men Henley Neck Full Sleeve Red Wine",
      price: "₹399",
      compare_price: "₹1299",
      featured_image: { url: product2Img, name: "product image" },
      size: ["S", "M", "L", "XL"]
    },
    {
      title: "Men Henley Neck Full Sleeve Red Wine",
      price: "₹399",
      compare_price: "₹1299",
      featured_image: { url: product3Img, name: "product image" },
      size: ["S", "M", "L", "XL"]
    },
    {
      title: "Men Henley Neck Full Sleeve Red Wine",
      price: "₹399",
      compare_price: "₹1299",
      featured_image: { url: product4Img, name: "product image" },
      size: ["S", "M", "L", "XL"]
    }
  ];


  return (
    <div className="App">


      <MiddleHeader />
      <Banner />
      <IntroSection />
      <Offer />
      <FeaturedProduct section_heading="Trending T-Shirts" products={Trending_products} />
      <FashionBanner image_url={fashionBanner} />
      <FeaturedProduct section_heading="Featured Products" products={Featured_products} />
      <MixingProduct />
      <FashionBanner image_url={OutBanner} />
      <FeaturedProduct section_heading="New Products" products={Featured_products} />
      <GetPrimiumOffers />
      <CustomerSupports />
      <NewsLetter />
      <Footer />

    </div>
  );
}

export default App;
