import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import AddReview from '../components/AddReview'
import Reviews from '../components/Reviews'
import StarRating from '../components/StarRating'
import { RestaurantsContext } from '../context/RestaurantsContext'
const RestaurantDetail=()=>{
    const {id}=useParams()
    const {selectedRestaurant,setSelectedRestaurant}=useContext(RestaurantsContext)
    
        useEffect(()=>{
            const fetchData=async () =>{
             try{
                const response=await RestaurantFinder.get(`/${id}`)
                console.log(response.data.data.Restaurant);
               
                setSelectedRestaurant(response.data.data.Restaurant)
             } catch(err){
                console.log(err)
            }
            }
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
       return(<div>{ selectedRestaurant && (
           <>
            <div className="mt-3">
                <Reviews reviews={selectedRestaurant.reviews}/>
            </div>
            <AddReview/>
           </>
       )}
       
       </div>)
}
export default RestaurantDetail 
