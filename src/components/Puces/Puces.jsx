import React from 'react';

function Puces({ images, currentImage, onClick }) {
  return (
    <div>
      {images.map((image) => (
        <button
          key={image.id}
          style={{
            backgroundColor: currentImage === image.id - 1 ? 'black' : 'white',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            margin: '5px',
            color: 'white'
          }}
          onClick={() => onClick(image.id)}
        >
        </button>
      ))}
    </div>
  );
}

export default Puces;
