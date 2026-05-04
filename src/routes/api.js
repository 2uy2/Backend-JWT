import express from "express";
import userController from "../controller/userController.js";
import apiController from "../controller/apiController.js";
const router = express.Router();
const initAPIRoutes = (app) => {

    router.get("/test-api", apiController.testApi)
    router.post("/register", apiController.handleRegister);
    router.post("/login", apiController.handleLogin);
    router.get("/user/read", userController.readFunc);
    router.post("/user/create", userController.createFunc);
    router.put("/user/update", userController.updateFunc);
    router.delete("/user/delete", userController.deleteFunc);


    return app.use("/api/v1/", router);
}

export default initAPIRoutes;