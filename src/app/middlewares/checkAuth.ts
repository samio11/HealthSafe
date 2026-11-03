import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { validateToken } from "../utils/jwt";
import { config } from "../config";
import { JwtPayload } from "jsonwebtoken";
import { prisma } from "../config/prisma";
import { UserStatus } from '../../generated/prisma/enums';

export const checkAuth = (requiredRoles: string[]) => async(req:Request,res:Response,next:NextFunction) =>{
    try{
        const token = req?.headers?.authorization || req?.cookies?.accessToken 
        if(!token) throw new AppError(401,"Token not Found") 
        const verifyToken1 = validateToken(token,config.JWT_ACCESS_SECRET as string) as JwtPayload 
        const existUser = await prisma.user.findUnique({where:{email:verifyToken1.email}}) 
        if(!existUser) throw new AppError(401,"User is not found") 
        if(existUser.status === UserStatus.BLOCKED || existUser.status === UserStatus.DELETED) throw new AppError(401,"User is Blocked") 
        if(existUser.isDeleted === true) throw new AppError(401,"User is Deleted") 
        if(!requiredRoles.includes(existUser.role)){
            throw new AppError(401,"This User cant access this route")
        } 
        req.user = verifyToken1 
        next()
        
    } 
    catch(err){
        next(err)
    }
}