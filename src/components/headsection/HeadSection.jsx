import React from 'react';
import style from './HeadSection.module.css'

export default function HeadSection({color, title}) {
    return (
    <div style={{color: `${color}`}} className='text-center pt-4'>
        <h2 className='text-uppercase fs-1 fw-bolder mb-3'>{title}</h2>
        <div className='d-flex align-items-center justify-content-center mb-3'>
            <div style={{backgroundColor: color}} className={`me-3 ${style.line}`}></div>
            <i className="fa-solid fa-star"></i>
            <div style={{backgroundColor: color}} className={`ms-3 ${style.line}`}></div>
        </div>
    </div>
    )
}
