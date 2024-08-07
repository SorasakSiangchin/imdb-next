"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { MdLightMode, MdDarkMode } from "react-icons/md";

const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  // มันจะเกิดขึ้นในฝั่ง client เท่านั้น
  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted ? (
        currentTheme === "dark" ? (
          <MdDarkMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("light")}
          />
        ) : (
          <MdLightMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("dark")}
          />
        )
      ) : (
        ""
      )}
    </>
  );
};

export default DarkModeSwitch;
