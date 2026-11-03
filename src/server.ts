import { Server } from "http";
import app from "./app";
import { config } from "./app/config";

let server:Server 

async function startServer() {
    try{
        server = app.listen(config.PORT,()=>{
        console.log(`Server Runs:- http://localhost:${config.PORT}`)
    }) 
    } 
    catch(err){
        console.log(err)
    }
} 

(async()=>{
    await startServer()
})()