import { DragEvent } from "react";
import { IBufferData } from "../types/IFile";

import { axiosInstance } from "./config";

class FileService {
    /**
     * @description Handler for the upload function.
     * @param {{files: Array<object>;}} files
     */
    async handleUpload(files: Array<object>) {
        const data = new FormData();
        files.forEach((file: object | any) => data.append("file", file));

        try {
            let newBlobDataArray = [] as Array<object>;
            let uploadProgress: number;

            const res = await axiosInstance.post("/file/convert", data, {
                onUploadProgress: (progressEvent) => {
                    uploadProgress =
                        (progressEvent.loaded / (progressEvent.total || 1)) *
                        100;
                },
            });

            const bufferDataArray = res.data;
            console.log(bufferDataArray);

            /**
             * Convert to our buffer data to blob
             */
            // bufferDataArray.forEach((bufferData: IBufferData) => {
            //     bufferData.buffer.data = new Blob([bufferData.buffer.data], {
            //         type: "application/pdf",
            //     });
            //     bufferData.buffer.type = "Blob";
            //     newBlobDataArray.push(bufferData);
            // });

            // return Promise.resolve(newBlobDataArray);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    /**
     * @description
     * Handler for the drag enter, leave, and over.
     * @param {{e: DragEvent<HTMLDivElement>}} e
     */
    handleDrag(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
    }
}

export default new FileService();
