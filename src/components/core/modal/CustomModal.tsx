"use client";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const CustomModal = ({
  isOpen,
  onClose,
  children,
  className = "",
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Step 1: Mount the component
      setShouldRender(true);

      // Step 2: Show backdrop first (blur appears)
      setTimeout(() => {
        setShowBackdrop(true);
      }, 50);

      // Step 3: Show modal content after backdrop
      setTimeout(() => {
        setShowModal(true);
      }, 200);
    } else {
      // Step 1: Hide modal content first
      setShowModal(false);

      // Step 2: Hide backdrop after modal
      setTimeout(() => {
        setShowBackdrop(false);
      }, 150);

      // Step 3: Unmount component after all animations
      setTimeout(() => {
        setShouldRender(false);
      }, 400);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!shouldRender) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Blurred backdrop - appears first */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm cursor-pointer transition-all duration-300 ease-in-out ${
          showBackdrop ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleBackdropClick}
      />

      {/* Modal content - appears after backdrop */}
      <div
        ref={modalRef}
        className={`relative z-10 w-full max-w-md transform rounded-lg bg-white p-6 shadow-xl transition-all duration-300 ease-out ${
          showModal
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-8"
        } ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};
export default CustomModal;
