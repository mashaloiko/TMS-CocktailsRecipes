import { useState } from "react";
import { CommonButton } from "../../Common/Button/button";
import { CommonInput } from "../../Common/Input/input";
import "./style/login.css"

export const LogIn = () => {
  const [login, setLogin] = useState<string>("");
  // const [loginError, setLoginError] = useState<boolean>(false);

  const [password, setPassword] = useState<string>("");
  // const [passwordError, setPasswordError] = useState<boolean>(false);
  
  
  const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(() => event.target.value);
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(() => event.target.value);
  };
  
  
  return (
    <form className="form">
      <div className="form__wrap">
        <CommonInput 
        placeholder="Enter your login" 
        type="text" 
        name="Login" 
        styleInputProp="login"
        value={login}
        onChange={handleChangeLogin}
        />
        <CommonInput 
        placeholder="Enter you password" 
        type="password" 
        name="Password" 
        styleInputProp="login"
        value={password}
        onChange={handleChangePassword}
        />
      </div>
      <CommonButton name="LOGIN" styleBtnProp="login"/>
    </form>
  )
}