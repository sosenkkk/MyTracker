import ProductForm from "../components/Health/ProductForm";
import ProductList from "../components/Health/ProductList";
import { useState, useEffect } from "react";
import { saveProducts, getProducts } from "../utils/localStorage";

export default function HealthDashboard({ theme }) {
  const [products, setProducts] = useState(getProducts("health") || []);

  useEffect(() => {
    saveProducts(products, "health");
  }, [products]);

  const handleAdd = (product) => setProducts([product, ...products]);
  const handleDelete = (id) => setProducts(products.filter((p) => p.id !== id));

  return (
    <div className={`min-h-screen p-6`}>
      <ProductForm onAdd={handleAdd} theme={theme} />
      <ProductList products={products} onDelete={handleDelete} theme={theme} />
    </div>
  );
}
