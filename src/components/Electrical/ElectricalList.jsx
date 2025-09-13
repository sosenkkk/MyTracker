import ElectricalCard from "./ElectricalCard";

export default function ElectricalList({ products, onDelete, theme }) {
  if (!products.length)
    return <p className="text-center mt-6">No appliances added yet.</p>;

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      {products.map((product) => (
        <ElectricalCard
          key={product.id}
          product={product}
          onDelete={onDelete}
          theme={theme}
        />
      ))}
    </div>
  );
}
