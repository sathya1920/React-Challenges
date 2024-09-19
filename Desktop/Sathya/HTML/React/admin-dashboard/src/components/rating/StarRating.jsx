import React, { useState } from "react";

const StarRating = () => {
  let limit = 5;
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleClick = (index) => {
    setRating(index + 1);
  };

  /*   <span
        style={{cursor:"pointer"}}
          key={index}
          onClick={() => handleClick(index)}
          onMouseEnter={() => setHover(index + 1)}
          onMouseLeave={() => setHover(0)}
        >
          {index < (hover ||  rating) ? (
            <i class="fas fa-star" style={{ color: "orange" }}></i>
          ) : (
            <i class="far fa-star"></i>
          )}
        </span> */
  return (
    <div className="star-rating">
      {[...Array(limit)].map((star, index) => (
        <>
          <span
            style={{ cursor: "pointer" }}
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => setHover(0)}
          >
            {index < (hover || rating) ? (
              <i class="fas fa-star" style={{ color: "orange" }}></i>
            ) : (
              <i class="far fa-star"></i>
            )}
          </span>
        </>
      ))}
      <p>Your rating is: {rating}</p>
    </div>
  );
};

export default StarRating;
