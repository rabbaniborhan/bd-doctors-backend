import express from "express";
import { doctorLists } from "../controllers/doctorController.js";

const doctorRouter = express.Router();

doctorRouter.get("/lists", doctorLists);

export default doctorRouter;
