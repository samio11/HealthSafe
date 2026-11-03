import { Router } from "express";
import { specialtyRoutes } from "../modules/specialty/specialty.routes";

export const rootRoute = Router() 

const moduleRoute = [
    {
        path:"/specialty",
        element: specialtyRoutes
    }
] 

moduleRoute.forEach((x)=> rootRoute.use(x.path,x.element))