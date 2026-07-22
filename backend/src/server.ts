import productRoutes from "./routes/product.routes.js";
import adminRoutes from "./routes/admin.routes";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/uploads", express.static("public/uploads"));

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Shigosag API Running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Shigosag API Online");
});
