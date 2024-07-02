// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/habot-logo.png';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import Modal from '../modal/Modal'

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    setDropdownOpen(true); 
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <header className='h-[86px] w-full bg-white fixed'>
        <div className='container mx-auto px-2 flex items-center justify-between h-full w-full'>
          <div>
            <img src={logo} alt='Logo' className='w-[182px] h-[44px]' />
          </div>
          
          <nav className='hidden md:flex items-center space-x-4'>
            <ul className='flex space-x-4'>
              <li className='text-[16px] text-gray-500'><Link to="/">Find Suppliers</Link></li>
              <li>
                <div className='relative group'>
                  <button className='flex items-center text-[16px] text-gray-500'>
                    Find Service Tags
                    <FaChevronDown className='ml-1 w-2 h-2' />
                  </button>
                  <ul className='absolute left-0 hidden space-y-2 bg-white text-black p-4 group-hover:block rounded'>
                    <li className='text-[16px] text-gray-500'><Link to="/">Service 1</Link></li>
                    <li className='text-[16px] text-gray-500'><Link to="/">Service 2</Link></li>
                    <li className='text-[16px] text-gray-500'><Link to="/">Service 3</Link></li>
                  </ul>
                </div>
              </li>
            </ul>
            <button 
              className='ml-4 text-[16px] w-[194px] h-[50px] border border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white font-semibold'
              onClick={toggleModal}
            >
              Login / Signup
            </button>
          </nav>
          
          <button className='md:hidden text-gray-500' onClick={toggleSidebar}>
            <FaBars className='w-6 h-6' />
          </button>
        </div>

        {isSidebarOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-50 z-50'>
            <div className='fixed left-0 top-0 w-64 h-full bg-white z-50 p-4'>
              <div className='flex items-center justify-between'>
                <img src={logo} alt='Logo' className='w-[150px] h-[36px]' />
                <button className='text-gray-500' onClick={toggleSidebar}>
                  <FaTimes className='w-6 h-6' />
                </button>
              </div>
              <ul className='mt-8 space-y-4'>
                <li className='text-[16px] text-gray-500'><Link to="/" onClick={toggleSidebar}>Find Suppliers</Link></li>
                <li>
                  <div className='relative'>
                    <button className='flex items-center text-[16px] text-gray-500' onClick={toggleDropdown}>
                      Find Service Tags
                      <FaChevronDown className='ml-1 w-2 h-2' />
                    </button>
                    {isDropdownOpen && (
                      <ul className='space-y-2 bg-white text-black p-4 rounded'>
                        <li className='text-[16px] text-gray-500'><Link to="/" onClick={toggleSidebar}>Service 1</Link></li>
                        <li className='text-[16px] text-gray-500'><Link to="/" onClick={toggleSidebar}>Service 2</Link></li>
                        <li className='text-[16px] text-gray-500'><Link to="/" onClick={toggleSidebar}>Service 3</Link></li>
                      </ul>
                    )}
                  </div>
                </li>
                <li>
                  <button 
                    className='w-full text-[16px] h-[50px] border border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white font-semibold'
                    onClick={toggleModal}
                  >
                    Login / Signup
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
}

export default Header;
