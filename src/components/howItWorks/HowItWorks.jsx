import React from 'react'
import icon1 from "../../assets/icons/icon-1.png"
import icon2 from "../../assets/icons/icon-2.png"
import icon3 from "../../assets/icons/icon-3.png"
import icon4 from "../../assets/icons/icon-4.png"
import icon5 from "../../assets/icons/icon-5.png"
import icon6 from "../../assets/icons/icon-6.png"

const HowItWorks = () => {
    return (
        <section className='mt-5 mb-5 w-full'>
            <div className='container mx-auto px-2'>
                <h2 className='text-[36px] font-bold text-center'>How it works?</h2>
                <p className='text-[18px] mt-4 text-center mb-5'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
                <div className='mt-5 mb-5 flex items-center justify-center flex-wrap'>
                    <div className='flex flex-col items-center justify-center w-[400px] h-[254px] bg-skyBlue p-4'>
                        <img src={icon1} alt="Select Role" className='h-[74px] w-[74px]' />
                        <p className='text-[18px] mt-4 text-center'>Select Your Role and Sign Up</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-[400px] h-[254px] p-4'>
                        <img src={icon2} alt="Post Requirements" className='h-[74px] w-[74px]' />
                        <p className='text-[18px] mt-4 text-center'>Buyers Post Your Requirements</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-[400px] h-[254px] bg-skyBlue p-4'>
                        <img src={icon3} alt="Review" className='h-[74px] w-[74px]' />
                        <p className='text-[18px] mt-4 text-center'> Review, Select, and Contact the Best Suppliers</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-[400px] h-[254px] p-4'>
                        <img src={icon4} alt="Complete Profile" className='h-[74px] w-[74px]' />
                        <p className='text-[18px] mt-4 text-center'> Suppliers Complete your profile and get notified for opportunities</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-[400px] h-[254px] bg-skyBlue p-4'>
                        <img src={icon5} alt="Share Quote" className='h-[74px] w-[74px]' />
                        <p className='text-[18px] mt-4 text-center'>Contact to Buyers and Share your Quote for the service</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-[400px] h-[254px] p-4'>
                        <img src={icon6} alt="Connection" className='h-[74px] w-[74px]' />
                        <p className='text-[18px] mt-4 text-center'>Both the Parties can Connect and Make Business Leave a Feedback</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks