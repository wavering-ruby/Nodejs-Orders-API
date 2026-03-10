# Node.js API

This repository is part of a technical challenge to build an API using Node.js.  
The API allows requests to read, write, and create data in a PostgreSQL database.

This project uses Node.js and PostgreSQL.  All endpoints are documented in a Postman collection.

> [!NOTE]
>  This project was developed on Ubuntu Linux and versioned using Git.
> 
## Table of Contents
- [Installation](#installation)
- [API Documentation](./docs/api-documentation.md)
- [PostgreSQL Scripts](./database/schema.sql)
- [Running the API](#running-the-api)

## Installation
> [!IMPORTANT]
> If you already know how to install the technologies and dependecies, please ignore the text below and jump to the next topic.

<details>
<summary>
    Installation Guide
</summary>
Follow the steps below to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/wavering-ruby/Nodejs-Orders-API.git
cd <folder_name>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root of the project.

Example configuration:

```env
# POSTGRESQL
POSTGRESQL_HOST=localhost
POSTGRESQL_PORT=5432
POSTGRESQL_USER=order_api
POSTGRESQL_PASSWORD=your_password
POSTGRESQL_DATABASE=orders

# BACKEND
BACKEND_PORT=3000
```

### 4. Start the server

```bash
npm start
```

The API will be available at:

```url
http://localhost:3000
```

### 5. Test the API

You can test all endpoints using the Postman collection available in: [Postman-JSON](./postman/Node.js%20API.postman_collection.json).

</details>

## Running the API

Start the server using:

```bash
npm start
```

For development mode with automatic reload:

```bash
npm run dev
```

The API will be available at:

```
http://localhost:3000
```
