import { Instagram } from "iconoir-react";
import { Facebook } from "iconoir-react";
import { Twitter } from "iconoir-react";

const Footer = () => {
    return (
        <section className="m-0 h-auto footer bg-[#645f56] text-white pt-20 lg:px-40 md:px-10 sm:px-6 px-4  pb-8">
            <div className="flex flex-col md:flex-row justify-center items-start gap-8">
              
                <div className="flex-1 text-left md:w-[30%] lg:pb-0 md:pb-10 sm:pb-10 pb-10">
                    <h6 className="text-base mb-2">About The Frances<span className="text-rose-600">.</span></h6>
                    <p className="text-sm pt-2 text-justify">
                        At The Frances, we blend timeless flavors with modern culinary artistry. Our cozy,
                        inviting atmosphere is perfect for everything from casual dinners to special celebrations.
                        Every dish is crafted with passion and served with care, offering you an unforgettable dining experience.
                    </p>
                    <p className="text-sm text-justify pt-5">
                        Join us at The Frances, where great food and warm hospitality meet.
                    </p>
                    <h6 className="text-base pt-8 pb-2">Connect</h6>
                    <div className="flex gap-4 pt-4">
                        <a href="/create"><Instagram className="text-black bg-white rounded-2xl p-2 text-xl" /></a>
                        <a href="/create"><Facebook className="text-black bg-white rounded-2xl p-2 text-xl" /></a>
                        <a href="/create"><Twitter className="text-black bg-white rounded-2xl p-2 text-xl" /></a>
                    </div>
                </div>

                <div className="flex flex-wrap flex-1 justify-between md:w-[70%]">
  
                    <div className="w-full md:w-fit lg:w-1/4 lg:pb-0 md:pb-10 sm:pb-10 pb-10">
                        <h6 className="text-base">Menu </h6>
                        <ul className="flex flex-col">
                            <a href="/menu" className="text-white text-opacity-80 pt-4 text-sm">Breakfast</a>
                            <a href="/menu" className="text-white text-opacity-80 pt-4 text-sm">Lunch</a>
                            <a href="/menu" className="text-white text-opacity-80 pt-4 text-sm">Dinner</a>
                            <a href="/menu" className="text-white text-opacity-80 pt-4 text-sm">Drinks</a>
                        </ul>
                    </div>

                    <div className="w-full md:w-fit lg:w-1/4 lg:pb-0 md:pb-10 sm:pb-10 pb-10" >
                        <h6 className="text-base">Gallery </h6>
                        <ul className="flex flex-col">
                            <a href="/gallery" className="text-white text-opacity-80 pt-4 text-sm">Food Gallery</a>
                            <a href="/events" className="text-white text-opacity-80 pt-4 text-sm">Events Gallery</a>
                        </ul>
                    </div>

                    <div className="w-full md:w-fit lg:w-1/4 lg:pb-0 md:pb-10 sm:pb-10 pb-10">
                        <h6 className="text-base">Events </h6>
                        <ul className="flex flex-col">
                            <a href="/events" className="text-white text-opacity-80 pt-4 text-sm">Birthday Party</a>
                            <a href="/events" className="text-white text-opacity-80 pt-4 text-sm">Private Dining</a>
                            <a href="/eventss" className="text-white text-opacity-80 pt-4 text-sm">Corporate Events</a>
                            <a href="/event" className="text-white text-opacity-80 pt-4 text-sm">Holiday Celebrations</a>
                        </ul>
                    </div>

                    <div className="w-full md:w-fit lg:w-1/4 lg:pb-0 md:pb-10 sm:pb-10 pb-10 ">
                        <h6 className="text-base">Contact </h6>
                        <p className="text-white text-opacity-80 text-sm text-left pt-4">
                            9, Emmanuel Road. Ibeju-Lekki, Lagos.
                        </p>
                        <p className="text-sm text-left">2807</p>
                        <ul className="flex flex-col">
                            <a href="/contact" className="text-white text-opacity-80 pt-4 text-sm">0906-5748-920</a>
                            <a href="/contact" className="text-white text-opacity-80 pt-4 text-sm">info@thefrances.com</a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pt-10 text-center">
                <p className="text-white text-sm">Copyright ©2024 All rights reserved</p>
            </div>
        </section>
    );
}

export default Footer;
