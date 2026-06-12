import type { ReactNode } from "react";

type Props = {
  variant?: "primary" | "ghost";
  size?: "sm" | "lg";
  href?: string;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "lg",
  href,
  className = "",
  children,
}: Props) {
  const cls = `btn btn-${variant} btn-${size}${className ? ` ${className}` : ""}`;
  if (href) {
    return (
      <a className={cls} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} type="button">
      {children}
    </button>
  );
}
