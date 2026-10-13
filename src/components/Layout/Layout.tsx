import React from "react";
import { cn } from "@/libs/utils";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  footer?: React.ReactNode;
}

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ header, sidebar, footer, children, className, ...props }, ref) => (
    <div ref={ref} className={cn("flex min-h-screen flex-col", className)} {...props}>
      {header && <header className="shrink-0">{header}</header>}
      <div className="flex min-h-0 flex-1">
        {sidebar && <aside className="shrink-0">{sidebar}</aside>}
        <main className="min-w-0 flex-1">{children}</main>
      </div>
      {footer && <footer className="shrink-0">{footer}</footer>}
    </div>
  )
);

Layout.displayName = "Layout";

export { Layout };
