import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './About.module.css';

const Carousel = ({ images = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={styles.caro}>
            <div className="relative h-[400px] w-full overflow-hidden rounded">
                <div 
                    className="absolute w-full h-full transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    <div className="flex h-full">
                        {images.map((image, index) => (
                            <div key={index} className="relative min-w-full h-[400px] flex-shrink-0">
                                <Image
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    priority={index === currentIndex} // optimize the loading of the current slide
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
                    onClick={goToPrevSlide}
                >
                    ←
                </button>
                <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
                    onClick={goToNextSlide}
                >
                    →
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors ${
                                currentIndex === index ? 'bg-white' : 'bg-white/50'
                            }`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
