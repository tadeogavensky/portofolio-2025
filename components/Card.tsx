"use client";
import { useState, memo } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

interface CardProps {
  size: "small" | "medium" | "large";
  content: React.ReactNode;
  modalContent: React.ReactNode;
  className?: string;
  displayButton?: boolean;
}

export const Card = memo(function Card({
  size,
  content,
  modalContent,
  className = "",
  displayButton = true,
}: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={`
          ${size === "small" ? "w-1/3" : size === "medium" ? "w-1/2" : "w-full"}
          ${className}
          h-full
          p-6 rounded-3xl
          bg-gradient-to-br from-gray-100 to-gray-50
          dark:from-gray-800 dark:to-gray-900
          border border-gray-200 dark:border-gray-700/50
          shadow-lg
          will-change-transform
          flex flex-col justify-center  
        `}
      >
        {content}

        {displayButton && (
          <button
            className="absolute bottom-0 right-0 m-4 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <CiCirclePlus className="w-10 h-10 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {isModalOpen && (
          <Modal
            content={content}
            modalContent={modalContent}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
});

