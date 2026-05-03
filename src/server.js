import express from "express";
import configViewEngine from "./config/viewEngine.js";
import initWebRoutes from "./routes/web.js";
import initAPIRoutes from "./routes/api.js"
import dotenv from "dotenv";
import bodyParser from "body-parser";
import configCORS from './config/CORS.js'
// import connection from "./config/connectDB.js";

// Nạp biến môi trường ngay lập tức
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

//confifg CORDS
configCORS(app)

// Cấu hình view engine
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//test connection DB
// connection();

// Khởi tạo routes
initWebRoutes(app);
initAPIRoutes(app)
// Dự phòng (fallback) nếu file .env lỗi thì dùng port 8081


app.listen(PORT, () => {
    console.log(`>> JWT BACKEND is running on the PORT = ${PORT}`);
});