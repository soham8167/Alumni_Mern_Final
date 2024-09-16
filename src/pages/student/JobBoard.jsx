import React from 'react';

const JobBoard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Job Board</h2>
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <h3 className="text-lg font-bold">Full-Stack Developer</h3>
        <p>Company: Tech Corp</p>
        <p>Location: Remote</p>
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">Apply Now</button>
      </div>
    </div>
  );
};

export default JobBoard;
