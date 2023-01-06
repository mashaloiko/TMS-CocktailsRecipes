import { useEffect, useState } from "react";
import { CommonButton } from "../../Common/Button/button";
import { CommonInput } from "../../Common/Input/input";
import "./style/login.css";

export const LogIn = () => {
  const [login, setLogin] = useState<string>("");
  // const [loginError, setLoginError] = useState<boolean>(false);

  const [password, setPassword] = useState<string>("");
  // const [passwordError, setPasswordError] = useState<boolean>(false);


  
  // useEffect(() => {
  //   if (!isCorrectPassword(login) && login.length > 0) {
  //     setLoginError(true);
  //   } else {
  //     setLoginError(false);
  //   }
  // }, [login]);
  
  // useEffect(() => {
  //   if (!isPassword(password) && password.length > 0) {
  //     setPasswordError(true);
  //   } else {
  //     setPasswordError(false);
  //   }
  // }, [password]);

  // useEffect(() => {
  //   if (loginError || passwordError) {
  //     setFormValid(false);
  //   } else {
  //     setFormValid(true);
  //   }
  // }, [loginError, passwordError]);
  
  const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(() => event.target.value);
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(() => event.target.value);
  };
  
  
  return (
    <div className="login-wrap">
      <div className="container">
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
      </div>
    </div>
  )
}