import css from "./ErrorMessage.module.css";
const ErrorMessage = () => {
  return (
    <div>
      <h2 className={css.ErrorMessage}>Ooops, try later!</h2>
    </div>
  );
};
export default ErrorMessage;
