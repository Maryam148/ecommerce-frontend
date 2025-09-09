import React from 'react';
import Slider from 'react-slick';
import hero from "../assets/hero.jpg"
import hero1 from "../assets/hero1.jpg"
import hero2 from "../assets/hero2.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { featuredProducts, item } from './shop';



const Home = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
    return(
        <div className="w-full mt-5 ">
            
            <Slider {...settings}>
            <div className='px-10 bg-[#fbfaf8] text-gray-800'>
            <div className='flex flex-row justify-between items-center px-2 md:px-8 py-4'>
                <div className='w-1/2 '>
                    <p className='text-xl sm:text-2xl md:text-4xl font-bold '>Welcome to our Store!</p>
                    <p className='text-sm sm:text-base mt-2'>Lorem ipsum dolor sit amet, consectetur in interdum. Phasellus elementum sit amet libero quis hendrerit.</p>
                </div>
                <img src={hero} className='ww-1/2 h-[200px] sm:h-[250px] md:h-[400px] object-contain'/>
            </div>
            </div>
            <div>
            <img src={hero1} alt="Slide 2" className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover" />
            </div>
            <div>
            <img src={hero2} alt="Slide 3" className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover" />
            </div>
            </Slider>
            <div className='mt-15 flex  items-center flex-col justify-center'>
                <p className='prata-regular text-[20px] sm:text-[30px] text-bold m-4 text-gray-800'>FEATURED PRODUCTS</p>
                <div className='grid md:w-280 grid-cols-2 md:grid-cols-4 gap-4 py-6'>
                    {featuredProducts.map(item)}</div>
            </div>
            
            
        </div>
    )
}
export default Home