import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";

 export default function RatingComponent() {
    const ratingChanged = (newRating) => {
        
      };

 
  return (
    <ReactStars
    value={4}
    count={5}
    onChange={ratingChanged}
    size={30}
    activeColor="#00a500"
  />
    
    
  )}