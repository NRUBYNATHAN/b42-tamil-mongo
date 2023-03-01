import express from "express";
import { createuser } from "../service/users.service.js";
const router = express.Router();
import bcrypt from "bcrypt";

async function generateHashedPassword(password){
    const NO_OF_ROUNDS=10;
    const salt =await bcrypt.genSalt(NO_OF_ROUNDS)
    const hashedPassword=await bcrypt.hash(password,salt)
    console.log(salt)
    console.log(hashedPassword);
    return hashedPassword;
}


//post function
//express.json()->midleware
router.post("/signup", async function (request, response) {
  const {username,password} = request.body;
 const hashedPassword=await generateHashedPassword(password)
  const result = await createuser({
    username:username,
    password:hashedPassword,
  });
  response.send(result);
});




export default router;
