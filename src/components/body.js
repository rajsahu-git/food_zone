import { IMG_CDN_URL} from '../configDriven';
import React from 'react'
import { Shimmer } from './Shimmer';
import { Link } from 'react-router-dom';
import { useApiFetch } from '../utils/useApiFetch';
function Body(){
    const foodData = useApiFetch()

    return foodData?.length ===0?(<Shimmer/>):(
        <div className='flex flex-wrap flex-row justify-center'>
            {foodData?.map((datas)=>(
        <div className='flex flex-col p-4 flex-nowrap border-solid ' key={datas.info.id}>
            <Link to={"/restaurant/"+ datas.info.id}>
                
                <img src={IMG_CDN_URL+datas.info.cloudinaryImageId} className="object-cover w-52 h-52 align-middle rounded-md" alt="food-img" />            
                <h1 className='w-48 font-semibold text-lg'>{datas.info.name}</h1>
            </Link>
            <p>{datas.info.locality}</p>
        </div>
      ))}
        </div>
    )
}

export default Body