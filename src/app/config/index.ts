import dotenv from "dotenv" 
import path from "path"

dotenv.config({path: path.join(process.cwd(),".env")}) 

export const config = {
    PORT: process.env.PORT,
    DATABASE:process.env.DATABASE,
    BETTER_AUTH_SECRET:process.env.BETTER_AUTH_SECRET,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL
}