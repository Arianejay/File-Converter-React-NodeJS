import { Request, Response, NextFunction } from "express";

import logger from "../globals/logger";
import FileService from "../services/file.service";

/**
 * @description
 *  File convert function controller
 */
export const ConvertFile = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const files = req.files as Array<object | File>;

        if (!files) throw new Error("Error, no files uploaded!");

        const fileData = await FileService.convertFile(files);

        return res.status(200).json(fileData as Array<File | object>);
    } catch (error) {
        logger.error(error);
        next(error);
    }
};
