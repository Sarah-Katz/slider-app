import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Puces from '../Puces/Puces';

function Slider() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = ([
        { id: 1, src: "/images/1.jpg", alt: "Street Art" },
        { id: 2, src: "/images/2.jpg", alt: "Panorama" },
        { id: 3, src: "/images/3.jpg", alt: "Architecture" },
        { id: 4, src: "/images/4.jpg", alt: "Immeuble" },
        { id: 5, src: "/images/5.jpg", alt: "Grande ville" },
        { id: 6, src: "/images/6.jpg", alt: "Paris" }
    ]);
    const [previousButtonDisabled, setPreviousButtonDisabled] = useState(false);
    const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
    const [autoPlay, setAutoPlay] = useState(false);

    function handlePrevious() {
        if (previousButtonDisabled) return;
        setPreviousButtonDisabled(true);
        setTimeout(() => {
            if (currentImage === 0) {
                setCurrentImage(images.length - 1);
            } else {
                setCurrentImage(currentImage - 1);
            }
            setPreviousButtonDisabled(false);
        }, 500);
    }

    function handleNext() {
        if (nextButtonDisabled) return;
        setNextButtonDisabled(true);
        setTimeout(() => {
            if (currentImage === images.length - 1) {
                setCurrentImage(0);
            } else {
                setCurrentImage(currentImage + 1);
            }
            setNextButtonDisabled(false);
        }, 500);
    }

    function handleImageClick(id) {
        setCurrentImage(id - 1);
    }

    function handleAutoPlay() {
        setAutoPlay(!autoPlay);
    }    

    useEffect(() => {
        if (autoPlay) {
            const intervalId = setInterval(() => {
                handleNext();
            }, 1000);
            return () => clearInterval(intervalId);
        }
    }, [autoPlay, handleNext]);

    return (
        <div className="slider-container">
            <div className="image-container">
                <img className="slider-image" src={images[currentImage].src} alt={images[currentImage].alt} />
                <Puces images={images} currentImage={currentImage} onClick={handleImageClick} className="puces-container" />
                <Button onClick={handlePrevious} buttonType="previous" disabled={previousButtonDisabled} />
                <Button onClick={handleNext} buttonType="next" disabled={nextButtonDisabled} />
                <Button onClick={handleAutoPlay} buttonType="autoPlay" autoPlay={autoPlay} />

            </div>
        </div>
    );
}

export default Slider;
