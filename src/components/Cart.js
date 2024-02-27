import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { IMG_CDN_URL } from "../configDriven"
import { clearCart, removeItem } from "../utils/cartSlice"
// import { removeItem } from "../utils/cartSlice"

const Cart=()=>{
    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()
    const clearItem =()=>{
        dispatch(clearCart())
    }
    const removeFoodItem = (item,i)=>{
        dispatch(removeItem(item,i))
    }
    // console.log(cartItems.card)
    console.log(cartItems)
    if(!cartItems.length){
        return (
            <h1 className="flex justify-center text-6xl ">Please add some Food</h1>
        )
    }
    return(
        <>
        <button onClick={()=>{ clearItem() }} className="bg-red-600 p-3 text-white rounded-lg m-5">Clear All</button>
        <div className="flex flex-wrap drop-shadow-lg">
            {cartItems.map((item,i)=>(
                <div  key={item.card.info.id}>
                    <img className="w-60 h-40 mx-6 rounded-lg " src={IMG_CDN_URL+item.card.info.imageId} alt={item.card.info.name} /> 
                    <h1 className="font-medium mx-6 flex w-1/2" >{item.card.info.name}</h1>
                    <div className="flex">
                        <p className="mx-6">Price: {item.card.info.price}</p>
                        <h3 className="mx-6">Rating: {item.card.info.ratings.aggregatedRating.rating}</h3>
                    </div>
                    <button onClick={()=>removeFoodItem(item,i)} className="mx-6 my-3 bg-red-800 p-2 text-white rounded-full">Remove Food</button>
                </div>
            ))}
        </div>
        </>
    )
}

export default Cart