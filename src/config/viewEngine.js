import express from "express";
import path from "path";
import {
    fileURLToPath
} from "url";

// tạo __dirname cho ES Module
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

const ConfigViewEngine = (app) => {
    // static
    app.use(express.static(path.join(__dirname, "../public")));

    // view engine
    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "../views"));
};

export default ConfigViewEngine;