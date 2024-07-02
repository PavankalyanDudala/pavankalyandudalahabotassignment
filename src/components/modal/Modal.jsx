import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='fixed inset-0 bg-black bg-opacity-50'></div>
      <div className='bg-white p-8 rounded shadow-lg z-10 w-full max-w-md'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold'>Login / Signup</h2>
          <button onClick={onClose} className='text-gray-500'>
            <FaTimes className='w-6 h-6' />
          </button>
        </div>
        <form>
          <div className='mb-4'>
            <label className='block mb-2'>Name</label>
            <input type='text' className='w-full p-2 border rounded' />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Email</label>
            <input type='email' className='w-full p-2 border rounded' />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Mobile Number</label>
            <input type='text' className='w-full p-2 border rounded' />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Password</label>
            <input type='password' className='w-full p-2 border rounded' />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Confirm Password</label>
            <input type='password' className='w-full p-2 border rounded' />
          </div>
          <button type='submit' className='w-full p-2 bg-green-600 text-white rounded'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
