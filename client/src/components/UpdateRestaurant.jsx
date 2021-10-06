import React, { useContext }  from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useState ,useEffect} from 'react';
import {RestaurantsContext} from "../context/RestaurantsContext"
import RestaurantFinder from '../apis/RestaurantFinder';

const UpdateRestaurant = () => {
    const {id}=useParams();
    let history=useHistory();
    const {restaurants}=useContext(RestaurantsContext)
    const [name,setName]=useState("");
    const [location,setLocation]=useState("");
    const [priceRange,setPriceRange]=useState("");
    const test=useParams();
   


    useEffect(() => {
       const fetchData=async () =>{
           const response=await RestaurantFinder.get(`/${id}`)
           console.log(response)
           setName(response.data.data.Restaurant.name)
           setLocation(response.data.data.Restaurant.location)
           setPriceRange(response.data.data.Restaurant.price_range)
       }
       fetchData();

    }, []    )
    
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const updateRestaurant=await RestaurantFinder.put(`/${id}`,{
            name,
            location,
            price_range:priceRange
        })
        history.push("/")

    }

    console.log(test)
    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                        <input value={name} onChange={e=>setName(e.target.value)} id="name" className="form-control" type="text"/>
                        </div>
                <div className="form-group"></div>
                    <label htmlFor="location">Location</label>
                        <input value={location} onChange={e=>setLocation(e.target.value)} id="location" className="form-control" type="text"/>

                <div className="form-group"></div>
                    <label htmlFor="price_range">Price Range</label>
                        <input value={priceRange} onChange={e=>setPriceRange(e.target.value)} id="price_range" className="form-control" type="number"/>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default UpdateRestaurant
