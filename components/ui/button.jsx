import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // gap-2 so trailing icons space themselves instead of each caller adding margin.
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-accent text-accent-contrast hover:bg-accent-hover",
        outline:
          // Was `bg-transaprent` -- a typo, so the utility never applied.
          "border border-rule-strong bg-transparent text-ink hover:border-accent hover:bg-accent-soft hover:text-accent",
        secondary:
          "border border-rule bg-sunken text-ink hover:bg-paper",
        ghost: "text-muted hover:bg-sunken hover:text-ink",
        link: "text-accent underline-offset-4 hover:underline",
        destructive: "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        default: "h-10 px-5 text-sm",
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        // Dropped the uppercase + 2px tracking: shouty against a serif display face.
        lg: "h-12 px-6 text-[15px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

// React 19 passes ref as a normal prop, so forwardRef is no longer needed.
const Button = ({ className, variant, size, asChild = false, ...props }) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export { Button, buttonVariants };
