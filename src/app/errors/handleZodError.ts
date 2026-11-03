import z from "zod" 
import { TErrorResponse, TErrorSources } from "../types/error.interface"

export const handleZodError = (err: z.ZodError):TErrorResponse =>{
    const statusCode = 401 
    const message = "Zod Validation Error" 
    const errorSources : TErrorSources[] = [] 

    err.issues.forEach(x=>{
        errorSources.push({
            path: x.path.join(" => "),
            message: x.message
        })
    }) 
    return{
        success: false,
        message,
        statusCode,
        errorSources
    }
}