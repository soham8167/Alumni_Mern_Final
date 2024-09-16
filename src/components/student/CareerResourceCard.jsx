import React from 'react';

const CareerResourceCard = ({ resourceTitle, description, link }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h3 className="text-lg font-bold">{resourceTitle}</h3>
      <p className="text-gray-600">{description}</p>
      <a href={link} className="text-blue-600 hover:underline mt-2 inline-block">
        View Resource
      </a>
    </div>
  );
};

export default CareerResourceCard;
