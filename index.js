import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
import { MongoClient } from "mongodb";
import moviesRouter from "./router/movies.router.js";
import usersRouter from "./router/users.router.js";
import cors from "cors";

const app = express();
console.log(process.env. MONGO_URL)
const PORT = process.env.PORT;
//mongo connection
// const MONGO_URL = "mongodb://127.0.0.1";
const MONGO_URL = process.env. MONGO_URL;
export const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");
//ellarukum data kutuka
app.use(cors());
//ithu ethukuna post and update function ku set akum 
app.use(express.json())



app.use("/movies",moviesRouter)
app.use("/users",usersRouter)
 const mobile=[
    {
      "model": "OnePlus 9 5G",
      "img": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
      "company": "Oneplus"
    },
    {
      "model": "Iphone 13 mini",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TaydkHFZp6JYGw9PVZBr-gD5KmtCu_xgyw&usqp=CAU",
      "company": "Apple"
    },
    {
      "model": "Samsung s21 ultra",
      "img": "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
      "company": "Samsung"
    },
    {
      "model": "Xiomi mi 11",
      "img": "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
      "company": "Xiomi"
    }
  ]
  app.get("/mobiles",function(request,response){
response.send(mobile)
})
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

