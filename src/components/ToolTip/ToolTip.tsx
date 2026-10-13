import React, { forwardRef, useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const tooltipContentVariants = cva(
  "pointer-events-none absolute z-50 whitespace-nowrap rounded-md bg-slate-900 px-3 py-1.5 text-xs text-white opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100",
  {
    variants: {
      side: {
        top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
        right: "left-full top-1/2 ml-2 -translate-y-1/2",
        bottom: "left-1/2 top-full mt-2 -translate-x-1/2",
        left: "right-full top-1/2 mr-2 -translate-y-1/2",
      },
    },
    defaultVariants: {
      side: "top",
    },
  }
);

export interface ToolTipProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "content">,
    VariantProps<typeof tooltipContentVariants> {
  content: React.ReactNode;
  contentClassName?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const ToolTip = forwardRef<HTMLSpanElement, ToolTipProps>(
  (
    { children, content,contentClassName, side, disabled = false, className, ...props },
    ref
  ) => {
    const contentId = useId();

    return (
      <span
        ref={ref}
        className={cn(
          "group relative inline-flex w-fit",
          disabled && "pointer-events-none",
          className
        )}
        aria-describedby={disabled ? undefined : contentId}
        {...props}
      >
        {children}
        {!disabled && (
          <span
            id={contentId}
            role="tooltip"
            className={cn(
                tooltipContentVariants({ side }),
                contentClassName
            )}
          >
            {content}
          </span>
        )}
      </span>
    );
  }
);

ToolTip.displayName = "ToolTip";

export { ToolTip, tooltipContentVariants };