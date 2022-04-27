import express from "express";
import { register, authUser } from "../controllers/userControllers.js"

const router = express.Router()


router.route("/").post(register)
router.post("/login",authUser)

export default router