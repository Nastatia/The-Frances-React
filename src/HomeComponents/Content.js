import Carousel from "./Carousel";
import EventCarousel from "./EventsCarousel";
import Food from "./Food";

function Content() {
    const background = {
        backgroundImage: "url('/ConPar.jpeg')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    };

    return (
        <div className="h-auto p bg-center w-full" style={background}>
            <div>
                <div className="bg-center bg-[#fee2b3] h-auto py-0  ">
                    <Food />
                </div>
            </div>

            <div className="food bg-[#f5c97e] bg-opacity-90 h-auto grid grid-cols-1 lg:grid-cols-12 gap-x-20 py-6 lg:py-20  lg:px-40 md:px-10 sm:px-6 px-4"> 
    
    <div className="lg:col-span-5">
        <div className="px-0 lg:px-0 pt-6 lg:pt-20"> 
            <h5 className="text-xs font-semibold">TESTIMONIALS</h5>
            <h4 className="text-2xl lg:text-4xl mb-5">Satisfied <span className="font-bold text-rose-600">Customers</span></h4>
        </div>
        <div>
            <Carousel/>
        </div>
    </div>

    <div className="lg:col-span-7 w-full py-6 lg:py-20">
        <h5 className="text-xs font-semibold">GALLERIES</h5>
        <h4 className="text-2xl lg:text-4xl mb-8">Photo <span className="font-bold text-rose-600">Galleries</span></h4>

        <div className="grid grid-cols-2 gap-4 lg:gap-7 mb-7">
            <div className="w-full h-[20vh] overflow-hidden rounded-md">
                <img src="./Assets/Food pic.jpg" 
                  alt="Food1" 
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
               />
            </div>
            <div className="w-full h-[20vh] overflow-hidden rounded-md">
                <img src="./Assets/Food pic1.jpg" 
                   alt="Food2" 
                   className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                 />   
            </div>
            <div className="w-full h-[20vh] overflow-hidden rounded-md">
                <img src="./Assets/Food pic2.jpg" 
                  alt="Food3" 
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
               />
            </div>
            <div className="w-full h-[20vh] overflow-hidden rounded-md">
                <img src="./Assets/Food pic3.jpg" 
                   alt="Food4" 
                   className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                 />   
            </div>
        </div>


        <div className="mt-6">
            <button className="px-6 py-3 text-[11px] lg:text-sm text-white rounded-3xl bg-rose-600 font-bold hover:bg-rose-700 transition duration-300">MORE GALLERIES</button>
        </div>
    </div>
</div>

   
            <div className="bg-[#fee2b3] h-auto lg:min-h-[70vh] py-6 lg:py-20">
                <EventCarousel />
            </div>

            <div className="bg-[#f5c97e] bg-opacity-90 h-auto py-6 lg:py-20 text-center lg:px-40 md:px-10 sm:px-6 px-4">
                <div className="max-w-4xl mx-auto p-0 lg:p-10">
                    <p className="text-xs mb-2">BOOK A TABLE</p>
                    <h4 className="text-2xl lg:text-3xl mb-4">Book A Table NOW</h4>
                    <p>Ready to indulge in a culinary journey that tantalizes your taste buds?</p>
                    <div className="px-0 lg:px-0 border-solid border-black text-center justify-between lg:justify-center items-center"> 
                        <p>Whether you're planning a romantic evening, a nice family gathering,
                            or just a night out with friends, our cozy atmosphere, exquisite dishes,
                            top-notch service are the perfect ingredients for a fantastic time.</p>
                    </div>
                    <div className="mt-8">
                        <button className="px-6 py-3 text-sm lg:text-[10px] text-white rounded-3xl bg-rose-600 font-bold hover:bg-rose-700 transition duration-300">
                            BOOK A TABLE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
