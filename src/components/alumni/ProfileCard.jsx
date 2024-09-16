import React from 'react';

const ProfileCard = ({ name, bio, image }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <img src={image} alt={name} className="w-16 h-16 rounded-full mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-center">{name}</h3>
      <p className="text-gray-600 text-center">{bio}</p>
    </div>
  );
};

export default ProfileCard;
