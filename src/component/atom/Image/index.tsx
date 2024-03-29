import NextImage, { StaticImageData } from 'next/image';

export type ImageProps = {
  src: StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
};

export const Image: React.FC<ImageProps> = ({ src, alt = '', width, height }) => (
  <NextImage src={src} alt={alt} width={width} height={height} />
);
