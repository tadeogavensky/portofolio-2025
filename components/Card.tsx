"use client";
import { useState } from "react";

interface CardProps {
  size: "small" | "medium" | "large";
  content: React.ReactNode;
  className?: string;
}

export default function Card({ size, content, className = "" }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        ${
          size === "small" ? "w-1/3" : size === "medium" ? "w-1/2" : "w-full"
        }
        ${className}
        h-full
        p-6 rounded-2xl
        bg-gradient-to-br from-gray-100 to-gray-50
        dark:from-gray-800 dark:to-gray-900
        border border-gray-200 dark:border-gray-700/50
        shadow-lg
        hover:shadow-xl
        transform-gpu
        transition-shadow duration-200
        cursor-pointer
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </div>
  );
}
