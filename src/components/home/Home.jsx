import React, { useEffect } from 'react';
import style from './Home.module.css';
import img from '../../assets/imgs/avataaars.svg'
import HeadSection from '../headsection/HeadSection';
import { useLocation } from 'react-router-dom';

export default function Home() {
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/') {
            document.title = 'APP1';
        } else {
            document.title = 'Home';
        }
    }, [location.pathname]);
    return (
        <div className={`d-flex justify-content-center align-items-center text-white ${style.home}`}>
            <div className="content text-center">
        <img className={`mb-3 ${style.avatar}`} src={img} alt="avatar"/>
        <HeadSection title="start Framework" color='white'/>
        <div>Graphic Artist - Web Designer - Illustrator</div>
            </div>
        </div>
    )
}
