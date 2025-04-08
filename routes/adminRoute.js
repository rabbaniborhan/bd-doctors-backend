import express from "express";
import {
  addDoctor,
  allDoctors,
  loginAdmin,
} from "../controllers/adminController.js";
import { changeAvailability } from "../controllers/doctorController.js";
import authAdmin from "./../middlewares/authAdmin.js";

const adminRoute = express.Router();

adminRoute.post("/add-doctor", authAdmin, addDoctor);
adminRoute.post("/login", loginAdmin);
adminRoute.get("/all-doctors", authAdmin, allDoctors);
adminRoute.patch("/availability-change", authAdmin, changeAvailability);

export default adminRoute;
