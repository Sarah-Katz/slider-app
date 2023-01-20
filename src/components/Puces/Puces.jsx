import React from 'react';

function Puces({ images, currentImage, onClick, className }) {
  return (
    <div className={className}>
      {images.map((image, i) => (
        <div className={`puce ${currentImage === i ? "puce-active" : ""}`} onClick={() => onClick(image.id)} key={image.id} />
      ))}
    </div>
  );
}

export default Puces;
