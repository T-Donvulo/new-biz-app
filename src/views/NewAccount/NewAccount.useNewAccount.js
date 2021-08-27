import { useState } from "react";
import validator from "validator";
import { users } from "../../api/users";
import { useHistory } from "react-router-dom";

export const useNewAccount = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState(null);

  const createAccount = async () => {
    if (!email || email.length < 1) return;
    setAlert("noEmail");
    if (!password || password.length < 1) return;
    setAlert("noPassword");
    if (!confirmPassword || confirmPassword.length < 1)
      return "noConfirmedPassword";

    if (!validator.isEmail(email)) return setAlert("formatEmail");
    if (password.length < 8) return setAlert("shortPassword");
    if (confirmPassword.length < 8) return setAlert("shortConfirmPassword");

    if (password !== confirmPassword) return setAlert("mismatchPasswords");
    setAlert("creating");

    const [success, code] = await users.createAccount(email, password)
      
    if(!success) {
      return setAlert(code)
    }

      history.push("/");
    
  };

  return {
    email,
    password,
    confirmPassword,
    setEmail,
    setPassword,
    setConfirmPassword,
    createAccount,
  };
};

export default useNewAccount;
