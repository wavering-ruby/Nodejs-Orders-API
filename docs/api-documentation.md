# API Documentation

This API provides endpoints to manage orders and their associated items.  
It supports creating, retrieving, updating, listing, and deleting orders stored in a PostgreSQL database.

Base URL: http://localhost:3000

---

# Endpoints

## Backend Health Check

Checks whether the backend service is running.

### Endpoint

> GET /

### Description

Returns a simple response to verify that the backend server is online.

---

# Create Order

Creates a new order with associated items.

### Endpoint

> POST /order

### Headers

Content-Type: application/json

### Request Body

```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
```

### Fields

| Field | Type | Description |
|------|------|-------------|
| numeroPedido | string | Unique order identifier |
| valorTotal | number | Total value of the order |
| dataCriacao | datetime | Order creation timestamp |
| items | array | List of items included in the order |

Item object:

| Field | Type | Description |
|------|------|-------------|
| idItem | string | Item identifier |
| quantidadeItem | number | Quantity of the item |
| valorItem | number | Item value |

### Responses

201 – Created

```json
{
  "message": "Order created!"
}
```

409 – Conflict

```json
{
  "message": "Order already registered!"
}
```

500 – Internal Server Error

```json
{
  "message": "Error creating order!"
}
```

---

# Update Order

Updates an existing order and its items.

### Endpoint

> PUT /order/{order_id}

### Path Parameters

| Parameter | Type | Description |
|----------|------|-------------|
| order_id | string | Unique identifier of the order |

### Headers

Content-Type: application/json

### Request Body

```json
{
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 5,
      "valorItem": 1000
    }
  ]
}
```

### Responses

200 – OK

```
Order updated!
```

500 – Internal Server Error

```
Error updating the order!
```

---

# Get Order by ID

Retrieves a specific order using its unique identifier.

### Endpoint

> GET /order/{order_id}

### Path Parameters

| Parameter | Type | Description |
|----------|------|-------------|
| order_id | string | Unique identifier of the order |

### Responses

200 – OK

```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
```

404 – Not Found

```json
{
  "message": "Order not found!"
}
```

500 – Internal Server Error

```json
{
  "message": "Error fetching order!"
}
```

---

# List Orders

Returns all orders stored in the database.

### Endpoint

> GET /order/list

### Responses

200 – OK

```json
[
  {
    "numeroPedido": "v10089015vdb-01",
    "valorTotal": 10000,
    "dataCriacao": "2023-07-19T12:24:11.5299601+00:00"
  }
]
```

500 – Internal Server Error

```json
{
  "message": "Error fetching order!"
}
```

---

# Delete Order

Deletes an order and all associated items from the database.

### Endpoint

> DELETE /order/{order_id}

### Path Parameters

| Parameter | Type | Description |
|----------|------|-------------|
| order_id | string | Unique identifier of the order |

### Responses

200 – OK

```
Order deleted!
```

500 – Internal Server Error

```
Error deleting the order!
```

---

# Testing the API

All endpoints can be tested using the Postman collection included in the repository. 

You can find the Postman documentation [here](../postman/Node.js%20API.postman_collection.json).