"use client";

/**
 * Toast Component
 * Displays notification message
 */

type ToastProps = {
  message: string;
};

export default function Toast({
  message,
}: ToastProps) {
  return (
    <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow">
      {message}
    </div>
  );
}