import React from "react";
import buttonStyle from "./Button.module.css";

export const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className={buttonStyle.buttonAdviceGenerator}>
            {children}
    </button>
    );
};

export default Button;