import React, { useEffect } from 'react';
import style from './About.module.css'
import HeadSection from '../headsection/HeadSection';

export default function About() {
    useEffect(() => {
        document.title = 'About';
    }, []);
    return (
        <div className={`d-flex justify-content-center align-items-center text-white ${style.about}`}>
            <div className="content">
                <HeadSection title="about component" color="white"/>
                <div className="container">
                    <div className="row px-5">
                        <div className="col-md-6 ps-md-5">
                        <p> Freelancer is a free bootstrap theme created by Route.
                            The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. 
                        </p>
                        </div>
                        <div className="col-md-6 pe-5">
                        <p> Freelancer is a free bootstrap theme created by Route.
                            The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. 
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
