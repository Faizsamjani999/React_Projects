import React, { useState } from 'react';
import './Sidebar.css';
import { FaBars, FaHome, FaProductHunt, FaPlusCircle, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sidebar-toggler" onClick={toggleSidebar}>
        <FaBars className="icon" />
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Link to={"/"} className="sidebar-item">
          <FaHome className="icon" />
          <span>Dashboard</span>
        </Link>
        <Link to={"/product-page"} className="sidebar-item">
          <FaProductHunt className="icon" />
          <span>Product Page</span>
        </Link>
        <Link to={"/add-product"} className="sidebar-item">
          <FaPlusCircle className="icon" />
          <span>Add Product</span>
        </Link>
        <div className="sidebar-item">
          <FaSignOutAlt className="icon" />
          <span>Logout</span>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
