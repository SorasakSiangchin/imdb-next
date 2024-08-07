"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div
        className="
      text-gray-700 
      dark:text-gray-200 
      dark:bg-gray-700 
      min-h-screen 
      transition-colors 
      duration-300"
      >
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
