import Dash_board from "./pages/Dash_board";
import Log_in from "./pages/Log_in";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Manage_contact from "./pages/Manage_contact";
import Header from "./component/Header";
import Manage_product from "./pages/Manage_product";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Add_product from "./pages/Add_product";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route index path="/" element={<><Log_in/></>}></Route>
        <Route path="/dashboard" element={<><Header/><Dash_board/></>}></Route>
        <Route path="/contact" element={<><Header/><Manage_contact/></>}></Route>
        <Route path="/addproduct" element={<><Header/><Add_product/></>}></Route>
        <Route path="/product" element={<><Header/><Manage_product/></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
