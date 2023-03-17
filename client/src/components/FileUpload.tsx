import React, {
    useState,
    DragEvent,
    MouseEvent,
    ChangeEvent,
    useRef,
} from "react";
import { BsCloudUploadFill } from "react-icons/bs";

import File from "./File";

const FileUpload: React.FC<{}> = ({}) => {
    const [file, setFile] = useState<File | {}>({});

    const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const selectedFile = e.dataTransfer.files;
        setFile(selectedFile);
    };

    const handleClear = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setFile({});
    };

    return (
        <>
            <div className="fileupload__container">
                <div className="fileupload__dropzone">
                    <div
                        className="dropzone__box"
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
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
                    <button>Upload</button>
                    {Object.keys(file).length !== 0 && (
                        <button onClick={handleClear}>Cancel</button>
                    )}
                </div>
            </div>
            <File file={Object.values(file)} />
        </>
    );
};

export default FileUpload;
