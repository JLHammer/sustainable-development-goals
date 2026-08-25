import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import { StyledImage } from './Image.styled';
import type { ImageProps } from './Image.types';

const Image = ({
  src,
  alt,
  ratio,
  fit = 'cover',
  radius = 'none',
  fallbackSrc,
  loading = 'lazy',
  decoding = 'async',
  onError,
  ...rest
}: ImageProps) => {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  // Derived rather than stored, so swapping in a new `src` automatically
  // retries it instead of staying stuck on the fallback.
  const currentSrc = fallbackSrc && failedSrc === src ? fallbackSrc : src;

  const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
    if (fallbackSrc && failedSrc !== src) {
      setFailedSrc(src);
    }
    onError?.(event);
  };

  return (
    <StyledImage
      src={currentSrc}
      alt={alt}
      loading={loading}
      decoding={decoding}
      onError={handleError}
      $ratio={ratio}
      $fit={fit}
      $radius={radius}
      {...rest}
    />
  );
};

export default Image;
