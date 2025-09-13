import { TrashIcon } from "@heroicons/react/24/solid";

export default function ElectricalCard({ product, onDelete, theme }) {
  // Find the cheapest website price
  const cheapest = product.websites?.reduce(
    (min, w) => (parseFloat(w.price) < min.price ? { ...w } : min),
    { price: Infinity }
  );

  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-[90%] p-4 rounded-xl shadow-md
        ${theme === "dark" ? "bg-gray-700 text-white" : theme === "colorful" ? "bg-yellow-200 text-blue-900" : "bg-white text-gray-800"}
      `}
    >
      <div className="flex-1 flex flex-col gap-1">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="font-medium">Base Price: ₹{product.price}</p>

        {product.websites?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {product.websites.map((w, i) => {
              const isCheapest =
                cheapest && parseFloat(w.price) === parseFloat(cheapest.price);
              return (
                <span
                  key={i}
                  className={`px-2 py-1 rounded-md text-sm font-medium ${
                    isCheapest
                      ? "bg-green-500 text-white"
                      : theme === "dark"
                        ? "bg-gray-600 text-white"
                        : theme === "colorful"
                          ? "bg-pink-400 text-white"
                          : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {w.name}: ₹{w.price}
                </span>
              );
            })}
          </div>
        )}
      </div>

      <TrashIcon
        className="w-6 h-6 text-red-500 cursor-pointer mt-2 md:mt-0"
        onClick={() => onDelete(product.id)}
      />
    </div>
  );
}
