import express from "express";
import { createMessageService } from "../services/messageService.js";

const router = express.Router()


router.post("/send", createMessageService);

export default router;