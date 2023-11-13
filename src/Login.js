import React, { useState } from "react";
import PropTypes from "prop-types";

const Login = ({ ...props }) => {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    function handleClick(e) {
        console.log(`${e.target.innerHTML} button was clicked`);
    }

    return (
        <div>
            <h2 className="preservica__title">Login</h2>
            <div className="preservica__container">
                <div className="preservica__input-wrapper">
                    <input
                        type="email"
                        value={emailAddress}
                        placeholder="Email Address"
                        onChange={(e) => setEmailAddress(e.target.value)}
                        className="preservica__input"
                    />
                </div>
                <div className="preservica__input-wrapper">
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="preservica__input"
                    />
                </div>
                <div className="preservica__input-wrapper">
                    <input
                        className="preservica__button"
                        type="button"
                        onClick={handleClick}
                        value="Continue"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;

Login.propTypes = {
    emailAddress: PropTypes.string,
    password: PropTypes.string,
};
