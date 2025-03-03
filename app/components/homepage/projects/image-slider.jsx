'use client'
import { useState } from 'react';

function ImageSlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full h-52 overflow-hidden">
            <img
                src={images[currentIndex].src}
                alt="Project"
                className="w-full h-full object-cover transition-transform duration-500"
            />
            <button
                onClick={prevSlide}
                className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentIndex === 0}
            >
                &#10094; {/* Left Arrow */}
            </button>
            <button
                onClick={nextSlide}
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded ${currentIndex === images.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentIndex === images.length - 1}
            >
                &#10095; {/* Right Arrow */}
            </button>
        </div>
    );
}

export default ImageSlider;
