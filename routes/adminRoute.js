import express from "express";
import { addDoctor, loginAdmin } from "../controllers/adminController.js";
import authAdmin from "./../middlewares/authAdmin.js";

const adminRoute = express.Router();

adminRoute.post("/add-doctor", authAdmin, addDoctor);
adminRoute.post("/login", loginAdmin);
export default adminRoute;
