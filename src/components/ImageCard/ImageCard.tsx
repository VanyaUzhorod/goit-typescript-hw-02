import css from "./ImageCard.module.css";
import { Image } from "../../types";

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div onClick={onClick}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.cardImg}
      />
    </div>
  );
};

export default ImageCard;
