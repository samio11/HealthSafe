/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { config } from "../config";
import { TErrorResponse, TErrorSources } from "../types/error.interface"; 
import z from "zod"
import { handleZodError } from "../errors/handleZodError";
import { AppError } from "../errors/AppError";

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export const globalErrorHandler = (err:any,req:Request,res:Response,next:NextFunction)=>{
    if (config.NODE_ENV === "development"){
        console.log("Error From GlobalError Handler",err)
    } 

    let statusCode : number = 500 
    let message: string = "Internal Server Error" 
    let errorSources: TErrorSources[] = [] 
    let stack: string | undefined = undefined 


    if(err instanceof z.ZodError){
        const x = handleZodError(err) 
        statusCode = x.statusCode as number
        message = x.message 
        errorSources = [...x.errorSources] 
        stack = err.stack
    }
    else if(err instanceof AppError){
        statusCode = err.statusCode 
        message = err.message 
        stack = err.stack 
        errorSources = [
            {
                path: "",
                message: err.message
            }
        ]
    }
    else if(err instanceof Error){
        statusCode = 500 
        message = err.message 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        stack = err.stack 
        errorSources = [{
            path:"",
            message: err.message
        }]
    } 

    const errorResponse : TErrorResponse = {
        success: false,
        statusCode,
        message,
        error: config.NODE_ENV === "development" ? err : undefined,
        stack: config.NODE_ENV === "development" ?
            err : undefined,
        errorSources
    } 

    res.status(statusCode).json(errorResponse)
}