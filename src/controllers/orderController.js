import * as orderService from "../services/orderService.js";

export async function postOrder(req, res){
    const data = req.body;

    await orderService.postOrder(data);

    res.status(201).json({ message: "Order criada!"});
}

export async function getOrders(req, res){
    const orders = await orderService.getOrders();

    res.json(orders);
} 

export async function getOrderById(req, res){
    const { order_id } = req.params;

    const order = await orderService.getOrderById(order_id);

    res.json(order);
}