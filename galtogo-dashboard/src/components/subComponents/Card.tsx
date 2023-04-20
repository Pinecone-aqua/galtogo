import { Loader2 } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { FC, TextareaHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-lg text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-sky-800 text-white hover:bg-sky-600",
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

interface CardProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof cardVariants> {
  isLoading?: boolean;
}

const Card: FC<CardProps> = ({
  className,
  children,
  variant,
  isLoading,
  size,
  ...props
}) => (
  <textarea
    className={twMerge(cardVariants({ variant, size, className }))}
    disabled={isLoading}
    {...props}
  >
    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
    {children}
  </textarea>
);

export default Card;
