import React, { useState } from "react";
import Menu from "./lib/menu";
import './index.css';

/**
 * 
 * @param {string} lable - input lable
 * @param {string} value - input value
 * @param {array} data - list of city for select
 * @callback onChange  - return value
 * @callback onSelect  - return object of selected city
 * @param {string|| false} error - text of error
 * @returns 
 */

export default function SelectBox({ lable = '', value = '', error = false, data = [], onSelect = () => { }, onChange = () => { } }) {
    const [menuOpen, setMenuOpen] = useState(false);


    const handelOpenMenu = () => {
        setMenuOpen(true);
    }
    const handelCloseMenu = () => {
        setTimeout(() => {
            setMenuOpen(false);
        }, 150);
    }
    const handelSelect = (param) => {
        setMenuOpen(false);
        onSelect(param);


    }

    return <div className="selectBox-main">
        <lable className="selectBox-lable">{lable}</lable>
        <input
            className={`selectBox-input ${error && 'error'}`}
            value={value}
            type="text"
            onChange={onChange}
            onFocus={handelOpenMenu}
            onBlur={handelCloseMenu}
        />
        <lable className="lable-error">{error && error}</lable>
        <Menu data={data} visible={menuOpen} onSelect={handelSelect} />
    </div>
}