import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Card;
