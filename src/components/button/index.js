

import React from "react";
import './index.css';

export default function Button({ children, onClick = () => { }, disabled = false }) {

    return <button onClick={onClick} disabled={disabled} className="thisButton">
        {children}

    </button>

}