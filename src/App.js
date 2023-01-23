import React from 'react';
import Slider from './components/Slider/Slider';
import './components/Slider/Slider.css';


function App() {
    const images = ([
        { id: 1, src: "/images/1.jpg", alt: "Street Art" },
        { id: 2, src: "/images/2.jpg", alt: "Panorama" },
        { id: 3, src: "/images/3.jpg", alt: "Architecture" },
        { id: 4, src: "/images/4.jpg", alt: "Immeuble" },
        { id: 5, src: "/images/5.jpg", alt: "Grande ville" },
        { id: 6, src: "/images/6.jpg", alt: "Paris" }
    ]);

    return (
        <div className="App">
            <Slider images={images} />
        </div>
    );
}

export default App;
