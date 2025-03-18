import css from "./ErrorMessage.module.css";

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={css.ErrorMessage}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
