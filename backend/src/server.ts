import app from "./app.js";
import productRoutes from "./routes/product.routes.js";
import adminRoutes from "./routes/admin.routes";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/uploads", express.static("public/uploads"));

app.use("/api/products", productRoutes);

app.listen(5000, () => {
  console.log("🚀 Shigosag API Running");
});