import { useEffect, useState } from "react";
import { getProducts } from "../api/client";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "12px",
        padding: "16px",
        background: "var(--bg-color)",
        minHeight: "100vh",
      }}
    >
      {products.map((p: any) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}