import "./card.scss";
import { Product } from "../../types/index";

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const { title, images, price, category } = product;

  return (
    <div className="card">
      <figure className="relative">
        <span className="tag-name absolute b">{category.name}</span>
        <img className="" src={images[1]} alt={title} />
        <button className="absolute">+</button>
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium b f3">{`$${price}`}</span>
      </p>
    </div>
  );
};
export default Card;
