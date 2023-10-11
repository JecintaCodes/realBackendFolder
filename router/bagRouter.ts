import { Router } from "express";
import { createBagRecord, viewBagRecord } from "../controller/bagController";

const bagRouter = Router()

const begRouter =Router();
bagRouter.route("/create-all").post(createBagRecord)
bagRouter.route("/view-all").post(viewBagRecord)

export default begRouter;
