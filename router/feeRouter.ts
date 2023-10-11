import { Router } from "express";
import { createFeeRecord, viewFeeRecord } from "../controller/feeController";

const feeRouter = Router();

feeRouter.route("/create-fee-record").post(createFeeRecord)
feeRouter.route("/view-fee-record").post(viewFeeRecord)

export default feeRouter