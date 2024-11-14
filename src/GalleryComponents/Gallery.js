import GalleryHome from './GalleryHome';
import Navbar from '../Navbar';
import Footer from '../Footer';


const Gallery = () => {
   
    const view = {
        backgroundImage:"url('/home.png')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        
      }
    
    return ( 
        <section>
          <div >
            <div className=" h-screen bg-center " style={view}>
               <div className='m-0 p-0 h-screen bg-black bg-opacity-10'>
               <Navbar />
                 <div >
                   <div className="home m-0 p-0 transition-duration-300">
                     <GalleryHome/>
                    </div>
                 </div>
               </div>
             </div>
          </div>
          <section className="m-0 h-fit food pt-10 lg:px-40 md:px-10 sm:px-6 px-4 bg-center bg-[#fee2b3] py-6 lg:py-4 0">
  <div className="w-full overflow-hidden py-12">
    {/* Image Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/breakfast1.jpg"
          alt="Food1"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/Lunch1.jpg"
          alt="Food2"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/dinner1.jpg"
          alt="Food3"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/drink1.jpg"
          alt="Food4"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/Lunch2.jpg"
          alt="Food5"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/dinner2.jpg"
          alt="Food6"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/drink2.jpg"
          alt="Food7"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/breakfast2.jpg"
          alt="Food8"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/dinner2.jpg"
          alt="Food6"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/drink2.jpg"
          alt="Food7"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/breakfast2.jpg"
          alt="Food8"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/dinner2.jpg"
          alt="Food6"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/drink2.jpg"
          alt="Food7"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/breakfast2.jpg"
          alt="Food8"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/dinner2.jpg"
          alt="Food6"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/drink2.jpg"
          alt="Food7"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/breakfast2.jpg"
          alt="Food8"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/dinner2.jpg"
          alt="Food6"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/drink2.jpg"
          alt="Food7"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/breakfast2.jpg"
          alt="Food8"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/dinner2.jpg"
          alt="Food6"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/dinner2.jpg"
          alt="Food6"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/drink2.jpg"
          alt="Food7"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="overflow-clip rounded-md">
        <img
          src="./Assets/breakfast2.jpg"
          alt="Food8"
          className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
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
 
export default Gallery;