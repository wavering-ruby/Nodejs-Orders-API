import express from "express";

import { postOrder, getOrders, getOrderById, putOrder, deleteOrder } from "../controllers/orderController.js";

const router = express.Router();

router.post("/", postOrder);
router.get("/list", getOrders);
router.get("/:order_id", getOrderById);
router.put("/:order_id", putOrder);
router.delete("/:order_id", deleteOrder);

export default router;