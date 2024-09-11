import React, { useState } from 'react';

function Card({ title, features, image }) {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <ul className="text-gray-700 text-base">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span
          className={`text-2xl cursor-pointer ${liked ? 'text-red-500 scale-125' : 'text-gray-500'}`}
          onClick={handleLikeClick}
        >
          {liked ? '❤️' : '♡'}
        </span>
      </div>
    </div>
  );
}

export default Card;
