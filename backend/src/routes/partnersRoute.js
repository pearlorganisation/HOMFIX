import express from "express";

import fileParser from "../middlewares/fileParser.js";
import {
  createPartner,
  deletePartner,
  getAllPartners,
  getSinglePartner,
  updatePartner,
} from "../controllers/partnerController.js";

const router = express.Router();

router.route("/").get(getAllPartners).post(fileParser, createPartner);
router
  .route("/:id")
  .delete(deletePartner)
  .get(getSinglePartner)
  .patch(fileParser, updatePartner);

export default router;
