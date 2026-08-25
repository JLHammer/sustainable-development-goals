import type { ImgHTMLAttributes } from 'react';

export type ImageFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';

export type ImageRadius = 'none' | 'sm' | 'md' | 'lg' | 'circle';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  /** Always required — decorative images should pass an empty string. */
  alt: string;
  /** Aspect ratio as a CSS ratio string, e.g. `16 / 9`. */
  ratio?: string;
  /** How the image fills its box. Defaults to `cover`. */
  fit?: ImageFit;
  /** Corner rounding taken from the theme radii. Defaults to `none`. */
  radius?: ImageRadius;
  /** Image shown when `src` fails to load. */
  fallbackSrc?: string;
}

/** Transient props consumed by the styled layer only. */
export interface StyledImageProps {
  $ratio?: string;
  $fit: ImageFit;
  $radius: ImageRadius;
}
