import React from 'react';

const EventManagement = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Event Management</h2>
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <h3 className="text-lg font-bold">Alumni Meet-Up</h3>
        <p>Date: 2024-09-20</p>
        <p>Description: A networking event for alumni and students.</p>
        <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded">Delete Event</button>
      </div>
    </div>
  );
};

export default EventManagement;
