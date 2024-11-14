import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './HomeComponents/Main';
import Menu from './MenuComponents/Menu';
import Gallery from './GalleryComponents/Gallery';
import Events from './EventComponents/Events';
import About from './AboutComponents/About';
import Contact from './ContactComponents/Contact';
import Booking from './BookingComponents/Booking';

function App() {
  return (
    <div className='border-box w-full m-0 p-0'>
      <Router>
          <Switch>
            <Route exact path='/'>
            <Main/>
            </Route>
            <Route path='/menu'>
             <Menu/>
              </Route>
              <Route path='/gallery'>
             <Gallery/>
              </Route>
              <Route path='/events'>
             <Events/>
              </Route>
              <Route path='/about'>
             <About/>
              </Route>
              <Route path='/contact'>
             <Contact/>
              </Route>
              <Route path='/book'>
             <Booking/>
              </Route>
          </Switch>
        
         </Router>
    </div>
  );
}



export default App;
