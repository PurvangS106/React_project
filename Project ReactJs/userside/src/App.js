import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './components/About';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Destination from './components/Destination';
import Index from './components/Index';
import Packages from './components/Packages';
import Pnf404 from './components/Pnf404';
import Service from './components/Service';
import Testimonials from './components/Testimonials';
import Travelguide from './components/Travelguide';
import Sign_up from './components/Sign_up';
import Log_in from './components/Log_in';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './components/Profile';
import Editprofile from './components/Editprofile';
import Product from './components/Product';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer></ToastContainer>
        <Routes>
          <Route index path='/' element={<Index/>}></Route>
          <Route index path='/about' element={<About/>}></Route>
          <Route index path='/service' element={<Service/>}></Route>
          <Route index path='/package' element={<Packages/>}></Route>
          <Route index path='/destination' element={<Destination/>}></Route>
          <Route index path='/booking' element={<Booking/>}></Route>
          <Route index path='/team' element={<Travelguide/>}></Route>
          <Route index path='/testimonial' element={<Testimonials/>}></Route>
          <Route index path='/contact' element={<Contact/>}></Route>
          <Route index path='/product' element={<Product/>}></Route>
          <Route index path='/signup' element={<Sign_up/>}></Route>
          <Route index path='/login' element={<Log_in/>}></Route>
          <Route index path='/profile' element={<Profile/>}></Route>
          <Route index path='/editprofile/:id' element={<Editprofile/>}></Route>
          <Route index path='*' element={<Pnf404/>}></Route>
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
