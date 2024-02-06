import React, { useEffect } from 'react';
import imgSrc from '../../assets/imgs/notfound5.jpg';
import style from './NotFound.module.css'

export default function NotFound() {
    useEffect(() => {
        document.title = '404';
    }, []);
    return (
    <div className=' d-flex justify-content-center align-items-center'>
    <img className={`img-fluid ${style.notFound}`} src={imgSrc} alt="notfound" />
    </div>
    )
}
