import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import IceCreamDisplay from './components/IceCreamDisplay';
import Delivery from './components/Delivery';
import Footer from './components/Footer';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <IceCreamDisplay />
      <Slider />
      <Delivery />
      <Footer />
    </div>
  );
}

export default App;
