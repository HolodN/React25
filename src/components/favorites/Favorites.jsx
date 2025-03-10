import React, {useContext} from 'react';
import axios from "axios";
import {AppContext} from "../../App";
import Item from "./Item";

const Favorites = (props) => {

    const context = React.useContext(AppContext);

    const onAddOverlay = (obj) => {
        axios.post('https://67b5c3a107ba6e59083e5dc0.mockapi.io/cart', obj)
        context.setOverlayItems([...props.overlayItems, obj]);
    }

    const onDeleteFav = (id) => {
        axios.delete(`https://637f91dd5b1cc8d6f949a67e.mockapi.io/favorites/${id}`)
        props.setFavorites((fav) => fav.filter(item => item.id !== id));
    }

    return (
        <div>
            <div>
                <h1 className='col-md-8 offset-md-2'>Избранные туры</h1>
            </div>
    {
        props.favorites.map(obj =>{
            return (
                <Item
                    key={obj.id}
                    id={obj.id}
                    myId={obj.myId}
                    title={obj.title}
                    description={obj.description}
                    price={obj.price}
                    img={obj.img}

                    onDeleteFav={(id)=>{onDeleteFav(id)}}
                    onPlus={(cartobj)=>{onAddOverlay(cartobj)}}
                />
            )
        })
    }
        </div>
    )

};

export default Favorites;