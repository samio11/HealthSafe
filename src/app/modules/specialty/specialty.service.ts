import { Specialty } from "../../../generated/prisma/browser";
import { prisma } from "../../config/prisma";

const createSpecialty = async(payload:Specialty):Promise<Specialty> =>{
    const result = await prisma.specialty.create({data:payload}) 
    return result
} 

const getAllSpecialty = async(): Promise<Specialty[]> =>{
    const result = await prisma.specialty.findMany() 
    return result
} 

const getASpecialty = async(id:string) =>{
    const result = await prisma.specialty.findUnique({where:{id:id}}) 
    return result
} 

const updateSpecialty = async(id: string,payload:Partial<Specialty>) =>{
    const result = await prisma.specialty.update({where:{id:id},data:payload}) 
    return result
} 

const deleteSpecialty = async(id:string) =>{
    const result = await prisma.specialty.update({
        where: {id:id},
        data:{
            isDeleted: true,
            deletedAt: new Date().toISOString()
        }
    }) 
    return result
}

export const specialtyServices = {createSpecialty,getAllSpecialty,getASpecialty,updateSpecialty,deleteSpecialty}