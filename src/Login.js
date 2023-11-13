import React, { useState } from "react";
import PropTypes from "prop-types";

const Login = ({ ...props }) => {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [emailAddressError, setEmailAddressError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    function handleClick(e) {
        setEmailAddressError("")
        setPasswordError("")

        if (emailAddress === "") {
            setEmailAddressError("Please enter your email address");
            
            return;
        }

        if (emailAddress.length < 8) {
            setEmailAddressError("Email input field must contain more than 7 characters");
            
            return;
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailAddress)) {
            setEmailAddressError("Email input field should be in a valid email address format (e.g. abc@test.com)");
            
            return;
        }

        if (password === "") {
            setPasswordError("Please enter your password")

            return;
        }

        if (password.length < 8) {
            setPasswordError("Password input field must have more than 8 characters")

            return;
        }
    }

    return (
        <div className="preservica__container">
            <h2 className="preservica__title">Login</h2>
            <form>
                <div className="preservica__input-wrapper">
                    <input
                        type="email"
                        value={emailAddress}
                        placeholder="Email Address*"
                        onChange={(e) => setEmailAddress(e.target.value)}
                        className="preservica__input"
                    />
                    <label className="preservica__input--error">{emailAddressError}</label>
                </div>
                <div className="preservica__input-wrapper">
                    <input
                        type="password"
                        value={password}
                        placeholder="Password*"
                        onChange={(e) => setPassword(e.target.value)}
                        className="preservica__input"
                    />
                    <label className="preservica__input--error">{passwordError}</label>
                </div>
                <div className="preservica__input-wrapper">
                    <input
                        className="preservica__button"
                        onClick={handleClick}
                        type="button"
                        value="Continue"
                    />
                </div>
            </form>
        </div>
    );
};

export default Login;

Login.propTypes = {
    emailAddress: PropTypes.string,
    password: PropTypes.string,
};
