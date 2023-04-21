import { Loader2 } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-lg text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-sky-800 text-white hover:bg-sky-600",
        yellow: "bg-yellow-200 text-black hover:bg-yellow-400",
        green: "bg-green-200 text-black hover:bg-green-400",
        red: "bg-red-200 text-black hover:bg-red-400",
        dark: "bg-slate-900 text-white hover:bg-slate-800",
        ghost: "bg-transparent hover:text-slate-900 hover:bg-slate-200",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  isLoading,
  size,
  ...props
}) => (
  <button
    className={twMerge(buttonVariants({ variant, size, className }))}
    disabled={isLoading}
    {...props}
  >
    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
    {children}
  </button>
);

export default Button;
