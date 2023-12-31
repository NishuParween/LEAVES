import React from 'react';
import './card.css';
import images from './images';



// Create a new Rating component
const Rating = ({ rating }) => {
  // Calculate the number of filled leaves and half-filled leaves
  const filledLeaves = Math.floor(rating);
  const hasHalfLeaf = rating % 1 >= 0.5;

  // Create an array with the required number of leaves
  const leaves = Array.from({ length: 5 }, (_, index) => (
    <img
      key={index}
      src={
        index < filledLeaves // Filled leaves
          ? images[`leaf${index + 1}.png`]
          : index === filledLeaves && hasHalfLeaf // Half-filled leaf (if applicable)
          ? images['leaf1.png']
          : images['empty-leaf.png'] // Empty leaves
      }
      alt={`Leaf ${index + 1}`}
      className="rating-leaf"
    />
  ));

  return <div className="rating-container">{leaves}</div>;
};



export const Card = ({ pname, image, rating, link }) => {

    return (
      <>
     <div className="card-container">
      <div className="flex flex-col max-w-sm mx-auto my-4 rounded overflow-hidden shadow-lg increased-opacity bg-white">
        <img className="w-full h-60 object-cover" src={image} alt="product" />
        <div className="px-4 py-2">
          <h2 className="font-bold text-lg mb-1">{pname}</h2>
          
          <Rating rating={rating} />
        </div>
        <div className="px-4 py-2 flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
            Save
          </button>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded">
              Visit
            </button>
          </a>
        </div>
      </div>
     </div>
      </>
    );
  };
  