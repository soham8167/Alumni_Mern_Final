import React from 'react';

const AlumniProfile = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <img src="https://via.placeholder.com/150" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h3 className="text-lg font-bold text-center">Loser</h3>
        <p className="text-gray-600 text-center mb-4">Software Engineer at XYZ</p>
        <div className="text-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default AlumniProfile;
