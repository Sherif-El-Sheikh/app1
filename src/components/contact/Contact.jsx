import React, { useEffect } from 'react';
import style from './Contact.module.css'
import HeadSection from '../headsection/HeadSection';
import InputField from '../inputs/InputField';

export default function Contact() {
    useEffect(() => {
        document.title = 'Contact';
    }, []);
    return (
    <div className={`mb-4 ${style.contact}`}>
        <div className="container">
        <HeadSection title="conatct section" color='rgb(44, 62, 80)'/>
        <form action="" className='mx-auto mt-5 p-3 '>
            <InputField id="userName" label="userName" type="text" name="userName" placeholder="userName"/>
            <InputField id="userAge" label="userAge" type="number" name="userAge" placeholder="userAge"/>
            <InputField id="userEmail" label="userEmail" type="email" name="userEmail" placeholder="userEmail"/>
            <InputField id="userPassword" label="userPassword" type="password" name="userPassword" placeholder="userPassword"/>
        <button className="btn mt-4 text-white" style={{backgroundColor: '#1abc9c'}}> send Message </button>
        </form>
        </div>
    </div>
    )
}
