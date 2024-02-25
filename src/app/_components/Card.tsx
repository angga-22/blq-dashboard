import { FC } from "react";
import { ImageComp } from "./Image";

interface ICardProps {
  title: string;
  description: string;
  thumbnail: {
    uri: string;
  };
  installmentPrice: string;
  discount: string;
  className?: string;
}

const Card: FC<ICardProps> = ({ props }) => {
  const { title, description, thumbnail, installmentPrice, discount, className } = props;
  return (
    <div
      className={`${className} flex w-full flex-col items-center justify-center rounded-xl bg-white p-4 text-center`}
    >
      <ImageComp src={thumbnail?.uri} alt={title} className="mb-2 w-[150px] rounded-md" />
      <h3 className="mb-1 text-lg font-bold">{title}</h3>
      <p className="mb-2 text-sm text-gray-500">{description}</p>
      <div className="mb-4 flex items-center">
        <span className="mr-1 text-xl font-bold">{installmentPrice}</span>
        <span className="text-base font-medium text-gray-500 line-through">42,458원</span>
      </div>
      <div className="flex items-center">
        <span className="mr-1 text-base font-bold">{discount}</span>
        <span className="text-sm font-medium text-gray-500">쿠폰 *4</span>
      </div>
    </div>
  );
};

export default Card;
