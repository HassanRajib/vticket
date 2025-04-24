"use client";
import React from "react";
import ColourfulText from "@/components/ui/colourful-text";


export function ColourfulTextDemo() {
  return (
    <div className="h-auto w-full flex items-center justify-center relative overflow-hidden bg-white dark:bg-black p-3" >
      <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-black dark:text-white relative z-2 font-other">
        Upcoming <ColourfulText text="Events" /> <br /> 
      </h1>
    </div>
  );
}
