import express from "express";
import configViewEngine from "./config/viewEngine.js";
import initWebRoutes from "./routes/web.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
// import connection from "./config/connectDB.js";

// Nạp biến môi trường ngay lập tức
dotenv.config();

const app = express();


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

// Dự phòng (fallback) nếu file .env lỗi thì dùng port 8081
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`>> JWT BACKEND is running on the PORT = ${PORT}`);
});