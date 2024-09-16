import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">E-Alumni</h1>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        <nav className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="block px-2 py-1 lg:inline lg:ml-4 hover:underline">Home</Link>
          <Link to="/login" className="block px-2 py-1 lg:inline lg:ml-4 hover:underline">Login</Link>
          <Link to="/signup" className="block px-2 py-1 lg:inline lg:ml-4 hover:underline">Sign Up</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
