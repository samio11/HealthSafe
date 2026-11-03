import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { specialtyServices } from "./specialty.service";


const createSpecialty = catchAsync(async(req,res)=>{
    const payload = req.body 
    const result = await specialtyServices.createSpecialty(payload) 
    sendResponse(res,{
        success: true,
        statusCode:200,
        message:"Specialty is created Successfully",
        data:result
    })
}) 

const getAllSpecialty = catchAsync(async(req,res)=>{
    const result = await specialtyServices.getAllSpecialty() 
    sendResponse(res,{
        success: true,
        statusCode:200,
        message:"Specialty Data Retrived Successfully",
        data:result
    })
}) 

const getASpecialty = catchAsync(async(req,res)=>{
    const {id} = req.params
    const result = await specialtyServices.getASpecialty(id as string) 
    sendResponse(res,{
        success: true,
        statusCode:200,
        message:"Specialty Data Retrived Successfully",
        data:result
    })
}) 


const updateSpecialty = catchAsync(async(req,res)=>{
    const {id} = req.params 
    const payload = req.body
    const result = await specialtyServices.updateSpecialty(id as string,payload) 
    sendResponse(res,{
        success: true,
        statusCode:200,
        message:"Specialty Data update Successfully",
        data:result
    })
}) 


const deleteSpecialty = catchAsync(async(req,res)=>{
    const {id} = req.params
    const result = await specialtyServices.deleteSpecialty(id as string) 
    sendResponse(res,{
        success: true,
        statusCode:200,
        message:"Specialty Data delete Successfully",
        data:result
    })
}) 

export const specialtyController = {createSpecialty,getAllSpecialty,getASpecialty,updateSpecialty,deleteSpecialty}