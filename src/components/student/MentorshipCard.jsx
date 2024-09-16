import React from 'react';

const MentorshipCard = ({ mentorName, description, expertise }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h3 className="text-lg font-bold">{mentorName}</h3>
      <p className="text-gray-600">{expertise}</p>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default MentorshipCard;
