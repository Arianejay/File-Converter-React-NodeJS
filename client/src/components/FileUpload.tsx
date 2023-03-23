import React, { useState, DragEvent, MouseEvent } from "react";
import { BsCloudUploadFill } from "react-icons/bs";

import FileService from "../services/FileService";
import File from "./File";

const FileUpload: React.FC<{}> = ({}) => {
    const [file, setFile] = useState<File | {}>({});
    const [fileConverted, setFileConverted] = useState<Array<object>>([]);
    const [progress, setProgress] = useState<number>(0);

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const selectedFile = e.dataTransfer.files;
        setFile(selectedFile);
    };

    const handleUpload = async (e: MouseEvent<HTMLButtonElement>) => {
        await FileService.handleUpload(Object.values(file))
            .then((newBlobDataArray) => {
                setFileConverted(newBlobDataArray);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className="fileupload__container">
                <div className="fileupload__dropzone">
                    <div
                        className="dropzone__box"
                        onDragEnter={FileService.handleDrag}
                        onDragLeave={FileService.handleDrag}
                        onDragOver={FileService.handleDrag}
                        onDrop={handleDrop}
                    >
                        <input
                            id="file-upload"
                            type="file"
                            multiple
                            accept="application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, txt/plain"
                            onChange={(e) => setFile(e.target.files || {})}
                        />
                        <label htmlFor="file-upload">
                            <BsCloudUploadFill />
                            <div>
                                <p>Drag & Drop to Upload File</p>
                                <p>or</p>
                                <p className="select-file">Select File</p>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="fileupload__types">
                    <p>Accepted File Types: .docx, .doc, .txt</p>
                </div>
                <div className="fileupload__button">
                    {Object.keys(file).length !== 0 && (
                        <>
                            <button onClick={handleUpload}>Upload</button>
                            <button onClick={() => setFile({})}>Cancel</button>
                        </>
                    )}
                </div>
            </div>
            <File file={Object.values(file)} fileConverted={fileConverted} />
        </>
    );
};

export default FileUpload;
