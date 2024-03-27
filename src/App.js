import './App.css';
import Homepage from "./pages/homepage";
import Navbar from "./components/navbar"
import Footer from "./components/footer"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
