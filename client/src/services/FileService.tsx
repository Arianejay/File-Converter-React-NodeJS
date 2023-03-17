import { DragEvent } from "react";

import { axiosInstance } from "./config";

class FileService {
    /**
     * @description
     * Handler for the upload function.
     * @param {{file: Array<object>}} file
     */
    async handleUpload(files: Array<object>) {
        const data = new FormData();
        files.forEach((file: object | any) => data.append("file", file));

        try {
            const res = await axiosInstance.post("/file/convert", data);
            return Promise.resolve(res.data.data);
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
