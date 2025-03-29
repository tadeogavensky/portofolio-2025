"use client";
import { memo } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { AnimatePresence } from "framer-motion";
import { SideDrawer } from "./SideDrawer";

interface CardProps {
  size: "small" | "medium" | "large";
  content: React.ReactNode;
  modalContent: React.ReactNode;
  className?: string;
  displayButton?: boolean;
  isDrawerOpen: boolean;
  onDrawerOpen: () => void;
}

export const Card = memo(function Card({
  size,
  content,
  modalContent,
  className = "",
  displayButton = true,
  isDrawerOpen,
  onDrawerOpen,
}: CardProps) {
  return (
    <>
      <div
        className={`
          ${className}
          h-full
          p-6 rounded-3xl
          bg-gradient-to-br from-gray-100 to-gray-50
          dark:from-gray-800 dark:to-gray-900
          border border-gray-200 dark:border-gray-700/50
          shadow-lg
          will-change-transform
          flex flex-col justify-center  
          w-full 
          relative
        `}
      >
        {content}

        {displayButton && (
          <button
            className="absolute bottom-0 right-0 m-4 cursor-pointer hover:scale-110 transition-transform"
            onClick={onDrawerOpen}
          >
            <CiCirclePlus className="w-10 h-10 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {isDrawerOpen && (
          <SideDrawer
            isOpen={isDrawerOpen}
            onClose={() => onDrawerOpen()}
            modalContent={modalContent}
          />
        )}
      </AnimatePresence>
    </>
  );
});
