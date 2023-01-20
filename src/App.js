import React, { useState } from 'react';
import './index.css'
import Button from './components/Button/Button'
import Puces from './components/Puces/Puces';

function App() {
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
            <img className="slider-image" src={images[currentImage].src} alt={images[currentImage].alt} />
            <Button className="previous-button" onClick={handlePrevious}>handlePrevious</Button>
            <Button className="next-button" onClick={handleNext}>handleNext</Button>
            <Puces className="puces" images={images} currentImage={currentImage} onClick={handleImageClick} />
        </div>
    );
}

export default App;






















// import { useState } from "react";

// function App() {
//     //State
//     const [images] = useState([
//         { id: 1, src: "/images/1.jpg" },
//         { id: 2, src: "/images/2.jpg" },
//         { id: 3, src: "/images/3.jpg" },
//         { id: 4, src: "/images/4.jpg" },
//         { id: 5, src: "/images/5.jpg" },
//         { id: 6, src: "/images/6.jpg" }
//       ]);
//  const [currentImageId, setCurrentImagesId] = useState(0);
//     //Comportements


//     //Render
//     return (
//         <div id="slider">
//             <img src={images[currentImageId].src} alt=""></img>
//         </div>
//     )
// }

// export default App;
