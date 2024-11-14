import Home from './Home'
import Navbar from '../Navbar'
import Content from './Content'
import Footer from '../Footer'



const Main = () => {
    const view = {
        backgroundImage:"url('/home.png')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        
      }
    return ( 
        <section>
           
              <div className="w-full h-auto relative bg-center " style={view} >
               <div className='w-full h-auto bg-black bg-opacity-30 flex flex-col justify-between'>
                   <Navbar />
                
                  <div className="home m-0 p-0">
                    <Home/>
                  </div>
               </div>
            </div>
          <div className=" m-0 w-full py-0 h-auto ">
            <Content/>
                 </div>
        
       <div className="m-0 p-0 ">
          <Footer/> 
        </div>
        </section>
     );
}
 
export default Main;