import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import Favorites from "./components/favorites/Favorites";
import "./App.css"
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Description from "./components/Description";
import Basket from "./components/basket/Basket";
import Form from "./components/Form";
import React from 'react';

export const AppContext = React.createContext({})

function App() {

    // State для хранения данных туров
    const [tyrs, setTyrs] = useState([])

    //для избранных туров
    const [favorites, setFavorites] = useState([])

    //для корзины
    const [overlayItems, setOverlayItems] = useState([])


    useEffect(()=>{
        async function axiosData(){
            const tyrsData =
                await axios.get('https://637f91dd5b1cc8d6f949a67e.mockapi.io/tyrs');
            const favoritesData =
                await axios.get('https://637f91dd5b1cc8d6f949a67e.mockapi.io/favorites');
            const cartData =
                await axios.get('https://67b5c3a107ba6e59083e5dc0.mockapi.io/cart');

            // console.log(tyrsData);
            setTyrs(tyrsData.data);
            setFavorites(favoritesData.data);
            setOverlayItems(cartData.data);
        }
        axiosData();

    },[])

    const deleteItems = (id) => {
        axios.delete(`https://67b5c3a107ba6e59083e5dc0.mockapi.io/cart/${id}`)
        setOverlayItems((objDelete)=> objDelete.filter(item=>item.id !== id))
    }

    const isAdded = (myId) => {
        return overlayItems.some((objIsAdded)=> objIsAdded.myId === myId);
    }

    const isFav = (myId) => {
        return favorites.some((objIsFav)=>objIsFav.myId === myId);
    }


    return (
        <AppContext.Provider value={{tyrs, setTyrs, overlayItems, setOverlayItems, favorites, setFavorites, isAdded, isFav}}>
            <div>
                <Router>
                    <Header/>
                    <Routes>
                        <Route path="/favorites" element={<Favorites
                            favorites={favorites}
                            setFavorites={setFavorites}
                            item={tyrs}
                            overlayItems={overlayItems}
                            setOverlayItems={setOverlayItems}
                        />}>
                        </Route>

                        <Route path="/" element={<Home
                            item={tyrs}
                            overlayItems={overlayItems}
                            setOverlayItems={setOverlayItems}
                            favorites={favorites}
                            setFavorites={setFavorites}
                        />}>
                        </Route>

                        <Route path="/cart" element={<Basket
                            totalPrice={
                                overlayItems.reduce((element = overlayItems.length, obj) => element + obj.price, 0)
                            }
                            overlayProp={overlayItems}
                            deleteItems={deleteItems}
                        />}>
                        </Route>
                        <Route path="/description" element={<Description
                        />}>
                        </Route>
                        <Route path="/form" element={<Form />}></Route>
                    </Routes>
                    <Footer/>
                </Router>
            </div>
        </AppContext.Provider>
    );
}

export default App;
