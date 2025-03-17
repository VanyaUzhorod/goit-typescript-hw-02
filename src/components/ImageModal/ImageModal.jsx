import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, imageUrl, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <img
        src={imageUrl}
        alt="Large view"
        width={300}
        className={css.modalImage}
      />
    </Modal>
  );
};

export default ImageModal;
