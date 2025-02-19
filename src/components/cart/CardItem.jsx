import React from 'react'
import Item from './Item'
import axios from 'axios'

const CardItem = (props) => {

    const onAddOverlay = async (obj) =>{
        try{
            const findOverlay = props.overlayItems.find(objOver => objOver.myId === obj.myId)
            if(findOverlay){
                await axios.delete(`https://67b5c3a107ba6e59083e5dc0.mockapi.io/cart/${findOverlay.id}`)
                props.setOverlayItems((over) => over.filter(o => o.myId !== obj.myId ))
            }
            else{
                const {data} = await axios.post('https://67b5c3a107ba6e59083e5dc0.mockapi.io/cart', obj)
                props.setOverlayItems([...props.overlayItems, data])
            }
        } catch{
            alert('Произошла ошибка')

        }
    }

    const onAddFav = async (obj) =>{
        try{
            const findFavorites = props.favorites.find(objFav=>objFav.myId === obj.myId)
            if(findFavorites){
                await axios.delete(`https://637f91dd5b1cc8d6f949a67e.mockapi.io/favorites/${findFavorites.id}`)
                props.setFavorites((fav) => fav.filter(o => o.myId !== obj.myId ))
            }
            else{
                const {data} = await axios.post('https://637f91dd5b1cc8d6f949a67e.mockapi.io/favorites', obj)
                props.setFavorites([...props.favorites, data])
            }
        }
        catch{
            alert('Произошла ошибка')
        }
    }

  return (
      <div className='container py-3'>
      {
        props.item.map(obj=>{
          return (
              <Item
                  key={obj.id}
                  id={obj.id}
                  myId={obj.myId}
                  title={obj.title}
                  description={obj.description}
                  price={obj.price}
                  img={obj.img}

                  favBtn={
                      (favObj)=> {
                          onAddFav(favObj)
                      }
                  }

                  onPlus={(cartObj)=>{
                      onAddOverlay(cartObj)
                  }}
              />
          )
        })
      }
      </div>
  )
}

export default CardItem