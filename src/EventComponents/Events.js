import EventHome from './EventHome';
import Navbar from '../Navbar';
import Footer from '../Footer';


const Events = () => {
    

    const view = {
        backgroundImage:"url('/home.png')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        
      }
    return ( 
     <section>
     <div>
            <div className=" h-screen bg-center " style={view}>
               <div className='m-0 p-0 h-screen bg-black bg-opacity-10'>
                  <Navbar />
                 <div >
                      <div className="home m-0 p-0 ">
                         <EventHome/>
                        </div>
                  </div>
               </div>
         </div>
     </div>
     
     <section className="m-0 h-fit lg:px-40 md:px-10 sm:px-6 px-4  bg-[#fee2b3] py-6 lg:py-40">
  <div className="w-full flex flex-col justify-center items-center ">

    {/* Birthday Party Section */}
    <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
      <div className="w-full lg:w-[50%] mb-4 lg:mb-0">
        <img src={'/Assets/Birthday party.jpg'} alt="Birthday Party" className="w-full h-auto object-cover rounded-md" />
      </div>
      <div className="w-full lg:w-2/5 text-justify lg:pl-4">
        <h6 className="text-lg md:text-xl font-bold text-rose-600 pt-2">Birthday Party</h6>
        <p className="pt-2 text-sm md:text-base">
          Make your special day unforgettable with a birthday celebration at The Frances. Enjoy delicious food, a cozy atmosphere, and exceptional service as you celebrate with loved ones. Let us take care of everything while you create lasting memories.
        </p>
      </div>
    </div>

    {/* Corporate Soirée Section */}
    <div className="flex flex-col lg:flex-row-reverse justify-between items-center mb-10">
      <div className="w-full lg:w-[50%] mb-4 lg:mb-0">
        <img src={'/Assets/work party.jpg'} alt="Work party" className="w-full h-auto object-cover rounded-md" />
      </div>
      <div className="w-full lg:w-2/5 text-justify lg:pl-4">
        <h6 className="text-lg md:text-xl font-bold text-rose-600 pt-2">Corporate Soirée</h6>
        <p className="pt-2 text-sm md:text-base">
          Elevate your next work event with a sophisticated Corporate Soirée at The Frances. Our elegant atmosphere, exquisite cuisine, and impeccable service make us the perfect venue for celebrating your team's achievements.
        </p>
      </div>
    </div>

    {/* Family Jubilee Section */}
    <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
      <div className="w-full lg:w-[50%] mb-4 lg:mb-0">
        <img src={'/Assets/Family Cele.jpg'} alt="Family celebration" className="w-full h-auto object-cover rounded-md" />
      </div>
      <div className="w-full lg:w-2/5 text-justify lg:pl-4">
        <h6 className="text-lg md:text-xl font-bold text-rose-600 pt-2">Family Jubilee</h6>
        <p className="pt-2 text-sm md:text-base">
          Bring your loved ones together for a joyous Family Jubilee at The Frances. Enjoy delicious cuisine and attentive service to make your celebration truly special.
        </p>
      </div>
    </div>

    {/* Friend's Gathering Section */}
    <div className="flex flex-col lg:flex-row-reverse justify-between items-center mb-10">
      <div className="w-full lg:w-[50%] mb-4 lg:mb-0">
        <img src={'/Assets/Dinner.jpg'} alt="Dinner" className="w-full h-auto object-cover rounded-md" />
      </div>
      <div className="w-full lg:w-2/5 text-justify lg:pl-4">
        <h6 className="text-lg md:text-xl font-bold text-rose-600 pt-2">Friend's Gathering</h6>
        <p className="pt-2 text-sm md:text-base">
          Reconnect and enjoy a special evening with your closest friends at The Frances. Our elegant setting, delectable dishes, and attentive service create the perfect backdrop.
        </p>
      </div>
    </div>
  </div>
</section>



     <div className="m-0 p-0 ">
          <Footer/> 
     </div>
   </section>
     );
}
 
export default Events;