import { ErrorMessage } from "../Error/error";
import { Input } from "./input.styled";

interface CommonInputProps {
  placeholder: string;
  type: string;
  name: string;
  styleInputProp: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorText?: string | undefined;
}

export const CommonInput = ({name, type, placeholder, styleInputProp, value, onChange, error, errorText}: CommonInputProps) => {
  return (
    <>
      <label className="InputInfoWrapper">
        <p className="NameInput">{name}</p>
        <Input
          type={type}
          placeholder={placeholder}
          styleInputProp={styleInputProp}
          value={value}
          onChange={onChange}
        />
        {error ? <ErrorMessage errorText={errorText}/> : null}
      </label>
    </>
  );
};