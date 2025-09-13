import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function ThemeSelect({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const options = ["light", "dark", "colorful"];

  const bg =
    theme === "dark"
      ? "bg-gray-700"
      : theme === "colorful"
        ? "bg-yellow-300"
        : "bg-white";
  const text =
    theme === "dark"
      ? "text-white"
      : theme === "colorful"
        ? "text-blue-900"
        : "text-gray-800";
  const hover =
    theme === "dark"
      ? "hover:bg-gray-600"
      : theme === "colorful"
        ? "hover:bg-yellow-400"
        : "hover:bg-gray-100";

  return (
    <div className="relative w-36">
      {/* Selected theme */}
      <div
        className={`p-2 border rounded-lg cursor-pointer flex justify-between items-center ${bg} ${text}`}
        onClick={() => setOpen(!open)}
      >
        <span>{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
        <ChevronDownIcon className="w-5 h-5 text-gray-500" />
      </div>

      {/* Dropdown options */}
      {open && (
        <ul
          className={`absolute w-full mt-1 border rounded-lg overflow-hidden shadow-lg z-10 ${bg}`}
        >
          {options.map((opt) => (
            <li
              key={opt}
              className={`p-2 cursor-pointer ${text} ${hover}`}
              onClick={() => {
                setTheme(opt);
                setOpen(false);
              }}
            >
              {opt.charAt(0).toUpperCase() + opt.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
