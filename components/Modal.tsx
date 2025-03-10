export const Modal = memo(function Modal({
        modalContent,
        onClose,
      }: {
        content: React.ReactNode;
        modalContent: React.ReactNode;
        onClose: () => void;
      }) {
        return (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={onClose}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-x-4 top-[50%] translate-y-[-50%] md:inset-auto md:left-[50%] md:translate-x-[-50%] md:w-[600px] bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl z-50"
            >
              <div className="">{modalContent}</div>
            </motion.div>
          </>
        );
      });
      