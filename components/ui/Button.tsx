import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

/**
 * NEOBYTE Button — three variants, polymorphic (renders <button>, <a>, or
 * Next <Link> based on whether `href` is passed and if it's internal).
 *
 * Variants:
 * - `primary`   : filled cosmic gradient (viola → blu), strong glow on hover
 * - `secondary` : ghost with outlined border, fills on hover
 * - `tertiary`  : text-only with underline animation on hover
 */

type Variant = "primary" | "secondary" | "tertiary";
type Size = "sm" | "md" | "lg";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  /** Optional Material Symbols icon name to show after the label */
  iconRight?: string;
  /** Optional Material Symbols icon name to show before the label */
  iconLeft?: string;
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const SIZE_CLASSES: Record<Size, string> = {
  sm: "px-6 py-2.5 text-[10px]",
  md: "px-8 py-3.5 text-xs",
  lg: "px-10 py-4 text-xs",
};

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary " +
    "hover:shadow-[0_0_40px_rgba(192,132,252,0.55)] " +
    "hover:scale-[1.02] active:scale-[0.98] " +
    "transition-all duration-300",
  secondary:
    "rounded-full border border-outline/60 bg-white/[0.04] " +
    "text-on-background hover:bg-white/[0.10] hover:border-primary " +
    "hover:text-primary transition-all duration-300",
  tertiary:
    "relative inline-flex items-center gap-2 text-on-background " +
    "hover:text-primary transition-colors duration-300 " +
    "after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 " +
    "after:bg-primary after:transition-all after:duration-300 " +
    "hover:after:w-full",
};

const BASE =
  "inline-flex items-center justify-center gap-2 font-headline font-bold " +
  "uppercase tracking-[0.25em] select-none cursor-pointer";

function buildClassName(
  variant: Variant,
  size: Size,
  extra?: string,
): string {
  const sizeClasses = variant === "tertiary" ? "" : SIZE_CLASSES[size];
  return [BASE, sizeClasses, VARIANT_CLASSES[variant], extra ?? ""]
    .filter(Boolean)
    .join(" ");
}

function Content({
  children,
  iconLeft,
  iconRight,
}: Pick<CommonProps, "children" | "iconLeft" | "iconRight">) {
  return (
    <>
      {iconLeft ? (
        <span
          className="material-symbols-outlined text-base"
          style={{ fontSize: "1.1em" }}
          aria-hidden
        >
          {iconLeft}
        </span>
      ) : null}
      <span>{children}</span>
      {iconRight ? (
        <span
          className="material-symbols-outlined text-base"
          style={{ fontSize: "1.1em" }}
          aria-hidden
        >
          {iconRight}
        </span>
      ) : null}
    </>
  );
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    iconLeft,
    iconRight,
  } = props;

  const classes = buildClassName(variant, size, className);

  if ("href" in props && props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch,
      iconLeft: _il, iconRight: _ir, ...rest } = props;
    void _v; void _s; void _c; void _ch; void _il; void _ir;
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} className={classes} {...rest}>
          <Content iconLeft={iconLeft} iconRight={iconRight}>
            {children}
          </Content>
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        <Content iconLeft={iconLeft} iconRight={iconRight}>
          {children}
        </Content>
      </a>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch,
    iconLeft: _il, iconRight: _ir, ...rest } = props;
  void _v; void _s; void _c; void _ch; void _il; void _ir;
  return (
    <button className={classes} {...rest}>
      <Content iconLeft={iconLeft} iconRight={iconRight}>
        {children}
      </Content>
    </button>
  );
}
