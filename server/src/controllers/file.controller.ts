import { Request, Response, NextFunction } from "express";

import logger from "../globals/logger";
import FileService from "../services/file.service";

/**
 * @desccription
 *  File convert function controller
 */
export const ConvertFile = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const files = req.files as any;

        if (!files) throw new Error("Error, no files uploaded!");

        await files.forEach((file: any) => {
            FileService.convertFile(file)
                .then((data: Buffer) => {
                    return res.status(200).json(data);
                })
                .catch((err: Error) => {
                    logger.error(err);
                    return res.status(500).json(err);
                });
        });
    } catch (error) {
        logger.error(error);
        next(error);
    }
};
