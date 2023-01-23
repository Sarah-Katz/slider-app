// Importing the necessary modules for the component
import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Puces from '../Puces/Puces';

// The Slider component, which takes in an "images" prop
function Slider({ images }) {

    /* STATES */
    // State for the current image being displayed
    const [currentImage, setCurrentImage] = useState(0);
    // State for whether the previous button is disabled or not
    const [previousButtonDisabled, setPreviousButtonDisabled] = useState(false);
    // State for whether the next button is disabled or not
    const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
    // State for whether the autoplay feature is active or not
    const [autoPlay, setAutoPlay] = useState(false);

    /* FUNCTIONS */

    // Function for the previous button
    function handlePrevious() {
        // If the button is currently disabled, do nothing
        if (previousButtonDisabled) return;
        // Set the button to disabled
        setPreviousButtonDisabled(true);
        // After a delay, change the current image and re-enable the button
        setTimeout(() => {
            if (currentImage === 0) {
                setCurrentImage(images.length - 1);
            } else {
                setCurrentImage(currentImage - 1);
            }
            setPreviousButtonDisabled(false);
        }, 500);
    }

    // Function for the next button
    // eslint-disable-next-line
    function handleNext() {
        // If the button is currently disabled, do nothing
        if (nextButtonDisabled) return;
        // Set the button to disabled
        setNextButtonDisabled(true);
        // After a delay, change the current image and re-enable the button
        setTimeout(() => {
            if (currentImage === images.length - 1) {
                setCurrentImage(0);
            } else {
                setCurrentImage(currentImage + 1);
            }
            setNextButtonDisabled(false);
        }, 500);
    }

    // Function for clicking on a "puce" button to go to a specific image
    function handleImageClick(id) {
        setCurrentImage(id - 1);
    }

    // Function for the autoplay button
    function handleAutoPlay() {
        setAutoPlay(!autoPlay);
    }

    // The useEffect hook is used to handle the autoplay functionality of the slider.
    useEffect(() => {
        if (autoPlay) {
            // Set an interval to continuously call the handleNext function
            const intervalId = setInterval(() => {
                handleNext();
            }, 1000);
            // Return a function to clear the interval when the component unmounts
            return () => clearInterval(intervalId);
        }
    }, [autoPlay, handleNext]);

    return (
        // The entire component is wrapped in a 'slider-container' div for styling purposes.
        <div className="slider-container">
            <div className="image-container">
                {/* Display the current image */}
                <img className="slider-image" src={images[currentImage].src} alt={images[currentImage].alt} />
                {/* Render the puces component with the images array, currentImage index, and onClick function */}
                <Puces images={images} currentImage={currentImage} onClick={handleImageClick} className="puces-container" />
                {/* Render previous and next buttons with their corresponding onClick functions and disabled state */}
                <Button onClick={handlePrevious} buttonType="previous" disabled={previousButtonDisabled} />
                <Button onClick={handleNext} buttonType="next" disabled={nextButtonDisabled} />
                {/* Render the autoplay button with the onClick function and the current autoplay state */}
                <Button onClick={handleAutoPlay} buttonType="autoPlay" autoPlay={autoPlay} />
            </div>
        </div>
    );
}

export default Slider;
