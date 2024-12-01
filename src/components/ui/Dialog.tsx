import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Dialog({ open, onClose, title, children, className }: DialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        <div className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" onClick={onClose} />
        
        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

        <div className={cn(
          "inline-block w-full max-w-2xl p-6 my-8 text-right align-middle transition-all transform bg-white shadow-xl rounded-lg",
          className
        )}>
          <div className="flex items-center justify-between mb-4">
            {title && (
              <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
            )}
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}