import React from "react";
import FileUpload from "../components/FileUpload";

const Home: React.FC = () => {
    return (
        <div className="home__container">
            <div className="home__header">
                <h1>PDF Converter</h1>
                <p>Convert your files to pdf.</p>
            </div>
            <div className="home__body">
                <FileUpload />
            </div>
            <div className="home__footer"></div>
        </div>
    );
};

export default Home;
