import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message?: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none"
      role="region"
      aria-live="polite"
      aria-label="Notifications"
    >
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isError = toast.type === 'error';

        return (
          <div
            key={toast.id}
            id={`toast-${toast.id}`}
            className="pointer-events-auto flex items-start gap-3 p-3.5 rounded bg-white dark:bg-[#151516] border border-slate-200 dark:border-[#2A2A2B] text-slate-900 dark:text-white shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-300"
          >
            {isSuccess && (
              <CheckCircle2 className="w-4 h-4 text-[#00FF00] shrink-0 mt-0.5" aria-hidden="true" />
            )}
            {isError && (
              <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" aria-hidden="true" />
            )}
            {!isSuccess && !isError && (
              <Info className="w-4 h-4 text-[#F27D26] shrink-0 mt-0.5" aria-hidden="true" />
            )}

            <div className="flex-1 min-w-0">
              <p className="text-xs font-mono font-bold uppercase tracking-wider leading-tight">{toast.title}</p>
              {toast.message && (
                <p className="text-xs text-slate-600 dark:text-[#A0A0A0] mt-1 leading-relaxed">
                  {toast.message}
                </p>
              )}
            </div>

            <button
              onClick={() => onDismiss(toast.id)}
              className="p-1 rounded text-[#808080] hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none"
              aria-label="Close notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
