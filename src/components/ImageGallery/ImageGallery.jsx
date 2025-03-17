import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
const ImageGallery = ({ image, onImageClick }) => {
  return (
    <div>
      <ul className={css.imgGalerry}>
        {image.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} onImageClick={onImageClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
