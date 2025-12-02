/**
 * Modal Component
 * Dialog/modal using Radix UI
 */

"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  showCloseButton?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onOpenChange,
  title,
  description,
  children,
  size = "md",
  showCloseButton = true,
}) => {
  const sizes = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full mx-4",
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in" />
        <Dialog.Content
          className={cn(
            "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            "bg-white rounded-3xl shadow-2xl z-50",
            "w-full",
            sizes[size],
            "max-h-[90vh] overflow-y-auto",
            "animate-scale-in"
          )}
        >
          {(title || description || showCloseButton) && (
            <div className="flex items-start justify-between p-6 border-b border-gray-200">
              <div className="flex-1">
                {title && (
                  <Dialog.Title className="text-2xl font-bold text-secondary mb-2">
                    {title}
                  </Dialog.Title>
                )}
                {description && (
                  <Dialog.Description className="text-gray-dark">
                    {description}
                  </Dialog.Description>
                )}
              </div>
              {showCloseButton && (
                <Dialog.Close asChild>
                  <button
                    className="ml-4 p-2 rounded-full hover:bg-gray-light transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5 text-gray-dark" />
                  </button>
                </Dialog.Close>
              )}
            </div>
          )}
          <div className="p-6">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
