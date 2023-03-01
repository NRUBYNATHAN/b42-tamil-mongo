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
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

