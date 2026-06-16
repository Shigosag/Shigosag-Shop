import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const products = [
    { name: "Nike Air Max", image: "/images/nike.jpg" },
    { name: "Adidas Runner", image: "/images/adidas.jpg" },
    { name: "Puma Sport", image: "/images/puma.jpg" },
    { name: "Apple Watch", image: "/images/apple-watch.jpg" },
    { name: "Samsung Watch", image: "/images/samsung-watch.jpg" },
    { name: "Wireless Headset", image: "/images/headset.jpg" },
    { name: "Bluetooth Speaker", image: "/images/speaker.jpg" },
    { name: "Gaming Mouse", image: "/images/mouse.jpg" },
    { name: "Keyboard", image: "/images/keyboard.jpg" },
    { name: "Power Bank", image: "/images/powerbank.jpg" },
    { name: "Laptop Bag", image: "/images/bag.jpg" },
    { name: "Smart TV", image: "/images/tv.jpg" },
    { name: "Monitor", image: "/images/monitor.jpg" },
    { name: "Sneakers White", image: "/images/sneakers-white.jpg" },
    { name: "Sneakers Black", image: "/images/sneakers-black.jpg" },
    { name: "Backpack", image: "/images/backpack.jpg" },
    { name: "Sunglasses", image: "/images/sunglasses.jpg" },
    { name: "Cap Hat", image: "/images/cap.jpg" },
    { name: "Desk Lamp", image: "/images/lamp.jpg" },
    { name: "Tablet", image: "/images/tablet.jpg" }
  ];

  for (const product of products) {
    await prisma.product.create({
      data: {
        name: product.name,
        price: Math.floor(Math.random() * 90000) + 5000,
        description: "",
        image: product.image
      }
    });
  }
}

main().finally(() => prisma.$disconnect());