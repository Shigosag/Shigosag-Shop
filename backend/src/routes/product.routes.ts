import { Router } from "express";
import { prisma } from "../config/db.js";

const router = Router();

router.get("/", async (_, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

export default router;