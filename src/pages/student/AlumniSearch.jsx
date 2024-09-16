import React from 'react';

const AlumniSearch = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Find Alumni</h2>
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <input
          type="text"
          placeholder="Search for alumni..."
          className="w-full px-4 py-2 border rounded-md"
        />
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Search</button>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Search Results</h3>
        {/* Example search result */}
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h4 className="text-md font-bold">John Doe</h4>
          <p>Software Engineer at XYZ</p>
        </div>
      </div>
    </div>
  );
};

export default AlumniSearch;
