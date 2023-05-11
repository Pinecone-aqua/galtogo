import { Loader2 } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-lg text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-gray-500 text-white hover:bg-sky-600",
        yellow: "bg-yellow-200 text-black hover:bg-yellow-400",
      },
      seats: {
        sm: "h-20 px-4",
        m: "h-40 px-5",
        l: "h-60 px-5",
      },
      shape: {
        round: "rounded-full",
        square: "rounded",
      },
    },
    defaultVariants: {
      variant: "default",
      seats: "sm",
      shape: "round",
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
  shape,
  isLoading,
  seats,
  ...props
}) => (
  <button
    className={twMerge(buttonVariants({ variant, seats, shape, className }))}
    disabled={isLoading}
    {...props}
  >
    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
    {children}
  </button>
);

export default Button;
