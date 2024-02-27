import { SWIGGY_FOOD_API } from "../configDriven"
import { useState, useEffect } from "react"
import { FOOD_MANU_API } from "../configDriven";



export const useApiFetch=()=>{
    const [food,setFood] = useState([])
    useEffect(()=>{
        fetch(SWIGGY_FOOD_API)
        .then((food)=>food.json())
        .then((f_data)=>(setFood(f_data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)))
    },[])
    return food
}

export const useRestaurantDetailsApi = (res_id)=>{
    const [restaurantDetails,setRestaurantDetails] = useState([])
    useEffect(()=>{
        fetch(FOOD_MANU_API+res_id)
        .then((food)=>food.json())
        .then((food_data)=>setRestaurantDetails(food_data?.data.cards[0]?.card?.card?.info))
    },[res_id])
    return restaurantDetails
}

export const useRestaurantMenuApi = (res_id)=>{
    const [restaurantMenu,setRestaurantManu] =useState([])
    useEffect(()=>{
        fetch(FOOD_MANU_API+res_id)
        .then((food)=>food.json())
        .then((food_m)=>setRestaurantManu(food_m?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards))
    },[res_id])
    return restaurantMenu
}

export const useIsOnline=()=>{
    const [isOnline,setIsOnline] = useState(true)
    useEffect(()=>{
        window.addEventListener("offline", () => {setIsOnline(false)});
    },[])
    useEffect(()=>{
        window.addEventListener("online", () => {setIsOnline(true)});        
    },[])
    return isOnline
}