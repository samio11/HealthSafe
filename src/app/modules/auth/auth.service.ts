import { UserStatus } from "../../../generated/prisma/enums"
import { auth } from "../../config/auth"

type TRegisterPatient = {
    name: string 
    email: string 
    password: string
}

type TLogin = {
    email: string 
    password: string
}
const registerPatient =async (payload: TRegisterPatient) =>{ 
    const {name,email,password} = payload 
    const data = await auth.api.signUpEmail({
        body:{name,email,password}
    }) 
    if(!data.user){
        throw new Error("Failed to register User")
    } 
    return data
}  

const loginUser = async(payload:TLogin) =>{
    const {email,password} = payload 
    const data = await auth.api.signInEmail({body:{email,password}}) 
    if(data.user.status == UserStatus.BLOCKED) throw new Error("User is Blocked") 
    if(data.user.isDeleted == true) throw new Error("User is deleted") 
    return data
}

export const authServices = {registerPatient,loginUser}