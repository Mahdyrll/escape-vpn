import React from "react";
import style from './ButtonStyle.css'

const Button = ({text}) => {
    return (
        <button className="button-c" style={style}>{text}</button>
    );
};

export default Button;