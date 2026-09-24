import Link, { type LinkProps } from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "text";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-pill px-5 text-center text-base font-semibold leading-6 transition-colors duration-200 motion-reduce:transition-none disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-forest text-cream hover:bg-forest-hover active:bg-forest-active",
  secondary:
    "border-[1.5px] border-forest bg-transparent text-forest hover:bg-forest/6 active:bg-forest/12",
  text: "rounded-none px-0 text-forest underline underline-offset-4 hover:decoration-2",
};

function buttonClasses(variant: ButtonVariant, className?: string) {
  return cn(base, variants[variant], className);
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses(variant, className)}
      {...props}
    />
  );
}

type ButtonLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={buttonClasses(variant, className)} {...props}>
      {children}
    </Link>
  );
}
