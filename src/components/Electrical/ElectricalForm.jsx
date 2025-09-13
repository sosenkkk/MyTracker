import { useState } from "react";
import { XMarkIcon, PlusIcon } from "@heroicons/react/24/solid";

export default function ElectricalForm({ onAdd, theme }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [websites, setWebsites] = useState([{ name: "", price: "" }]);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {
      name: !name,
      price: !price || parseFloat(price) <= 0,
      websites: websites.some(
        (w) => !w.name || !w.price || parseFloat(w.price) <= 0
      ),
    };
    setErrors(errs);
    return !Object.values(errs).some(Boolean);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onAdd({
      id: Date.now(),
      name,
      price: parseFloat(price),
      websites: websites.map((w) => ({
        name: w.name,
        price: parseFloat(w.price),
      })),
    });

    setName("");
    setPrice("");
    setWebsites([{ name: "", price: "" }]);
  };

  const updateWebsite = (index, field, value) => {
    const newWebsites = [...websites];
    newWebsites[index][field] = value;
    setWebsites(newWebsites);
  };

  const addWebsite = () => setWebsites([...websites, { name: "", price: "" }]);
  const removeWebsite = (index) =>
    setWebsites(websites.filter((_, i) => i !== index));

  return (
    <div
      className={`w-full max-w-6xl mx-auto p-6 rounded-xl shadow-md
        ${theme === "dark" ? "bg-gray-800" : theme === "colorful" ? "bg-yellow-200" : "bg-white"}
      `}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold ">Add New Product</h2>
        {/* Appliance Name */}
        <input
          type="text"
          placeholder="Appliance Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`p-3 border rounded-lg focus:outline-none focus:ring-2
            ${errors.name ? "border-red-500 focus:ring-red-400" : "border-gray-500 focus:ring-blue-400"}
            ${theme === "dark" ? "bg-gray-700 text-white placeholder-gray-400" : theme === "colorful" ? "bg-yellow-100 text-blue-900 placeholder-blue-700" : "bg-white text-gray-800 placeholder-gray-500"}
          `}
        />

        {/* Base Price */}
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={`p-3 border rounded-lg focus:outline-none focus:ring-2
            ${errors.price ? "border-red-500 focus:ring-red-400" : "border-gray-500 focus:ring-blue-400"}
            ${theme === "dark" ? "bg-gray-700 text-white placeholder-gray-400" : theme === "colorful" ? "bg-yellow-100 text-blue-900 placeholder-blue-700" : "bg-white text-gray-800 placeholder-gray-500"}
          `}
        />

        {/* Website Prices */}
        <div className="flex flex-col gap-2">
          {websites.map((w, i) => (
            <div key={i} className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Website Name"
                value={w.name}
                onChange={(e) => updateWebsite(i, "name", e.target.value)}
                className={`flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2
                  ${theme === "dark" ? "bg-gray-700 text-white placeholder-gray-400" : theme === "colorful" ? "bg-yellow-100 text-blue-900 placeholder-blue-700" : "bg-white text-gray-800 placeholder-gray-500"}
                `}
              />
              <input
                type="number"
                placeholder="Price on Website"
                value={w.price}
                onChange={(e) => updateWebsite(i, "price", e.target.value)}
                className={`flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2
                  ${theme === "dark" ? "bg-gray-700 text-white placeholder-gray-400" : theme === "colorful" ? "bg-yellow-100 text-blue-900 placeholder-blue-700" : "bg-white text-gray-800 placeholder-gray-500"}
                `}
              />
              {i > 0 && (
                <XMarkIcon
                  className="w-6 h-6 text-red-500 cursor-pointer"
                  onClick={() => removeWebsite(i)}
                />
              )}
            </div>
          ))}
          <button
            type="button"
            className="flex items-center gap-1 text-blue-600 hover:underline mt-1"
            onClick={addWebsite}
          >
            <PlusIcon className="w-5 h-5" /> Add Website Price
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={
            !name || !price || websites.some((w) => !w.name || !w.price)
          }
          className={`px-6 py-2 rounded-lg font-semibold
            ${
              !name || !price || websites.some((w) => !w.name || !w.price)
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : theme === "dark"
                  ? "bg-blue-600 text-white"
                  : theme === "colorful"
                    ? "bg-pink-500 text-white"
                    : "bg-blue-500 text-white"
            }
          `}
        >
          Add Appliance
        </button>
      </form>
    </div>
  );
}
