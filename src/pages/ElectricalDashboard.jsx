import { useState, useEffect } from "react";
import ElectricalForm from "../components/Electrical/ElectricalForm";
import ElectricalList from "../components/Electrical/ElectricalList";
import { saveProducts, getProducts } from "../utils/localStorage";

export default function ElectricalDashboard({ theme }) {
  const [products, setProducts] = useState(getProducts("electrical") || []);

  useEffect(() => {
    saveProducts(products, "electrical");
  }, [products]);

  const handleAdd = (product) => setProducts([product, ...products]);
  const handleDelete = (id) => setProducts(products.filter((p) => p.id !== id));

  return (
    <div className="min-h-screen p-6">
      <ElectricalForm onAdd={handleAdd} theme={theme} />
      <ElectricalList
        products={products}
        onDelete={handleDelete}
        theme={theme}
      />
    </div>
  );
}
