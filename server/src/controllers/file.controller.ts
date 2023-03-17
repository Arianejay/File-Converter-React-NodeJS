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
        const files = req.files as any;
        let bufferArr: Buffer[] = [];

        if (!files) throw new Error("Error, no files uploaded!");

        await files.forEach((file: any) => {
            FileService.convertFile(file)
                .then((data: Buffer) => {
                    bufferArr.push(data);
                    console.log(data);
                })
                .catch((err: Error) => {
                    logger.error(err);
                    return res.status(500).json(err);
                });
        });
        return res.status(200).json("Successfully converted the files.");
    } catch (error) {
        logger.error(error);
        next(error);
    }
};
