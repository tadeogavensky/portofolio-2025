import { motion } from "framer-motion";
import { IoArrowBack, IoClose } from "react-icons/io5";
interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  modalContent: React.ReactNode;
}

export function SideDrawer({ isOpen, onClose, modalContent }: SideDrawerProps) {
  return (
    <motion.div
      className="fixed top-0 right-0 h-full bg-white dark:bg-gray-800 z-50 shadow-xl"
      style={{ minWidth: "600px" }}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 20, duration: 0.2 }}
    >
      <div className="flex flex-col h-full">
        <div className="p-4">
          <button
            onClick={onClose}
            className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full cursor-pointer"
          >
            <IoArrowBack
              size={24}
              className="text-gray-500 dark:text-gray-400"
            />
          </button>
        </div>
        <div className="flex-1 px-6 overflow-y-auto">{modalContent}</div>
      </div>
    </motion.div>
  );
}
