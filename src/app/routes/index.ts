import { Router } from "express";
import { specialtyRoutes } from "../modules/specialty/specialty.routes";
import { authRoutes } from "../modules/auth/auth.routes";

export const rootRoute = Router() 

const moduleRoute = [
    {
        path:"/specialty",
        element: specialtyRoutes
    },
    {
        path:"/auth",
        element: authRoutes
    }
] 

moduleRoute.forEach((x)=> rootRoute.use(x.path,x.element))