import React, { useState, useEffect } from "react";
import "../styling/Header.css"; // Path to your CSS file

export const Header = () => {
    const testimonials = [
        {
            img: "card.png",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            name: "John Doe",
            role: "Manager, XYZ Company",
            logo: "amazon-logo.png",
        },
        {
            img: "card.png",
            text: "Another testimonial text goes here. Feel free to customize.",
            name: "Jane Smith",
            role: "CEO, ABC Company",
            logo: "google-logo.png",
        },
        {
            img: "card.png",
            text: "A third testimonial to demonstrate the slider.",
            name: "Robert Brown",
            role: "CTO, DEF Company",
            logo: "microsoft-logo.png",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="hDiv">
            <div className="headerDiv">
                <h2>Don't just take our word for it <br /> Hear from our clients</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque tellus <br /> interdum venenatis auctor et nibh. Rhoncus a, sed lobortis nisi.</p>
            </div>
            <div className="sliderdiv">
                <div className="sliderContent">
                    <button onClick={goToPrev} className="prevButton">&#8249;</button>
                    <div className="cardDiv">
                        <img src={testimonials[currentIndex].img} alt="Testimonial" />
                        <div className="Para">
                            <p>{testimonials[currentIndex].text}</p>
                            <div className="name">{testimonials[currentIndex].name}</div>
                            <div className="role">{testimonials[currentIndex].role}</div>
                            <div className="company">
                                <img src={testimonials[currentIndex].logo} alt="Company Logo" />
                            </div>
                        </div>
                    </div>
                    <button onClick={goToNext} className="nextButton">&#8250;</button>
                </div>
            </div>
        </div>
    );
};