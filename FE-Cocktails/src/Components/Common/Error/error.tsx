interface ErrorMessageProps {
  errorText: string | undefined;
}

export const ErrorMessage = ({ errorText }: ErrorMessageProps) => {
  return <p style={{ color: "red" }}>{errorText}</p>;
};