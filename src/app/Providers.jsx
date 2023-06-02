//client side Provider use case: context syste is not supperted onto server side
"use client";
import { ThemeProvider } from "next-themes";
const Providers = ({ children }) => {
  return (
    // here enableSystema and attribute are amandatory to use tailwind dark mode :dark
    <ThemeProvider enableSystem={true} attribute="class" defaultTheme="light">
      <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
