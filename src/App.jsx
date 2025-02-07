// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import { useState } from 'react';
import CardItem from './components/cart/CardItem';



function App() {

    // State для хранения данных туров
    const [tyrs, setTyrs] = useState([])

  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <CardItem item={tyrs}/>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
