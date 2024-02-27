import { useParams } from "react-router-dom"
import { useRestaurantDetailsApi,useRestaurantMenuApi } from "../utils/useApiFetch";
import { IMG_CDN_URL } from "../configDriven";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";




const RestrauntManu=()=>{
    const {res_id} = useParams();
    const foodManu = useRestaurantMenuApi(res_id)
    const restaurantManu = useRestaurantDetailsApi(res_id)
    const {user} = useContext(UserContext)
    const dispatch = useDispatch()
    const addFoodItem = (item) =>{
        dispatch(addItem(item))
    }
    return(
        <div className="flex px-20 justify-around ">
            <div className="w-1/2  flex flex-wrap justify-center mt-20">
                <div>
                <img src={IMG_CDN_URL + restaurantManu?.cloudinaryImageId} className=" w-96 h-96 object-cover rounded-lg" alt="FoodImg" />
                <h1 className="text-2xl mt-2"> {restaurantManu?.name}</h1>
                <h3>{restaurantManu?.costForTwoMessage}</h3>
                <h3>{restaurantManu?.areaName}, {restaurantManu?.city}</h3>
                <h2>{restaurantManu?.avgRatingString}</h2>
                <h6>{user.name}</h6>
                </div>
            </div>
            <div className="w-1/2">
                <h1 className=" flex text-2xl justify-center p-4" >Menu</h1>
                <ul className="flex flex-wrap w-full">
                {foodManu?.map((food,i) =>(
                    <div key={i} className="flex w-1/2 justify-between" >
                        <li className="px-3 m-2 flex w-auto "> 
                            {food?.card?.info?.name}
                        </li>
                        <button onClick={()=> addFoodItem(food)} className="bg-green-200 my-3 mx-2 px-4  py-2 rounded-md">Add</button>
                    </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RestrauntManu