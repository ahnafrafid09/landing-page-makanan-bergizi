"use client";

import { useTheme } from "@/context/ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full  text-gray-800 dark:text-gray-200 transition-all duration-300 cursor-pointer"
    >
      {theme === "light" ? <FaMoon size={24} /> : <FaSun size={24} />}
    </button>
  );
}
