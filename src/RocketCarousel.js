import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length; 

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div>
        <FaChevronRight className='right-arrow' onClick={nextSlide} />
        <FaChevronRight className='left-arrow' onClick={prevSlide} />
        {slides.map((slides, index) => {
            return (
                <div key={index}>
                    {index === current && }
            )
        })}
        </div>
    )
}