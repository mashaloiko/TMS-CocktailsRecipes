import { useEffect, useState } from "react";
import { CommonButton } from "../../Common/Button/button";
import { CommonInput } from "../../Common/Input/input";
import "./style/login.css";

export const LogIn = () => {
  const [login, setLogin] = useState<string>("");
  const [loginError, setLoginError] = useState<boolean>(false);

  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const [formValid, setFormValid] = useState<boolean>(false);

  const hasCapitalFirst = (str: string) => /[A-Z]/.test(str.charAt(0));

  const regularExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  const isPassword = (str: string) => regularExpression.test(str);
  
  useEffect(() => {
    if (!hasCapitalFirst(login) && login.length > 0) {
      setLoginError(true);
    } else {
      setLoginError(false);
    }
  }, [login]);
  
  useEffect(() => {
    if (!isPassword(password) && password.length > 0) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }, [password]);

  useEffect(() => {
    if (loginError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [loginError, passwordError]);
  
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
            error={loginError}
            errorText="Enter your Login in capital letter."
            />
            <CommonInput 
            placeholder="Enter you password" 
            type="password" 
            name="Password" 
            styleInputProp="login"
            value={password}
            onChange={handleChangePassword}
            error={passwordError}
            errorText="Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number."
            />
          </div>
          <CommonButton disabled={!formValid} type="submit" name="LOGIN" styleBtnProp="login"/>
        </form>
      </div>
    </div>
  )
}