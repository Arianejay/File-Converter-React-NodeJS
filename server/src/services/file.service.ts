//  @ts-nocheck
import libre from "libreoffice-convert";

libre.convertAsync = require("util").promisify(libre.convert);

import logger from "../globals/logger";
import settings from "../settings";

class FileService {
    #fs = require("fs").promises;
    #path = require("path");

    /**
     * @description
     * Logic business for converting our files using libreoffice-convert
     * @param {{file}} file
     */
    async convertFile(file: any) {
        logger.info(
            `Converting file ${file.filename}: ${file.originalname}...`
        );
        const ext = ".pdf";
        const inputPath = await file.path;
        const outputPath = this.#path.join(
            settings.PDF_DIR,
            file.filename + ext
        );

        const docxBuf = await this.#fs.readFile(inputPath);

        // Convert it to pdf format with undefined filter (see Libreoffice docs about filter)
        let pdfBuf = await libre.convertAsync(docxBuf, ext, undefined);

        await this.#fs.writeFile(outputPath, pdfBuf);

        logger.info(`${file.originalname} successfully converted to pdf!`);

        return pdfBuf;
    }
}

export default new FileService();
