import ProductCard from "./ProductCard";

export default function ProductList({ products, onDelete, theme }) {
  if (!products.length)
    return (
      <p className="p-6 text-center text-gray-500">No products added yet.</p>
    );

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="flex flex-col items-center max-w-[90%] mx-auto gap-4 mt-6">
      {categories.map((cat) => {
        const catProducts = products.filter((p) => p.category === cat);
        return (
          <div key={cat} className="w-full">
            <h2 className="text-2xl font-bold  mb-4 border-b pb-2">{cat}</h2>
            <div className="flex flex-col space-y-6">
              {catProducts.map((product) => (
                <ProductCard
                  theme={theme}
                  key={product.id}
                  product={product}
                  onDelete={() => onDelete(product.id)}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
