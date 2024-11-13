// src/pages/Showcase.js
import React from 'react';
import montageImage1 from '../assets/mtmontage.logo.png';
import montageImage2 from '../assets/mtmontage.logo.png';
import montageImage3 from '../assets/mtmontage.logo.png';


function Showcase() {
  const images = [montageImage1, montageImage2, montageImage3];

  return (
    <div className="showcasepage">
      <h1>Välkommen till mitt galleri</h1>
      <div className="showcase-gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Showcase ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Showcase;
