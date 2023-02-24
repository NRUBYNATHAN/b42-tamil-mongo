import express from "express";
const router=express.Router()
import {client} from "../index.js";

//welcome api
router.get("/", function (request, response) {
    response.send("🙋‍♂️, 🌏 🎊✨🤩,❌❌❌❌❌");
  });
  
  //movies api
  router.get("/", async function (request, response) {
    const movies = await client
    .db("b42wd2")
    .collection("movies")
    //Curser ->pagination(20) \ curser -> array =>toArray()
    .find({})
    .toArray();
  
    response.send(movies);
  });
  
  //movie by id api
  
  router.get("/:id", async function (request, response) {
    const { id } = request.params;
    console.log(id);
    //const movie=movies.find((mv)=>mv.id===id)
    //db.movies.findOne({id:100})
    const movie = await client
      .db("b42wd2")
      .collection("movies")
      .findOne({ id: id });
  
    console.log(movie);
    movie
      ? response.send(movie)
      : response.status(404).send({ message: "movie not found" });
  });
  
  //post function
  //express.json()->midleware
  router.post("/", async function (request, response) {
    const data = request.body;
    //db.movies.insertMany(data)
    const result = await client
      .db("b42wd2")
      .collection("movies")
      .insertMany(data);
    response.send(result);
  });
  
  
  //delete function
  router.delete("/:id", async function (request, response) {
    const { id } = request.params;
    console.log(id);
    //const movie=movies.deleteOne((mv)=>mv.id===id)
    //db.movies.deleteOne({id:100})
    const movie = await client
      .db("b42wd2")
      .collection("movies")
      .deleteOne({ id: id });
  
    console.log(movie);
    movie.deletedCount>=1
      ? response.send({ message: "movie DELETED SUCCESFULLY" })
      : response.status(404).send({ message: "movie not found" });
  });
  
  //update function
  //express.json()->midleware 
  router.put("/:id", async function (request, response) {
    const { id } = request.params;
    const data = request.body;
    console.log(id);
    
    //db.movies.updateOne({id:id},{$set:data})
    const movie = await client
      .db("b42wd2")
      .collection("movies")
      .updateOne({ id: id },{$set:data});
      response.send(movie)
    console.log(movie);
   
  });
  
  export default router;