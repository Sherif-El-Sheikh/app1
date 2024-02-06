import React, { useEffect, useState } from 'react';
import HeadSection from '../headsection/HeadSection';
import style from './Portfolio.module.css';
import image1 from "../../assets/imgs/poert1.png";
import image2 from "../../assets/imgs/port2.png";
import image3 from "../../assets/imgs/port3.png";
import image4 from "../../assets/imgs/poert1.png";
import image5 from "../../assets/imgs/port2.png";
import image6 from "../../assets/imgs/port3.png";
import $ from 'jquery';

export default function Portfolio() {
    let images = [image1, image2, image3, image4, image5, image6];
    const [currentImage, setCurrentImage] = useState("");
    const [currentIndex, setCurrentIndex] = useState("");
    let displayImage = (image, index) => {
        setCurrentImage(image);
        setCurrentIndex(index);
        // console.log(image);
        $(".current").removeClass('d-none');
    };
    let effect = ()=> {
        if(!$(".current").hasClass('d-none')){
            $(".current").on("click", function() {
                $(".current").addClass('d-none');
            });
            $(".current img").on("click", function(event) {
                event.stopPropagation();
            });
        }
    }
    useEffect(effect, [currentImage, currentIndex]);
    
    useEffect(() => {
        document.title = 'Portfolio';
    }, []);

    return (
    <div className={`mb-4 ${style.portfolio}`}>
        <div className="portfolio-contain">
        <HeadSection title="portfolio component" color='rgb(44, 62, 80)'/>
        <div className="container">
            <div className="row g-5">
                {images.map((image, index)=> {
                return <div className="col-md-6 col-lg-4" key={index}>
                <div className="position-relative rounded-3 overflow-hidden ">
                    <img className="w-100 rounded-3" src={image} alt={`port ${index + 1}`}/>
                        <div onClick={() => displayImage(image, index)} className={`position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center ${style.layer}`}>
                            <i className="fa-solid fa-plus fa-6x text-white"></i>
                            </div>
                            </div>
                </div>
                })}
            </div>
        </div>
        </div>
        <div className={`pt-4 position-fixed start-0 top-0 w-100 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center d-none current ${style.model}`}>
            <img src={currentImage} alt={`port ${currentIndex + 1}`}/>
            </div>
    </div>
    )
}

