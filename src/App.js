import { useState } from "react";

function App() {
    //State
    const [images] = useState([
        { id: 1, src: "/images/1.jpg" },
        { id: 2, src: "/images/2.jpg" },
        { id: 3, src: "/images/3.jpg" },
        { id: 4, src: "/images/4.jpg" },
        { id: 5, src: "/images/5.jpg" },
        { id: 6, src: "/images/6.jpg" }
      ]);
 const [currentImageId, setCurrentImagesId] = useState(0);
    //Comportements


    //Render
    return (
        <div id="slider">
            <img src={images[currentImageId].src} alt=""></img>
        </div>
    )
}

export default App;
