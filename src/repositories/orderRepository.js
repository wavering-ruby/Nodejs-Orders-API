import { pool } from "../database.js";

export async function insertOrder(orderId, value, creationDate){
    await pool.query(
        "INSERT INTO orders (orderId, value, creationDate) VALUES ($1, $2, $3);",
        [orderId, value, creationDate]
    );
}

export async function insertItem(orderId, productId, quantity, price){
    await pool.query(
        "INSERT INTO items (orderId, productId, quantity, price) VALUES ($1, $2, $3, $4);",
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

export async function putOrders(id, value, creationDate){ // id because we pass this variable in the endpoint
    await pool.query(
        "UPDATE orders SET value = $2, creationDate = $3 WHERE orderId = $1;",
        [id, value, creationDate]
    )
}

export async function postItem(orderId, productId, quantity, price){
    await pool.query(
        "INSERT INTO items (orderId, productId, quantity, price) VALUES ($1, $2, $3, $4)",
        [orderId, productId, quantity, price]
    )
}

export async function deleteItemsByOrder(orderId){
    await pool.query(
        "DELETE FROM items WHERE orderId = $1",
        [orderId]
    );
}

export async function deleteOrderById(orderId){
    await pool.query(
        "DELETE FROM orders WHERE orderId = $1",
        [orderId]
    )
}