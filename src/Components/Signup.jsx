import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { AccountService, PostAccount } from "../BackendService/AccountService";

const Signup = () => {
  const navigate = useNavigate();
  const [getName, setName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getMobileNumber, setMobileNumber] = useState("");
  const [errors, setErrors] = useState({});

 /* const [Accounts, setAccounts] = useState([]);
  AccountService()
    .then((response) => {
      setAccounts(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
*/
  const validate = () => {
    let validationErrors = {};
    let isValid = true;

    if (!getName) {
      validationErrors.name = "Name is required";
      isValid = false;
    }

    if (!getEmail) {
      validationErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(getEmail)) {
      validationErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!getPassword) {
      validationErrors.password = "Password is required";
      isValid = false;
    } else if (getPassword.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!getMobileNumber) {
      validationErrors.mobileNumber = "Mobile number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(getMobileNumber)) {
      validationErrors.mobileNumber = "Mobile number must be 10 digits";
      isValid = false;
    }

    setErrors(validationErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const accountId = 1;
      const accountName = getName;
      const email = getEmail;
      const passsword = getPassword;
      const mobileNumber = getMobileNumber;

      const Account = {
        accountId,
        accountName,
        email,
        passsword,
        mobileNumber,
      };
      PostAccount(Account).then((response) => {
        console.log(response);
      });
      console.log("Form submitted successfully");
      // navigate('/Login');
    }
  };

  return (
    <div className="signupPopup">
      <form onSubmit={handleSubmit}>
        <h2 className="signupText">Create an Account !</h2>

        <div className="inp">
          <input
            type="text"
            className={`name ${errors.name ? "error-border" : ""}`}
            value={getName}
            onChange={(e) => setName(e.target.value)}
            placeholder=""
          />
          <div className="lablediv">Name</div>
        </div>

        <div className="inp">
          <input
            type="email"
            className={`${errors.email ? "error-border" : ""}`}
            value={getEmail}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
          />
          <div className="lablediv">Email</div>
        </div>

        <div className="inp">
          <input
            type="password"
            className={`${errors.email ? "error-border" : ""}`}
            value={getPassword}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=""
          />
          <div className="lablediv">New Password</div>
        </div>

        <div className="inp">
          <input
            type="text"
            className={`${errors.mobileNumber ? "error-border" : ""}`}
            value={getMobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder=""
          />
          <div className="lablediv ">Mobile Number</div>
        </div>

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
