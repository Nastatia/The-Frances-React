import AboutHome from './AboutHome';
import Navbar from '../Navbar';
import Footer from '../Footer';
import bgImage from './chef1.jpg'; 
import bgImage2 from './chef2.jpg';
import bgImage3 from './chef3.jpg';
import bgImage4 from './chef4.jpg';

const About = () => {
 
    const view = {
        backgroundImage:"url('/home.png')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        
      }
    return ( 
        <section>
            <div className=" h-screen bg-center " style={view}>
             <div className='m-0 p-0 h-screen bg-black bg-opacity-10'>
               <Navbar /> 
               <div >
                  <div className="home m-0 p-0 ">
                    <AboutHome/>
                 </div>
               </div>
             </div>
          </div>
          <section className="food m-0 w-full p-0 h-fit bg-center bg-[#fee2b3] lg:px-40 md:px-10 sm:px-6 px-4 py-6 lg:py-40">
           <div className=" text-left">
              <h5 className="text-xs font-semibold">CHOOSE US</h5>
              <h4 className="text-3xl md:text-4xl mb-5">
              Why<span className="font-bold text-rose-600"> Choose Us</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
                <div className="border-opacity-10 border-black border-[1px] p-4 hover:bg-opacity-80 hover:bg-white rounded-xl text-left space-y-4  transition duration-300">
                  <div>
                    <h5 className="text-xs text-rose-600 font-bold">01</h5>
                    <h4 className="font-bold">Delicious Food</h4>
                 </div>
                 <p className="text-justify  text-black opacity-70">
                  At The Frances, we believe that every meal should be a delightful experience.
                  Our menu is crafted with fresh ingredients and rich flavors, ensuring each dish is a burst of deliciousness. 
                  Whether you're craving breakfast, lunch, or dinner, our chefs bring creativity and passion to every plate.
                  With a cozy atmosphere and exceptional service, choosing The Frances means indulging in food that not only satisfies your hunger but also nourishes your soul. 
                  Treat yourself to a dining experience where flavor meets finesse!
                 </p>
               </div>

               <div className="border-opacity-10 border-black border-[1px] p-4 hover:bg-opacity-80 hover:bg-white rounded-xl text-left space-y-4  transition duration-300">
                 <div>
                   <h5 className="text-xs text-rose-600 font-bold">02</h5>
                   <h4  className="font-bold">Expert Chefs</h4>
                 </div>
                  <p className="text-justify  text-black opacity-70">
                   At The Frances, our team of expert chefs brings years of culinary experience to your plate. 
                   Each dish is thoughtfully crafted with precision, creativity, and passion, ensuring a remarkable dining experience. 
                   Whether you’re enjoying a classic favorite or a new gourmet creation, you can trust that every meal is made with top-quality ingredients and expert technique. 
                   Choose The Frances for an unforgettable taste journey, expertly guided by our talented chefs.
                 </p>
               </div>

               <div className="border-opacity-10 border-black border-[1px] p-4 hover:bg-opacity-80 hover:bg-white rounded-xl text-left space-y-4 transition duration-300">
                  <div>
                   <h5 className="text-xs text-rose-600 font-bold">03</h5>
                   <h4  className="font-bold">Cozy Amibance</h4>
                 </div>
                 <p className="text-justify  text-black opacity-70">
                 The Frances offers more than just great food; we provide a warm and inviting atmosphere that makes every visit special. 
                 Whether you’re dining with friends, family, or colleagues, our cozy ambiance creates the perfect setting for meaningful conversations and memorable experiences.
                  From the elegant décor to the relaxing environment, you’ll feel right at home while enjoying exceptional service. 
                  Choose The Frances for a dining experience that delights all the senses.
                 </p>
               </div>

               <div className="border-opacity-10 border-black border-[1px] p-4 hover:bg-opacity-80 hover:bg-white rounded-xl text-left space-y-4  transition duration-300">
                 <div>
                   <h5 className="text-xs text-rose-600 font-bold">04</h5>
                    <h4  className="font-bold">Friendly Service</h4>
                 </div>
                  <p className="text-justify text-black opacity-70">
                  At The Frances, we believe that exceptional dining goes hand in hand with outstanding service. 
                  Our staff is dedicated to making you feel welcome from the moment you walk through the door. 
                  With warm smiles and attentive care, our team ensures that your every need is met. 
                  Whether it’s offering personalized recommendations or making sure your meal is perfect, we go above and beyond to create a friendly and comfortable atmosphere.
                  At The Frances, you’re not just a guest — you’re family.
                 </p>
               </div>
             </div>
           </div>

         </section>
         <section className='bg-[#f5c97e] bg-opacity-90  text-center py-6 lg:py-40 food lg:px-40 md:px-10 sm:px-6 px-4'>
              <h5 className="text-xs font-semibold">CHEF</h5>
              <h4 className="text-3xl md:text-4xl ">
               Our<span className="font-bold text-rose-600"> Professional Chef</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-20">
               <div className='h-80 w-full bg-cover bg-center '
                 style={{ backgroundImage: `url(${bgImage})`}}>
                  <div className='m-0 p-4 flex flex-col justify-end h-full bg-gradient-to-t from-black to-transparent opacity-100 '>
                    <div>
                      <h4 className='text-white font-bold'>Anastatia Eze</h4>
                      <h6 className='text-gray-200 text-sm'>Executive Chef</h6>
                    </div>
                  </div>
                </div>
                <div className='h-80 w-full bg-cover bg-center '
                 style={{ backgroundImage: `url(${bgImage2})`}}>
                  <div className='m-0 p-4 flex flex-col justify-end h-full bg-gradient-to-t from-black to-transparent opacity-100  '>
                    <h4 className='text-white font-bold'>Dominic Effiong</h4>
                    <h6 className='text-gray-200 text-sm'>Sous Chef</h6>
                  </div>
                </div>
                <div className='h-80 w-full bg-cover bg-center '
                 style={{ backgroundImage: `url(${bgImage3})`}}>
                  <div className='m-0 p-4 flex flex-col justify-end h-full bg-gradient-to-t from-black to-transparent opacity-100  '>
                    <h4 className='text-white font-bold'>Natalia John</h4>
                    <h6 className='text-gray-200 text-sm'>Chef de Partie (Station Chef)</h6>
                  </div>
                </div>
                <div className='h-80 w-full bg-cover bg-center '
                 style={{ backgroundImage: `url(${bgImage4})`}}>
                  <div className='m-0 p-4 flex flex-col justify-end h-full bg-gradient-to-t from-black to-transparent opacity-100 '>
                    <h4 className='text-white font-bold'>Peace Steven</h4>
                    <h6 className='text-gray-200 text-sm'>Commis Chef</h6>
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
 
export default About;