/**
 * Button Component
 * Props:
 * - variant: primary | secondary | outline
 * - size: sm | md | lg
 * - disabled: boolean
 * - onClick: function
 */

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

export default function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  children,
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-green-600 text-white",
    secondary: "bg-gray-600 text-white",
    outline: "border border-gray-600",
  };

  const sizeClasses = {
    sm: "px-3 py-1",
    md: "px-4 py-2",
    lg: "px-6 py-3",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {children}
    </button>
  );
}