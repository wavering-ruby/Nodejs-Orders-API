import express from "express";

import { postOrder, getOrders, getOrderById } from "../controllers/orderController.js";

const router = express.Router();

router.post("/", postOrder);
router.get("/list", getOrders);
router.get("/:order_id", getOrderById);

export default router;