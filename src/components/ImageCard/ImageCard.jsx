import css from "./ImageCard.module.css";
const ImageCard = ({ image, onImageClick }) => {
  return (
    <div>
      <img
        className={css.cardImg}
        src={image.urls.regular}
        alt={image.alt_description}
        onClick={() => onImageClick(image.urls.regular)}
      />
    </div>
  );
};

export default ImageCard;
