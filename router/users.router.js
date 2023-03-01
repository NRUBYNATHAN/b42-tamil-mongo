import express from "express";
import { createuser,getUserByName } from "../service/users.service.js";
const router = express.Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
  const userFromDB= await getUserByName(username)
  console.log(userFromDB)
  if(userFromDB){
    response.status(400).send({message:"username already exists"})
  }
  else if(password.length<8){
  response.status(400).send({message:"password must br 8 charecters"})
  }
  else{
 const hashedPassword=await generateHashedPassword(password)
  const result = await createuser({
    username:username,
    password:hashedPassword,
  });
  response.send(result);
  }

});


router.post("/login", async function (request, response) {
  const {username,password} = request.body;
  const userFromDB= await getUserByName(username)
  console.log(userFromDB)
  if(!userFromDB){
    response.status(400).send({message:"invalid credentials"})
  }else{
    const storedDBPassword=userFromDB.password;
    const isPasswordCheck=await bcrypt.compare(password,storedDBPassword)
    console.log(isPasswordCheck)
    if(isPasswordCheck){
      const token=jwt.sign({id:userFromDB._id},process.env.SECRET_KEY)
      response.status(200).send({message:"login successfull",token:token })
    }else{
      response.status(400).send({message:"invalid credentials"})
    }
  }

});


export default router;
