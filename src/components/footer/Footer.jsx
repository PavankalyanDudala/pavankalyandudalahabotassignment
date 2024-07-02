import React from 'react'
import logo from "../../assets/images/footer-logo.png"
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram, FaRegCopyright } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className='bg-darkNavyBlue mt-5 h-[232px] w-full flex items-center justify-center'>
            <div className='container mx-auto px-2'>
                <hr className='hidden md:block border-gray-600' />
                <div className='flex flex-col md:flex-row items-center justify-between p-5'>
                    <div className='flex flex-col md:flex-row items-center justify-center'>
                        <div className='me-0 mb-3 md:me-5 md:mb-0'>
                            <img src={logo} alt='Logo' className='h-[40px] w-[206px]' />
                            <p className='hidden md:flex flex items-center text-white text-[16px] mt-5'><span className='me-2'><FaRegCopyright /></span>R Singhania
                            </p>
                        </div>
                        <div className='flex items-start justify-center space-x-12 ms-0 mb-3 md:ms-5 md:mb-0'>
                            <ul className='text-white text-[16px] font-semibold'>
                                Company
                                <li className='text-[14px] font-normal'>About</li>
                                <li className='text-[14px] font-normal'>FAQ</li>
                            </ul>
                            <ul className='text-white text-[16px] font-semibold'>
                                Terms
                                <li className='text-[14px] font-normal'>Data Privacy</li>
                                <li className='text-[14px] font-normal'>Terms</li>
                                <li className='text-[14px] font-normal'>Accessibility</li>
                            </ul>
                            <ul className='text-white text-[16px] font-semibold'>
                                Related
                                <li className='text-[14px] font-normal'>Find Buyers</li>
                                <li className='text-[14px] font-normal'>Feedback</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex space-x-4'>
                        <a href='https://in.linkedin.com' target='_blank' rel="noreferrer" className='text-white bg-transparent border border-gray-500 rounded-full p-2'><FaLinkedinIn className='h-[18px] w-[18px]' /></a>
                        <a href='https://twitter.com/?lang=en-in' target='_blank' rel="noreferrer" className='text-white bg-transparent border border-gray-500 rounded-full p-2'><FaTwitter className='h-[18px] w-[18px]' /></a>
                        <a href='https://www.facebook.com' target='_blank' rel="noreferrer" className='text-white bg-transparent border border-gray-500 rounded-full p-2'><FaFacebookF className='h-[18px] w-[18px]' /></a>
                        <a href='https://www.instagram.com' target='_blank' rel="noreferrer" className='text-white bg-transparent border border-gray-500 rounded-full p-2'><FaInstagram className='h-[18px] w-[18px]' /></a>
                    </div>
                </div>
                <hr className='hidden md:block border-gray-600' />
            </div>
        </footer>
    )
}

export default Footer