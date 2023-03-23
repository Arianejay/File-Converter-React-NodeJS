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
     * Converts our buffer to ArrayBuffer
     * @param {Buffer} buffer
     */
    toArrayBuffer(buffer: Buffer) {
        const ab = new ArrayBuffer(buffer.length);
        const view = new Uint8Array(ab);
        for (let i = 0; i < buffer.length; ++i) {
            view[i] = buffer[i];
        }
        return ab;
    }

    /**
     * @description
     * Logic business for converting our files using libreoffice-convert
     * @param {Array<object | File>} files
     */
    async convertFile(files: Array<object | File>) {
        let buffArray = [] as Array<object | File>;
        for (const file of files) {
            logger.info(
                `Converting file ${file.filename}: ${file.originalname}...`
            );
            const ext = ".pdf";
            const inputPath = file.path;
            const outputPath = this.#path.join(
                settings.PDF_DIR,
                file.filename + ext
            );

            const docxBuf = await this.#fs.readFile(inputPath);

            // Convert it to pdf format with undefined filter (see Libreoffice docs about filter)
            let pdfBuf = await libre.convertAsync(docxBuf, ext, undefined);

            await this.#fs.writeFile(outputPath, pdfBuf);

            logger.info(`${file.originalname} successfully converted to pdf!`);

            buffArray.push({
                buffer: this.toArrayBuffer(pdfBuf),
                filename: file.filename,
            });
        }

        return buffArray;
    }
}

export default new FileService();
