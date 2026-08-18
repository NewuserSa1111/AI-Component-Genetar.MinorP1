import express from "express";

import { generateComponent } from "../controllers/aiController.js";

const router = express.Router();

router.post("/generate", generateComponent);

export default router;