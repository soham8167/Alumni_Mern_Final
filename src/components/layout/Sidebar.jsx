import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'; // Hamburger icon
import { AiOutlineClose } from 'react-icons/ai'; // Close icon

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div className="fixed top-0 left-0 z-50 p-4">
        {!isOpen && (
          <button onClick={toggleSidebar} className="text-white">
            <GiHamburgerMenu size={24} />
          </button>
        )}
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-gray-100 w-64 h-screen p-4 fixed top-0 left-0 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-40`}
      >
        {/* Close Icon Positioned on the Right */}
        <div className="mb-4 flex justify-end">
          <button onClick={toggleSidebar} className="text-blue-600">
            <AiOutlineClose size={24} />
          </button>
        </div>

        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/alumni/dashboard" className="text-blue-600 hover:underline">
                Alumni Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/student/dashboard" className="text-blue-600 hover:underline">
                Student Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/admin/user-management" className="text-blue-600 hover:underline">
                Admin Management
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;
