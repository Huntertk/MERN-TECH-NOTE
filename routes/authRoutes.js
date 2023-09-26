import { Router } from "express";
import { 
    validateLoginUser, 
    validateRegisterUser 
} from "../middlewares/validateUserMiddleware.js";
import { userLogin, userRegister } from "../controllers/authController.js";


const router = Router()

router.post("/register", validateRegisterUser,userRegister)
router.post("/login", validateLoginUser,userLogin)


export default router