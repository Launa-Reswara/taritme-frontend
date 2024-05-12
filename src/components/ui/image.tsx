import { HTMLAttributes } from "react";
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from "react-lazy-load-image-component";

type ImageProps = HTMLAttributes<HTMLImageElement> &
  LazyLoadImageProps & {
    src: string;
    alt: string;
    className?: string;
  };

export default function Image({ src, alt, className, ...props }: ImageProps) {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      visibleByDefault
      {...props}
    />
  );
}
