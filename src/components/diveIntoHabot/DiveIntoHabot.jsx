import React, { useState } from 'react'
import { FaLongArrowAltRight, FaCheckCircle } from "react-icons/fa";

const DiveIntoHabot = () => {
    const [buyerClicked, setBuyerClicked] = useState(true)
    const [supplierClicked, setSupplierClicked] = useState(false)

    const onBuyerClick = () => {
        setBuyerClicked(true)
        setSupplierClicked(false)
    }

    const onSupplierClick = () => {
        setBuyerClicked(false)
        setSupplierClicked(true)
    }


    return (
        <section className='mt-5'>
            <div className='container mx-auto w-min sm:w-full px-2 mb-5 flex flex-col md:flex-row items-center justify-between h-full space-x-12'>
                <div className='w-[100%] md:w-[50%] mb-5'>
                    <h2 className='text-[36px] font-bold'>Ready to dive into <span className='text-customPurple'>HABOT?</span></h2>
                    <p className='text-[18px] mt-4'>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
                    <button className='bg-green-600 w-[318px] h-[54px] mt-4 text-white rounded text-[16px] font-semibold flex items-center justify-center '>Sign up Today ! <FaLongArrowAltRight className='ms-5' /> </button>
                </div>
                <ul className='flex md:justify-end flex-wrap w-[100%] md:w-[50%]'>
                    <li className='border border-orange-400 w-[40%] h-[50px] m-2 flex items-center justify-center text-[18px] text-gray-500 rounded'>Abu Dhabi</li>
                    <li className='border border-orange-400 w-[40%] h-[50px] m-2 flex items-center justify-center text-[18px] text-gray-500 rounded'>Dubai</li>
                    <li className='border border-orange-400 w-[40%] h-[50px] m-2 flex items-center justify-center text-[18px] text-gray-500 text-center rounded'>Sharjah & Ajman</li>
                    <li className='border border-orange-400 w-[40%] h-[50px] m-2 flex items-center justify-center text-[18px] text-gray-500 rounded'>Fujairah</li>
                    <li className='border border-orange-400 w-[40%] h-[50px] m-2 flex items-center justify-center text-[18px] text-gray-500 text-center rounded'>Ras AI Khaimah</li>
                    <li className='border border-orange-400 w-[40%] h-[50px] m-2 flex items-center justify-center text-[18px] text-gray-500 text-center rounded'>Umm AI Quwain</li>
                </ul>
            </div>
            <div className='container bg-customPurple mb-5 mt-5 mx-auto px-2 flex flex-col md:flex-row items-center justify-around w-full h-[624px] rounded'>
                <div className='w-full md:w-[45%]'>
                    <iframe width="100%" height="350" className='rounded' src="https://www.youtube.com/embed/IZLp-TZyDkQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title='Habot' allowFullScreen></iframe>
                </div>
                <div className='w-full md:w-[40%]'>
                    <div className='flex items-center justify-around space-x-4'>
                        <button onClick={onBuyerClick} className={`font-bold h-[47px] w-[200px] text-[26px] ${buyerClicked ? 'border-b-4 border-orange-500 text-orange-500' : 'border-b-0 border-white text-white'}`}>Buyer</button>
                        <button onClick={onSupplierClick} className={`font-bold h-[47px] w-[200px] text-[26px] ${supplierClicked ? 'border-b-4 border-orange-500 text-orange-500' : 'border-b-0 border-white text-white'}`}>Supplier</button>
                    </div>
                    {buyerClicked ?
                        (<div className='mt-5'>
                            <p className='flex items-center text-white text-[18px]'><span className='me-3 bg-white text-green-500 rounded-full'><FaCheckCircle /></span>Post your requirements.</p>
                            <p className='flex items-center text-white text-[18px]'><span className='me-3 bg-white text-green-500 rounded-full'><FaCheckCircle /></span>Sit back for multiple suppliers to contact you.</p>
                            <p className='flex items-center text-white text-[18px]'><span className='me-3 bg-white text-green-500 rounded-full'><FaCheckCircle /></span>Choose among the suppliers based on the ratings and reviews.</p>
                        </div>) :
                        (<div className='mt-5'>
                            <p className='flex items-center text-white text-[18px]'><span className='me-3 bg-white text-green-500 rounded-full'><FaCheckCircle /></span>Sit back for multiple suppliers to contact you.</p>
                            <p className='flex items-center text-white text-[18px]'><span className='me-3 bg-white text-green-500 rounded-full'><FaCheckCircle /></span>Choose among the suppliers based on the ratings and reviews.</p>
                            <p className='flex items-center text-white text-[18px]'><span className='me-3 bg-white text-green-500 rounded-full'><FaCheckCircle /></span>Post your requirements.</p>
                        </div>)}

                </div>
            </div>
            <div className='mt-5 mb-5 bg-skyBlue'>
                <div className='container mb-5 mt-5 mx-auto px-2 flex flex-col items-center justify-center md:flex-row md:justify-between h-[254px] w-full'>
                    <h2 className='text-[36px] font-bold mb-4 md:mb-0'>Let Suppliers <span className='underline decoration-orange'>Find You</span></h2>
                    <button className='bg-orange-600 text-white h-[54px] w-[216px] rounded'>Get Verified</button>
                </div>
            </div>
        </section>
    )
}

export default DiveIntoHabot