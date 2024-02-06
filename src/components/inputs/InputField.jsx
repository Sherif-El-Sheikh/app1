import React, { useState } from 'react';
import style from '../contact/Contact.module.css'

export default function InputField(inputData) {
    let {id, label, type, name, placeholder} = inputData;
    const [value, setValue] = useState('');
    let changeValueInput = (e)=> {
        setValue(e.target.value)
    }
    return (
    <div>
            <label htmlFor={id} className={`position-relative top-0 ${value ? '' : style.topLabel}`}>{label} :</label>
            <input onChange={changeValueInput} id={id} type={type} name={name} className="form-control border-0 border-bottom py-3 mb-2 shadow-sm position-relative" placeholder={placeholder}/>
    </div>
    )
}
