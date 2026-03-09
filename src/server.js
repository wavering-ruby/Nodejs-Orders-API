import dotenv from "dotenv";
// dotend NEEDS to be before any code to inject all the variables
dotenv.config();

import express from "express";
import { pool } from "./database.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
const PORT = process.env.BACKEND_PORT;

app.use(express.json());

// Testing if the backend is running
app.get("/", (req, res) => {
    res.send("Backend online and running!");
});

app.use("/order", orderRoutes);

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});
