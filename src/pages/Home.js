// src/pages/Home.js
import React from 'react';
import montageImage from '../assets/mtmontage.logo.png'; // Correct path to your image

function Home() {
  return (
    <div className="homepage">
      <h1>MT Montage & Inredning</h1>
      {/* The image displayed on the homepage */}
      <picture className="homepage-image">
        <img src={montageImage} alt="MT Montage" />
      </picture>
    </div>
  );
}

export default Home;
