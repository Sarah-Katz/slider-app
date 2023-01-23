import React from 'react';

function Puces({ images, currentImage, onClick, className }) {
  // map through the images array passed as a prop
  // for each image, return a div with the class "puce" and an additional class "puce-active" if the currentImage index matches the index of the image in the array
  // also add an onClick event that calls the onClick function passed as a prop and passes the image's id as an argument
  // add a key prop for each div for better performance
  return (
    <div className={className}>
      {images.map((image, i) => (
        <div className={`puce ${currentImage === i ? "puce-active" : ""}`} onClick={() => onClick(image.id)} key={image.id} />
      ))}
    </div>
  );
}

export default Puces;
