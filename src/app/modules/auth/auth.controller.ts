import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { authServices } from "./auth.service";

const registerPatient = catchAsync(async(req,res)=>{
    const payload = req.body 
    const result = await authServices.registerPatient(payload) 
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"User Register Done",
        data: result
    })
})


const loginUser = catchAsync(async(req,res)=>{
    const payload = req.body 
    const result = await authServices.loginUser(payload) 
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"User Login Done",
        data: result
    })
}) 

export const authControllers = {registerPatient,loginUser}