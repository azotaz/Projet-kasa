import React from 'react';

export default function Rating({ rating }) {
    const stars = [];
    
    const ratingValue = parseInt(rating);
  
    for (let i = 1; i <= 5; i++) {
      if (i <= ratingValue) {
        stars.push(<span key={i} className="starfilled">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="star">&#9733;</span>);
      }
    }
    
    return <div className="rating">{stars}</div>;
  }