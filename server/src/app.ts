import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";

import logger from "./globals/logger";
import cfg from "./globals/config";

import FileRoute from "./routes/file.route";

const PORT = cfg.port;

class App extends http.Server {
    public app: express.Application;

    constructor() {
        const app: express.Application = express();
        super(app);
        this.app = app;
    }

    /**
     * @desccription
     *  Our routes for our API endpoints
     */
    private setRouter() {
        this.app.use("/file", FileRoute);
    }

    /**
     * @description
     *  Middlewares for our app
     */
    private setMiddleware() {
        this.app.use(cors());
        this.app.use(cookieParser());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.setRouter();
    }

    /**
     * @description
     *  Initializes our app
     */
    async start() {
        this.setMiddleware();
        this.app.set("port", PORT);
        return this.app.listen(this.app.get("port"), () => {
            logger.info(
                `Server is running on: http://localhost:${this.app.get("port")}`
            );
        });
    }
}

export default App;
