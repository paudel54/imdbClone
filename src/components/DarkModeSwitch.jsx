"use client";
import { MdOutlineLightMode } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
const DarkModeSwitch = () => {
  //addes UseTheme Hook
  const { systemTheme, theme, setTheme } = useTheme();
  //destructuring the theme props returns 3 state of theme dark, light and sys;
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <>
      {/* {JSON.stringify(theme)}
      {JSON.stringify(currentTheme)} */}
      {mounted &&
        (currentTheme === "dark" ? (
          <MdOutlineLightMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsFillMoonStarsFill
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
};

export default DarkModeSwitch;
