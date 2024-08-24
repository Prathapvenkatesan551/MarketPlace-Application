import React, { useEffect, useState } from "react";
import "./Login.css";
import { AccountService } from "../BackendService/AccountService";
import { Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate=useNavigate();
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [Accounts, setAccounts] = useState([]);
  let account = null;

  useEffect(() => {
    AccountService()
      .then((response) => {
        setAccounts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const checkEmailAndPassword = () => {
    let account = null;

    for (let i = 0; i < Accounts.length; i++) {
      const item = Accounts[i];

      if (Array.isArray(item)) {
        account = item.find((acc) => acc.email === getEmail);
      } else if (item && typeof item === "object") {
        if (item.email === getEmail) {
          account = item;
        }
      }

      if (account) break;
    }

    console.log(account);

    if (account) {
      if (getPassword === account.password) {
        return true;
      } else {
        console.log("Password does not match.");
        return false;
      }
    } else {
      console.log("Email not found.");
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(account);
    if (checkEmailAndPassword()) {
      navigate("/Home");
    } else {
      alert("Password does not match or Email not found.");
    }
  };

  return (
    <div className="loginPopup">
      <form onSubmit={handleSubmit}>
        <h2 className="loginText">If Already Have an account!</h2>
        <div className="inp">
          <input
            type="email"
            value={getEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="lablediv">Email</div>
        </div>
        <div className="inp">
          <input
            type="password"
            value={getPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="lablediv">Password</div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
