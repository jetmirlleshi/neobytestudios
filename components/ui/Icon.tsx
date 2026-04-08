import type { CSSProperties } from "react";

/**
 * Material Symbols Outlined wrapper.
 * The font is loaded globally via <link> in app/layout.tsx.
 *
 * Example:
 *   <Icon name="rocket_launch" fill size={32} className="text-primary" />
 */

interface IconProps {
  name: string;
  /** Whether the icon is filled (vs outlined). Default: false */
  fill?: boolean;
  /** Font weight (100-700). Default: 400 */
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  /** Icon size in pixels. Default: 24 */
  size?: number;
  className?: string;
  style?: CSSProperties;
  "aria-label"?: string;
}

export function Icon({
  name,
  fill = false,
  weight = 400,
  size = 24,
  className,
  style: styleProp,
  "aria-label": ariaLabel,
}: IconProps) {
  const style: CSSProperties = {
    fontSize: `${size}px`,
    lineHeight: 1,
    fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
    ...styleProp,
  };
  return (
    <span
      className={`material-symbols-outlined ${className ?? ""}`.trim()}
      style={style}
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : undefined}
    >
      {name}
    </span>
  );
}
