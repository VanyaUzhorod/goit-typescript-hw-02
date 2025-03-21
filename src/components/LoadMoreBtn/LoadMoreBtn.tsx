import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  handleClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleClick }) => {
  return (
    <div>
      <button type="button" className={css.loadButton} onClick={handleClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
