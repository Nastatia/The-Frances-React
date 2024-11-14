import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
        arrows: false,
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        appendDots: dots => (
            <div>
                <ul style={{ margin: "0px", padding: "0px" }}>{dots}</ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className="carousel max-w-lg mx-auto px-4 pt-8 py-8 ">
            <Slider {...settings}>
                <div className='mb-5 text-left flex flex-row items-start'>
                    <img src={'/Assets/Customer 1.jpg'} alt="Customer1" className="mx-auto h-[100px] w-[100px] sm:h-[100px] sm:w-[100px] rounded-full  "/>
                    <h6 className="text-lg sm:text-xl mb-3 font-bold text-rose-600 pt-2">Chiamaka E.</h6>
                    <p className="text-sm sm:text-base pt-4 text-justify">
                        "A true gem! The Frances exceeded all our expectations. The ambiance was cozy and elegant, 
                        the staff was incredibly attentive, and the food was simply outstanding. Every dish we tried was 
                        bursting with flavor and beautifully presented. It's clear that a lot of love and care goes into everything 
                        they do. We can't wait to come back for another memorable meal!"
                    </p>
                </div>
                <div className='mb-5 text-left'>
                    <img src={'/Assets/Customer2.jpg'} alt="Customer2" className="mx-auto h-[100px] w-[100px] sm:h-[100px] sm:w-[100px] rounded-full"/>
                    <h6 className="text-lg sm:text-xl mb-3 font-bold text-rose-600 pt-2">Jasmine G.</h6>
                    <p className="text-sm sm:text-base pt-4 text-justify">
                        "A true gem! The Frances exceeded all our expectations. The ambiance was cozy and elegant, 
                        the staff was incredibly attentive, and the food was simply outstanding. Every dish we tried was 
                        bursting with flavor and beautifully presented. It's clear that a lot of love and care goes into everything 
                        they do. We can't wait to come back for another memorable meal!"
                    </p>
                </div>
                <div className='mb-5 text-left'>
                    <img src={'/Assets/Customer3.jpg'} alt="Customer3" className="mx-auto h-[100px] w-[100px] sm:h-[100px] sm:w-[100px] rounded-full"/>
                    <h6 className="text-lg sm:text-xl mb-3 font-bold text-rose-600 pt-2">George M.</h6>
                    <p className="text-sm sm:text-base pt-4 text-justify">
                        "Absolutely fantastic! From the moment we walked in, we were greeted with warm smiles and impeccable service.
                        The food was extraordinary, with flavors that danced on the palate. The Frances is now our go-to spot for special occasions!"
                    </p>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
