import React from 'react';

const EventCard = ({ eventName, date, description }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h3 className="text-lg font-bold">{eventName}</h3>
      <p className="text-gray-500">{date}</p>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default EventCard; 
