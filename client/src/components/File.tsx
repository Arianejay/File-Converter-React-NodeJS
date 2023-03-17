import React from "react";
import { BsFiletypeTxt, BsFileEarmarkWord } from "react-icons/bs";

import { Ifile } from "../types/IFile";

const File: React.FC = ({ file }: any) => {
    // CSS inline style property
    const styles: { [key: string]: React.CSSProperties } = {
        container: {
            overflowY: file && file.length > 3 && "scroll",
        },
    } as const;

    const fileType = { txt: "text/plain" };

    return (
        <div className="file__container" style={styles.container}>
            {file &&
                file.map((item: Ifile, idx: number) => (
                    <div className="file__box" key={idx}>
                        {item.type === fileType.txt ? (
                            <BsFiletypeTxt style={{ color: "#65647C" }} />
                        ) : (
                            <BsFileEarmarkWord style={{ color: "#0D4C92" }} />
                        )}
                        <p>{item.name}</p>
                    </div>
                ))}
        </div>
    );
};

export default File;
