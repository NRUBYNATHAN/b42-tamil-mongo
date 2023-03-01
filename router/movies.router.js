import express from "express";
const router = express.Router();
import {
  getmovies,
  getmoviesbyid,
  createmovies,
  deletemovies,
  updatemovies,
} from "../service/movies.service.js";

// //welcome api
// router.get("/", function (request, response) {
//   response.send("🙋‍♂️, 🌏 🎊✨🤩,❌❌❌❌❌");
// });

//movies api
router.get("/", async function (request, response) {
  const movies = await getmovies();

  response.send(movies);
});

//movie by id api

router.get("/:id", async function (request, response) {
  const { id } = request.params;
  console.log(id);
  //const movie=movies.find((mv)=>mv.id===id)
  //db.movies.findOne({id:100})
  const movie = await getmoviesbyid(id);

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
  const result = await createmovies(data);
  response.send(result);
});

//delete function
router.delete("/:id", async function (request, response) {
  const { id } = request.params;
  console.log(id);
  //const movie=movies.deleteOne((mv)=>mv.id===id)
  //db.movies.deleteOne({id:100})
  const movie = await deletemovies(id);

  console.log(movie);
  movie.deletedCount >= 1
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
  const movie = await updatemovies(id, data);
  response.send(movie);
  console.log(movie);
});

export default router;
