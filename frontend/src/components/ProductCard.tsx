import { useCartStore } from "../store/cartStore";

export default function ProductCard({ product }: any) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div
      style={{
        background: "var(--bg-color)",
        padding: "12px",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >

      <img
        src={product.image || "/images/fallback.jpg"}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />

      <h3 className="mt-2 font-bold text-rose-500">
        {product.name}
      </h3>

      <p className="text-sm text-gray-600">
        ₦{product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-2 w-full bg-rose-500 text-white py-1 rounded hover:bg-rose-600"
      >
        Add to Cart
      </button>

    </div>
  );
}