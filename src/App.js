import './App.css';
import Homepage from "./pages/homepage";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Shipment from "./components/shipment";
import Login from "./pages/register"
function App() {
  return (
    <div className="App ">
      <Navbar />
      <Shipment />
      <Footer />
    </div>
  );
}

export default App;
