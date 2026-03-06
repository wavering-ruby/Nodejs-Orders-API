import dotenv from "dotenv";
// dotend NEEDS to be before any code to inject all the variables
dotenv.config();

import express from "express";
import { pool } from "./database.js";

const app = express();
const PORT = process.env.BACKEND_PORT;

app.use(express.json());

// Testing if the backend is running
app.get("/", (req, res) => {
    res.send("Backend online and running!");
});

app.post("/order", async (req, res) => {
    const data = req.body;

    // Debug
    //console.log(data);

    const { numeroPedido, valorTotal, dataCriacao, items } = data;

    // Debug
    // console.log(numeroPedido)

    await pool.query(
        `INSERT INTO orders (orderId, value, creationDate) VALUES ($1, $2, $3)`,
        [numeroPedido, valorTotal, dataCriacao]
    )

    // Mapping of items by clonning the req array
    const itemsMapped = items.map(item => [
        numeroPedido,
        item.idItem,
        item.quantidadeItem,
        item.valorItem
    ]);

    for(const element of itemsMapped){
        await pool.query(
            `INSERT INTO items (orderId, productId, quantity, price) VALUES ($1, $2, $3, $4)`,
            element
        );
    }

    const message = "Order created!"

    res.status(201).json({ message: message });
});

app.get(`/order/:order_id`, async (req, res) =>{
    const { order_id } = req.params;

    const result = await pool.query(
        "SELECT * FROM orders WHERE orderId = $1",
        [order_id]
    );

    res.json(result.rows);
});

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});