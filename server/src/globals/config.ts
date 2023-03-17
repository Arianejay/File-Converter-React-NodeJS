import dotenv from "dotenv";
dotenv.config();

interface ICfg {
    port: number;
    dbURL: string;
    JWTsecretToken: string;
}

const cfg = {} as ICfg;

cfg.port = Number(process.env.PORT) || 3001;
cfg.dbURL = process.env.DB_URL || "";
cfg.JWTsecretToken = process.env.JWT_SECRET_TOKEN || "";

export default cfg;
