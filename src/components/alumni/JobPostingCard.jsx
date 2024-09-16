import React from 'react';

const JobPostingCard = ({ title, company, description }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-700">{company}</p>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default JobPostingCard;
