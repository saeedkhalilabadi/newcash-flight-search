import React from "react";
import './index.css';


/**
 * 
 * @param {string} lable - input lable
 * @param {string} value - input value
 * @callback onChange  - return value
 * @param {string|| false} error - text of error
 * @returns 
 */
export default function DateInput({ onChange = () => { }, value = '', lable = '', error = false }) {

    return <div className="dateInput-main">
        <lable className="dateInput-lable">{lable}</lable>
        <input
            className={`dateInput ${error && 'dateInput-error'}`}
            onChange={onChange}
            value={value}
            placeholder="yyyy-mm-dd"
        />
        <lable className='dateInput-label-error'>{error && error}</lable>
    </div>

}