import { useState } from "react";
import axios from "axios";

export default function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    if (image) formData.append("image", image);

    await axios.post("http://localhost:5000/api/admin/product", formData);

    alert("Product added!");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">🛠 Admin Panel</h1>

      <input
        placeholder="Product Name"
        className="w-full p-2 border mb-2"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Price"
        className="w-full p-2 border mb-2"
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="file"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        className="mb-2"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-red-500 text-white py-2"
      >
        Upload Product
      </button>
    </div>
  );
}