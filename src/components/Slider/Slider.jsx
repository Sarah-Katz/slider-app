import React, { useState } from 'react';
import Button from '../Button/Button'
import Puces from '../Puces/Puces';

function Slider() {
    const [currentImage, setCurrentImage] = useState(0);
    const [images] = useState([
        { id: 1, src: "/images/1.jpg", alt: "Street Art" },
        { id: 2, src: "/images/2.jpg", alt: "Panorama" },
        { id: 3, src: "/images/3.jpg", alt: "Architecture" },
        { id: 4, src: "/images/4.jpg", alt: "Immeuble" },
        { id: 5, src: "/images/5.jpg", alt: "Grande ville" },
        { id: 6, src: "/images/6.jpg", alt: "Paris" }
    ]);

    function handlePrevious() {
        if (currentImage === 0) {
            setCurrentImage(images.length - 1);
        } else {
            setCurrentImage(currentImage - 1);
        }
    }

    function handleNext() {
        if (currentImage === images.length - 1) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1);
        }
    }

    function handleImageClick(id) {
        setCurrentImage(id - 1);
    }

    return (
        <div className="slider-container">
            <div className="image-container">
                <img className="slider-image" src={images[currentImage].src} alt={images[currentImage].alt} />
                <Puces images={images} currentImage={currentImage} onClick={handleImageClick} className="puces-container" />
                <Button onClick={handlePrevious} buttonType="previous" />
                <Button onClick={handleNext} buttonType="next" />
            </div>
        </div>
    );
}

export default Slider;
