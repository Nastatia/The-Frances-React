import MenuHome from './MenuHome';
import Navbar from '../Navbar';
import Footer from '../Footer';
import MenuFood from './MenuFood';


const Menu = () => {
 
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
                 <MenuHome/>
               </div>
              </div>
             </div>
             </div>
        <div className=" m-0 w-full p-0 h-fit bg-center  bg-[#fee2b3]">
          <MenuFood/>
       </div>
       <div className="m-0 p-0 ">
          <Footer/> 
        </div>
        </section>
     );
}
 
export default Menu;