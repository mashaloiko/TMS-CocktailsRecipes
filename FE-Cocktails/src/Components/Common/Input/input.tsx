import { Input } from "./input.styled";
import { ErrorMessage } from "../Error/error";
import { CommonInputProps } from "../../../types/types";
import "./style/input.css";




export const CommonInput = ({name, type, placeholder, styleInputProp, value, onChange, error, errorText}: CommonInputProps) => {
  return (
    <>
      <label className="form-label">
        <p className="form-text">{name}</p>
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