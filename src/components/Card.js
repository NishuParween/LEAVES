import React from 'react';

export const Card = ({ pname, image, rating, link }) => {
    return (
      <div className="flex flex-col max-w-sm mx-auto my-4 rounded overflow-hidden shadow-lg">
        <img className="w-full h-60 object-cover" src={image} alt="product" />
        <div className="px-4 py-2">
          <h2 className="font-bold text-lg mb-1">{pname}</h2>
          <h3 className="text-black-600 mb-2">Rating: {rating}</h3>
        </div>
        <div className="px-4 py-2 flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
            Save
          </button>
          <a href={link}>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded">
              Visit
            </button>
          </a>
        </div>
      </div>
    );
  };
  