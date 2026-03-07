import { pool } from "../database.js";

export async function insertOrder(orderId, value, creationDate){
    await pool.query(
        `INSERT INTO orders (orderId, value, creationDate) VALUES ($1, $2, $3);`,
        [orderId, value, creationDate]
    );
}

export async function insertItem(orderId, productId, quantity, price){
    await pool.query(
        `INSERT INTO items (orderId, productId, quantity, price) VALUES ($1,$2,$3,$4);`,
        [orderId, productId, quantity, price]
    );
}

export async function getOrders(){
    const result = await pool.query("SELECT * FROM orders;");

    return result.rows;
}

export async function getOrderById(id){
    const result = await pool.query(
        "SELECT * FROM orders WHERE orderId = $1;",
        [id]
    );

    return result.rows;
}