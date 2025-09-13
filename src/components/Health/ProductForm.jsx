import { useState, useEffect } from "react";
import { CATEGORIES } from "../../utils/categories";
import { XMarkIcon, PlusIcon } from "@heroicons/react/24/solid";

export default function ProductForm({ onAdd, theme }) {
  const [name, setName] = useState("");
  const [totalProtein, setTotalProtein] = useState("");
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState("g");
  const [category, setCategory] = useState("WHEY");
  const [totalCalories, setTotalCalories] = useState("");
  const [websites, setWebsites] = useState([{ name: "", price: "" }]);
  const [isValid, setIsValid] = useState(false);

  // Validate form whenever inputs change
  useEffect(() => {
    const hasName = name.trim() !== "";
    const hasProtein = totalProtein && parseFloat(totalProtein) > 0;
    const hasAmount = amount && parseFloat(amount) > 0;
    const hasCategory = category.trim() !== "";
    const allWebsitesFilled = websites.every(
      (w) => w.name.trim() !== "" && w.price && parseFloat(w.price) > 0
    );

    setIsValid(
      hasName && hasProtein && hasAmount && hasCategory && allWebsitesFilled
    );
  }, [name, totalProtein, amount, category, websites]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    const proteinPer100 = (parseFloat(totalProtein) / parseFloat(amount)) * 100;
    const caloriesPer100 =
      (parseFloat(totalCalories) / parseFloat(amount)) * 100;
    onAdd({
      id: Date.now(),
      name,
      amount: parseFloat(amount),
      unit,
      category,
      totalProtein: parseFloat(totalProtein),
      proteinPer100: parseFloat(proteinPer100.toFixed(2)),
      totalCalories: parseFloat(totalCalories),
      caloriesPer100: parseFloat(caloriesPer100.toFixed(2)),
      websites: websites.map((w) => ({
        name: w.name,
        price: parseFloat(w.price),
      })),
    });

    // Reset form
    setName("");
    setTotalProtein("");
    setTotalCalories("");
    setAmount("");
    setUnit("g");
    setCategory("WHEY");
    setWebsites([{ name: "", price: "" }]);
  };

  const handleWebsiteChange = (index, field, value) => {
    const updated = [...websites];
    updated[index][field] = value;
    setWebsites(updated);
  };
  return (
    <form
      className={`p-6  rounded-xl shadow-lg space-y-4  max-w-6xl mx-auto ${theme === "dark" ? "bg-gray-900" : theme === "colorful" ? "bg-yellow-200" : "bg-white"}`}
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold ">Add New Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={`w-full p-2 border border-gray-500  rounded-lg focus:outline-none focus:ring-1
                  ${theme === "dark" ? "bg-gray-700 text-white placeholder-gray-400" : theme === "colorful" ? "bg-yellow-100 text-blue-900 placeholder-blue-700" : "bg-white text-gray-800 placeholder-gray-500"}
                `}
      />

      <div className="flex gap-3">
        <input
          type="number"
          placeholder="Total Protein"
          value={totalProtein}
          onChange={(e) => setTotalProtein(e.target.value)}
          className={`flex-1 p-2 border border-gray-500  rounded-lg focus:outline-none focus:ring-1
                  ${theme === "dark" ? "bg-gray-700 text-white placeholder-gray-400" : theme === "colorful" ? "bg-yellow-100 text-blue-900 placeholder-blue-700" : "bg-white text-gray-800 placeholder-gray-500"}
                `}
        />
        <input
          type="number"
          placeholder="Total Calories"
          value={totalCalories}
          onChange={(e) => setTotalCalories(e.target.value)}
          className={`flex-1 p-2 border border-gray-500  rounded-lg focus:outline-none focus:ring-1
                  ${theme === "dark" ? "bg-gray-700 text-white placeholder-gray-400" : theme === "colorful" ? "bg-yellow-100 text-blue-900 placeholder-blue-700" : "bg-white text-gray-800 placeholder-gray-500"}
                `}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={`flex-1 p-2 border border-gray-500  rounded-lg focus:outline-none focus:ring-1
                  ${theme === "dark" ? "bg-gray-700 text-white placeholder-gray-400" : theme === "colorful" ? "bg-yellow-100 text-blue-900 placeholder-blue-700" : "bg-white text-gray-800 placeholder-gray-500"}
                `}
        />
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className={`flex-1 p-2 border border-gray-500  rounded-lg focus:outline-none focus:ring-1
                  ${theme === "dark" ? "bg-gray-700 text-white placeholder-gray-400" : theme === "colorful" ? "bg-yellow-100 text-blue-900 placeholder-blue-700" : "bg-white text-gray-800 placeholder-gray-500"}
                `}
        >
          <option value="g">g</option>
          <option value="ml">ml</option>
        </select>
      </div>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={`w-full p-2 border border-gray-500  rounded-lg focus:outline-none focus:ring-1
                  ${theme === "dark" ? "bg-gray-700 text-white placeholder-gray-400" : theme === "colorful" ? "bg-yellow-100 text-blue-900 placeholder-blue-700" : "bg-white text-gray-800 placeholder-gray-500"}
                `}
      >
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div className="flex flex-col gap-2">
        {websites.map((website, i) => (
          <div key={i} className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Website Name"
              value={website.name}
              onChange={(e) => handleWebsiteChange(i, "name", e.target.value)}
              className={`flex-1 p-2 border border-gray-500  rounded-lg focus:outline-none focus:ring-1
          ${theme === "dark" ? "bg-gray-700 text-white placeholder-gray-400" : theme === "colorful" ? "bg-yellow-100 text-blue-900 placeholder-blue-700" : "bg-white text-gray-800 placeholder-gray-500"}
        `}
            />
            <input
              type="number"
              placeholder="Price"
              value={website.price}
              onChange={(e) => handleWebsiteChange(i, "price", e.target.value)}
              className={`flex-1 p-2 border border-gray-500  rounded-lg focus:outline-none focus:ring-1
          ${theme === "dark" ? "bg-gray-700 text-white placeholder-gray-400" : theme === "colorful" ? "bg-yellow-100 text-blue-900 placeholder-blue-700" : "bg-white text-gray-800 placeholder-gray-500"}
        `}
            />
            {i > 0 && (
              <XMarkIcon
                className="w-6 h-6 text-red-500 cursor-pointer"
                onClick={() =>
                  setWebsites(websites.filter((_, idx) => idx !== i))
                }
              />
            )}
          </div>
        ))}
        <button
          type="button"
          className="flex items-center gap-1 text-blue-600 hover:underline mt-1"
          onClick={() => setWebsites([...websites, { name: "", price: "" }])}
        >
          <PlusIcon className="w-5 h-5" /> Add Website
        </button>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={!isValid}
          className={`px-6 w-full py-2 rounded-lg font-semibold ${
            isValid
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          Add Product
        </button>
      </div>
    </form>
  );
}
