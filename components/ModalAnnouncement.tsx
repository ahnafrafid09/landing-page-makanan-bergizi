"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import Button from "./Button";

interface ModalAnnouncementProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  duration?: number; // Opsional, default 3 detik
}

const ModalAnnouncement: React.FC<ModalAnnouncementProps> = ({
  isOpen,
  onClose,
  title,
  message,
  duration = 3000,
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose, duration]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay dengan blur */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-md bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="bg-secondary text-darken p-6 max-w-md mx-auto rounded-lg shadow-lg text-center">
              <Dialog.Title className="text-xl font-bold mb-4">
                {title}
              </Dialog.Title>
              <Dialog.Description className="mb-4">
                {message}
              </Dialog.Description>
              <Button onClick={onClose} variant="darken">
                Tutup
              </Button>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalAnnouncement;
