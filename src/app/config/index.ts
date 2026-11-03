import dotenv from "dotenv" 
import path from "path"

dotenv.config({path: path.join(process.cwd(),".env")}) 

export const config = {
    PORT: process.env.PORT,
    DATABASE:process.env.DATABASE,
    BETTER_AUTH_SECRET:process.env.BETTER_AUTH_SECRET,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
    NODE_ENV: process.env.NODE_ENV,
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
    JWT_ACCESS_EXPIRES:process.env.JWT_ACCESS_EXPIRES,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
    JWT_REFRESH_EXPIRES: process.env.JWT_REFRESH_EXPIRES
}