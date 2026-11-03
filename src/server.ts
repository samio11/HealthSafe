import { Server } from "http";
import app from "./app";

let server:Server 
const port = 5000

async function startServer() {
    try{
        server = app.listen(port,()=>{
        console.log(`Server Runs:- http://localhost:${port}`)
    }) 
    } 
    catch(err){
        console.log(err)
    }
} 

(async()=>{
    await startServer()
})()