import { useCartStore } from "../store/cartStore";

export default function CartDrawer({ open, onClose }: any) {
  const { items, removeFromCart } = useCartStore();

  const total = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <div
      className={`fixed right-0 top-0 w-80 h-full bg-white dark:bg-gray-900 shadow p-4 transition-transform ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <h2 className="text-lg font-bold">🧺 Cart</h2>

      {items.map((item) => (
        <div key={item.id} className="flex justify-between mt-2">
          <span>{item.name}</span>
          <button onClick={() => removeFromCart(item.id)}>X</button>
        </div>
      ))}

      <hr className="my-3" />

      <p className="font-bold">Total: ₦{total}</p>

      <button
        onClick={onClose}
        className="mt-4 w-full bg-rose-500 text-white py-2 rounded"
      >
        Close
      </button>
    </div>
  );
}