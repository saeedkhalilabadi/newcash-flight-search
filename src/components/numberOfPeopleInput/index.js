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
export default function NumberOfPeopleInput({ label = '', value = null, onChange = () => { }, error = false }) {


    return <div className="NumberOfPeople-main">
        <label className="NumberOfPeople-lable">{label}</label>
        <input className={`NumberOfPeople-input ${error && "NumberOfPeople-error"}`} value={value} onChange={onChange} placeholder="1 to 10 number" />
        <label className="NumberOfPeople-lable-error">{error && error}</label>
    </div>

}