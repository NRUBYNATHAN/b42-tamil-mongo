import { client } from "../index.js";


export async function createuser(data) {
    //db.users.insertOne(data)
  return await client.db("b42wd2").collection("users").insertOne(data);
}

