import "./style/error.css";

interface ErrorMessageProps {
  errorText: string | undefined;
}

export const ErrorMessage = ({ errorText }: ErrorMessageProps) => {
  return <p className="error">{errorText}</p>;
};