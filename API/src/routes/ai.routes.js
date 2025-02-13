import { Router } from "express";
import { reviewCode } from "../controllers/ai.controller.js";

const router = Router();

router.route("/").post(reviewCode);

export default router;