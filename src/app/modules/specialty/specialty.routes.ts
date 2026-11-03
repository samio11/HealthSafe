import { Router } from "express";
import { specialtyController } from "./specialty.controller";

const router = Router() 

router.post("/create",specialtyController.createSpecialty) 
router.get("/",specialtyController.getAllSpecialty) 
router.get("/:id",specialtyController.getASpecialty) 
router.put("/update/:id",specialtyController.updateSpecialty)
router.delete("/delete/:id",specialtyController.deleteSpecialty)


export const specialtyRoutes = router