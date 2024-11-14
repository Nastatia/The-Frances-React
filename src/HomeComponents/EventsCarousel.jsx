import React from 'react';
import Slider1 from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EventCarousel = () => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        appendDots: dots => (
            <div>
                <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
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
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className="carousel py-6 lg:py-20 lg:px-40 md:px-10 sm:px-6 px-4">
            <div className="flex flex-col items-center text-center mb-8">
                <h5 className="text-xs font-semibold">EVENTS</h5>
                <h4 className="text-2xl lg:text-4xl mb-2">Our <span className="font-bold text-rose-600">Events</span></h4>
                <p className="text-sm md:text-base">Celebrate in style with our cozy ambiance and top-notch service.</p>
            </div>
            <Slider1 {...settings} className="carousel-track o">
                {[
                    {
                        imgSrc: '/Assets/Birthday party.jpg',
                        title: 'Birthday Party',
                        text: "Make your special day unforgettable with a birthday celebration at The Frances. Enjoy delicious food, a cozy atmosphere, and exceptional service as you celebrate with loved ones. Let us take care of everything while you create lasting memories."
                    },
                    {
                        imgSrc: '/Assets/work party.jpg',
                        title: 'Corporate Soirée',
                        text: "Elevate your next work event with a sophisticated Corporate Soirée at The Frances. Our elegant atmosphere, exquisite cuisine, and impeccable service make us the perfect venue for celebrating your team's achievements. Whether it's a year-end celebration, client appreciation event, or team-building evening, we'll help you create a memorable experience that reflects the professionalism and excellence of your company."
                    },
                    {
                        imgSrc: '/Assets/Family Cele.jpg',
                        title: 'Family Jubilee',
                        text: "Bring your loved ones together for a joyous Family Jubilee at The Frances. Whether it's a milestone birthday, anniversary, or a long-awaited reunion, our warm and inviting atmosphere, delicious cuisine, and attentive service will make your celebration truly special. Create cherished memories as you enjoy a delightful meal with those who matter most."
                    },
                    {
                        imgSrc: '/Assets/Dinner.jpg',
                        title: "Friend's Gathering",
                        text: "Reconnect and enjoy a special evening with your closest friends at The Frances. Our elegant setting, delectable dishes, and attentive service create the perfect backdrop for meaningful conversations and shared memories. Whether it’s a casual catch-up or a more formal dinner, we’ll make sure your Friends' Gathering is an experience to remember."
                    }
                ].map((event, index) => (
                    <div key={index} className="w-full pt-10 pb-8">
                        <div className="flex flex-col lg:flex-row lg:space-x-10 lg:gap-10 justify-between items-center">
                            <div className="lg:w-2/3 w-full mb-4 lg:mb-0">
                                <img src={event.imgSrc} alt={event.title} className="w-full h-auto object-cover rounded-md"/>
                            </div>
                            <div className="lg:w-1/3 w-full text-justify">
                                <h6 className="text-lg md:text-xl font-bold text-rose-600 pt-2">{event.title}</h6>
                                <p className="pt-2 text-sm md:text-base">
                                    {event.text}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider1>
        </div>
    );
}

export default EventCarousel;
