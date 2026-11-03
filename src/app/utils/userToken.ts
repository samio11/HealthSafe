import { UserRole, UserStatus } from "../../generated/prisma/enums"
import { config } from "../config"
import { createToken } from "./jwt"

type TUserTokenPayload = {
    userId: string 
    name: string 
    email:string 
    role: UserRole 
    isDeleted: boolean 
    status: UserStatus
} 

export const createUserToken = (payload:TUserTokenPayload) =>{
    const accessToken = createToken(payload,config.JWT_ACCESS_SECRET as string,config.JWT_ACCESS_SECRET as string) 
    const refreshToken = createToken(payload,config.JWT_REFRESH_SECRET as string,config.JWT_REFRESH_EXPIRES as string) 
    return {accessToken,refreshToken}
}