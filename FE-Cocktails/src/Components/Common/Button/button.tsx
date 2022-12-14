import { Button } from "./button.styled"

interface CommonBtnProps {
  type?: "submit",
  name: string,
  onClick?: () => void,
  styleBtnProp: string,
  disabled?: boolean;
}

export const CommonButton = ({onClick, name, styleBtnProp, disabled, type}: CommonBtnProps) => {


  return (
    <Button type={type} onClick={onClick} styleBtnProp={styleBtnProp} disabled={disabled}>{name}</Button>
  )
}