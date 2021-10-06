require("dotenv").config();
const express=require("express");
const morgan = require('morgan');
const cors=require("cors")
const app=express();
app.use(cors());
const db = require("./db");
app.use(express.json());
//get all restaurants
app.get("/api/v1/restaurants",async(req,res)=>{
const result=await db.query("select * from restaurants")

try{
        
    res.status(200).json({
        status:"success",
        result:result.rows.length,
        data:{
        restaurants:result.rows,
        },
    });
    }   catch(err){
        console.log(err);
    }
    

})
//get one restaurant
app.get("/api/v1/restaurants/:id",async (req,res)=>{
    
    console.log(req.params.id);
    try{
        const restaurant=await db.query(`select * from restaurants where id=$1`,[req.params.id]);
        console.log(results)

        const reviews=await db.query(`select * from restaurants where id=$1`,[req.params.id]);
        console.log(results)
       
       
        res.status(200).json({
            status:"sucess",
            data:{
                Restaurant:restaurant.rows[0],
                reviews:reviews.rows
            }
            })
    }catch(err){
        console.log(err);    
    }
    
    });
    //create a restaurant
app.post("/api/v1/restaurants",async (req,res)=>{
    console.log(req.body);

    if (req.body.name === "") {
        res.status(400).json({
            status:"fail"
        })
    }
    try{
    const result=await db.query("INSERT INTO restaurants (name,location,price_range) values($1,$2,$3) returning *",[req.body.name,req.body.location,req.body.price_range])
       
     console.log(result);
    
    res.status(201).json({
        status:"sucess",
        data:{
            restaurants:result.rows[0],
        }
        })
    }
        catch(err){
            console.log(err)
        }
        
    
});
//update a restaurant
app.put("/api/v1/restaurants/:id",async (req,res)=>{
    
    try{
        const result=await db.query("UPDATE restaurants SET name=$1,location=$2,price_range=$3 where id=$4  returning *"
        ,[req.body.name,req.body.location,req.body.price_range,req.params.id])
        console.log(result)
        res.status(200).json({
            status:"sucess",
            data:{
                Restaurant:result.rows[0]
            }
            })
    }catch(err){
        console.log(err)
    }
    
        console.log(req.params.id);
        console.log(req.body);
});
//delete a restaurant
app.delete("/api/v1/restaurants/:id",async (req,res)=>{
    try{
        const result=await db.query("DELETE FROM restaurants where id=$1",[req.params.id]);
        return res.status(204).json({
            status:"success",
    
        })
        console.log(result)
    }catch(err){
        console.log(err)
    }
    res.status(204).json({
        status:"success",

    })
    

    
})

const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server is up and listening on ${port}`);
})

