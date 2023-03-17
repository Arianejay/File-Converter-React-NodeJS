import express from "express";
import multer from "multer";

import { ConvertFile } from "../controllers/file.controller";
import settings from "../settings";

const router = express.Router();
const upload = multer({ dest: settings.MULTER_DIR });

router.post("/convert", upload.array("file", 5), ConvertFile);

export default router;
