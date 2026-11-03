import express, { Application, Request, Response } from "express" 
import cors from "cors" 
import { rootRoute } from "./app/routes"
const app:Application = express() 
app.use(express.json()) 
app.use(cors())  

app.use("/api/v1",rootRoute)

app.get("/",(req:Request,res:Response)=>{
    res.status(200).json({
        success: true,
        message:"Server is running successfully",
        upTime: process.uptime()
})
}) 

export default app