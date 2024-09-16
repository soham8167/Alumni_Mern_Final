import React from 'react';

const NetworkingPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Networking Opportunities</h2>
      <p>Join fellow alumni in professional networking events and sessions.</p>
      <div className="bg-white p-4 shadow-lg rounded-lg mt-4">
        <h3 className="text-lg font-bold">Upcoming Event</h3>
        <p>Date: 2024-09-20</p>
        <p>Description: A great opportunity to network with fellow alumni.</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Register Now</button>
      </div>
    </div>
  );
};

export default NetworkingPage;
