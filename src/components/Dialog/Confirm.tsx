import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export interface DialogContainerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose?: () => void;
  className?: string;
  childrrn?: React.ReactNode;
  content: React.ReactNode;
  handleConfirm: () => void;
}

export const ConfirmDialog = ({
  isOpen,
  setIsOpen,
  onClose,
  className,
  content,
  handleConfirm,
}: DialogContainerProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-20 transparent bg-gray-900/90"
        onClose={() => {
          setIsOpen(false);
          if (onClose) {
            onClose();
          }
        }}
      >
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center">
            <Dialog.Panel
              className={`contain flex flex-col items-center ${className}`}
            >
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                className="w-full max-w-[500px]"
              >
                <div className="bg-gray-900 text-white rounded-2xl border-2 border-gray-600 px-7 py-5 flex flex-col min-w-[350px]">
                  {content}
                  <div className="mt-8 flex items-center space-x-4 self-end">
                    <button type="button" onClick={() => setIsOpen(false)}>
                      Cancel
                    </button>

                    <button
                      className="bg-blue-600 px-6 py-3 rounded"
                      type="button"
                      onClick={handleConfirm}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
