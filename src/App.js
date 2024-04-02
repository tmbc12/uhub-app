import './App.css';
import Homepage from "./pages/homepage";
// import Navbar from "./components/navbar";
// import Footer from "./components/footer";
import Shipment from "./components/shipment";
import Login from "./pages/login"
import Register from "./pages/register"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className=" ">
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/shipment' element={<Shipment />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
