import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styling/Header.css';

export const Header = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="hDiv">
            <div className='headerDiv'>
                <h2>Don't just take our word for it <br />Hear from our clients</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque tellus <br /> interdum venenatis auctor et nibh. Rhoncus a, sed lobortis nisi.</p>
            </div>
            <div className="sliderdiv" style={{ width: "100%", margin: "auto", padding: "10px" }}>
                <Slider {...settings}>
                    <div className="cardDiv">
                        <div className="imgDiv">
                        <img src="card.png" alt="A card Image"/>
                        </div>
                        <div className="Para">
                        <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam totam, maxime sed, a minima sunt ullam quo deserunt fugit facere, pariatur provident expedita. Blanditiis quibusdam molestias quas harum officiis nihil.</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};