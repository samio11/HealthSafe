import { Router } from "express";
import { authControllers } from "./auth.controller";

const router = Router() 

router.post("/register/patient",authControllers.registerPatient) 
router.post("/login",authControllers.loginUser) 

export const authRoutes = router