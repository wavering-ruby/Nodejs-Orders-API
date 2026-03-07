import * as orderService from "../services/orderService.js";

export async function postOrder(req, res){
    try {
        const data = req.body;

        await orderService.postOrder(data);

        res.status(201).json({ message: "Order created!"});
    } catch(error) {
        console.error(error);

        if(error.code === "23505"){ // Code of Postgre to duplicated register
            return res.status(409).json({
                message: "Order already registered!"
            });
        }

        res.status(500).json({
            message: "Error creating order!"
        });
    }
    
}

export async function getOrders(req, res){
    try {
        const orders = await orderService.getOrders();
        
        res.json(orders);
    } catch(error) {
        console.error(error);

        res.status(500).json({
            message: "Error fetching order!"
        });
    }

} 

export async function getOrderById(req, res){
    try {
        const { order_id } = req.params;

        const order = await orderService.getOrderById(order_id);

        if(!order || order.length === 0){
            return res.status(404).json({
                message: "Order not found!"
            });
        }

        res.json(order);
    } catch(error) {
        console.error(error);

        res.status(500).json({
            message: "Error fetching order!"
        })
    }   
}

export async function putOrder(req, res){
    try {
        const { order_id } = req.params;
        const body = req.body;

        await orderService.putOrders({
            ...body,
            numeroPedido: order_id
        });

        res.status(200).send("Order updated!");
    } catch(error) {
        console.error(error);

        res.status(500).send("Error updating the order!");
    }

}

export async function deleteOrder(req, res){
    try {
        const { order_id } = req.params;
        
        await orderService.deleteOrder(order_id);

        res.status(200).send("Order deleted!");
    } catch(error) {
        console.error(error);
        
        res.status(500).send("Error deleting the order!");
    }
}