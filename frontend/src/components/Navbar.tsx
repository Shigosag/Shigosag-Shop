import { useCartStore } from "../store/cartStore";
import { useTheme } from "../theme/ThemeContext";

export default function Navbar({ onCartOpen }: any) {
  const items = useCartStore((state) => state.items);
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "12px",
        background: "var(--bg-color)",
        color: "var(--text-color)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(10px)",
      }}
    >
       {/* LOGO */}
      <h1 className="text-xl font-bold text-rose-500">
        🛒 Shigosag Shop
      </h1>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        
        {/* Toggle Switch */}
        <div
          onClick={toggleTheme}
          style={{
            width: "44px",
            height: "24px",
            borderRadius: "999px",
            background: theme === "dark" ? "#444" : "#ddd",
            position: "relative",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: "#fff",
              position: "absolute",
              top: "2px",
              left: theme === "dark" ? "22px" : "2px",
              transition: "0.3s",
              boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
            }}
          />
        </div>

        
      {/* CART BUTTON */}
      <button
        onClick={onCartOpen}
        className="px-3 py-1 bg-rose-500 text-white rounded-lg"
      >
        Cart ({items.length})
      </button>
      </div>
    </header>
  );
}
