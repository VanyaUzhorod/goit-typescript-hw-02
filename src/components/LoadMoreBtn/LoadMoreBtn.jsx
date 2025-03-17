import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleClick }) => {
  return (
    <div>
      <button type="button" className={css.loadButton} onClick={handleClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
