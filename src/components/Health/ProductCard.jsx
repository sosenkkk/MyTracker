import { TrashIcon } from "@heroicons/react/24/solid";

export default function ProductCard({ product, onDelete, theme }) {
  const lowestPrice = Math.min(...product.websites.map((w) => w.price));

  return (
    <div className={` p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 relative   ${theme === "dark" ? "bg-gray-700 text-white" : theme === "colorful" ? "bg-yellow-200 text-blue-900" : "bg-white text-gray-800"}`}>
      <h2 className="text-lg font-bold mb-1">{product.name}</h2>
      <p className=" mb-2">
        Protein:{" "}
        <span className="font-semibold">
          {product.totalProtein} {product.unit}
        </span>
        (
        <span className="text-blue-600 font-semibold">
          {product.proteinPer100} per 100{product.unit}
        </span>
        )
      </p>
      <p className=" mb-2">
        Calories:{" "}
        <span className="font-semibold">
          {product.totalCalories} {product.unit}
        </span>
        (
        <span className="text-yellow-600 font-semibold">
          {product.caloriesPer100} per 100{product.unit}
        </span>
        )
      </p>

      <ul className="space-y-1 mb-3">
        {product.websites.map((w, i) => {
          const isLowest = w.price === lowestPrice;

          // Theme-based background
          let websiteBg = "bg-gray-50"; // light default
          let websiteText = "text-gray-800";

          if (theme === "dark") {
            websiteBg = "bg-gray-800";
            websiteText = "text-white";
          } else if (theme === "colorful") {
            websiteBg = "bg-yellow-100";
            websiteText = "text-blue-900";
          }

          return (
            <li
              key={i}
              className={`flex justify-between p-2 rounded-lg ${websiteBg}`}
            >
              <span className={websiteText}>{w.name}</span>
              <span
                className={isLowest ? "font-bold text-green-500" : websiteText}
              >
                ₹{w.price}
              </span>
            </li>
          );
        })}
      </ul>

      <button
        onClick={onDelete}
        className="absolute top-3 right-3 text-red-600 hover:text-red-800 font-bold"
      >
        <TrashIcon className="w-6 h-6 text-red-500 cursor-pointer mt-2 md:mt-0" />
      </button>
    </div>
  );
}
