import { Router } from "express";
import { upload } from "../utils/upload";
import prisma from "../prisma";

const router = Router();

/**
 * Upload product (Shopify-style)
 */
router.post("/product", upload.single("image"), async (req, res) => {
  try {
    const { name, price } = req.body;

    const imagePath = req.file
      ? `/uploads/${req.file.filename}`
      : "";

    const product = await prisma.product.create({
      data: {
        name,
        price: Number(price),
        image: imagePath,
        description: ""
      }
    });

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Upload failed" });
  }
});

export default router;