import Image from "next/image";
import { FC, ComponentProps, memo } from "react";

interface IImageProps extends Omit<ComponentProps<typeof Image>, "src"> {
  src: string;
}

const ImageComponent: FC<IImageProps> = ({ src, ...props }) => (
  <Image {...props} src={src} alt="img" priority width={100} height={100} />
);

export const ImageComp = memo(ImageComponent);
