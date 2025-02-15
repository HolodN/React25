import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import "./App.css"
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Description from "./components/Description";
import Basket from "./components/basket/Basket";


function App() {

    // State для хранения данных туров
    const [tyrs, setTyrs] = useState([])

    useEffect(()=>{
        async function axiosData(){
            const tyrsData =
                await axios.get('https://637f91dd5b1cc8d6f949a67e.mockapi.io/tyrs');
            // console.log(tyrsData);
            setTyrs(tyrsData.data);
        }
        axiosData();


        // fetch('https://637f91dd5b1cc8d6f949a67e.mockapi.io/tyrs').then((myJson) => {
        //     return myJson.json();
        // }).then((myJson) => {
        //     // console.log(myJson);
        //     setTyrs(myJson);
        // })
    },[]
    )

  return (
    <div>
        <Router>
              <Header/>
                <Routes>
                        <Route path="/favorites" element={<Favorites />}></Route>
                        <Route path="/" element={<Home item={tyrs}/>}></Route>
                        <Route path="/cart" element={<Basket />}></Route>
                        <Route path="/description" element={<Description />}></Route>
                </Routes>
              <Footer/>
        </Router>
    </div>
  );
}

export default App;
