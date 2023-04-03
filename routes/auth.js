import express from "express";
import { login } from "../controllers/auth.js";

import { addVolunteer } from "../controllers/auth.js";


const router = express.Router();
router.post("/login",login);
router.post("/volunteer",addVolunteer);

export default router;
