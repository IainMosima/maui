'use client';
import React, { useState } from 'react';
import "./Body.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

import { Autoplay } from 'swiper/modules';
import { Info } from '@/constants';

const Body = () => {
    const [investToggle, setInvestToggle] = useState(false);
    return (
        <div className='w-full group h-full cursor-pointer'>
            <div className='px-[1.8rem] py-[1.5rem] sm:px-[4rem] sm:pt-[4rem] flex sm:flex-row flex-col place-items-center justify-between w-full min-h-[80vh] h-full'>
                <div className='self-start flex flex-col w-full gap-[46vh] h-full group-hover:w-[70%] justify-center group-hover:text-left py-[2rem] ease-linear duration-[300ms] pt-[3rem]'>

                    <div className='flex flex-col gap-[3rem] w-full'>
                        <h1 className='font-semibold sm:text-5xl text-lg sm:text-center text-left sm:group-hover:text-left'>Ditch the Manuals, Embrace The Future</h1>
                        <h4 className='sm:text-2xl sm:text-center text-left sm:group-hover:text-left text-lg font-thin'>VR training that gets you industry- ready, fast!</h4>
                    </div>

                    <div className='sm:group-hover:hidden sm:flex hidden place-items-center w-full justify-end h-full'>
                        <div className='w-[30%]'>
                            <h3 className='font-semibold leading-[.2rem] sm:text-4xl text-3xl'>Outdated Training? Downtime Dilemma? Meet Maui.</h3>
                        </div>
                    </div>
                </div>

                <div className='w-full bg-background2 sm:pt-[3rem] pt-[1.5rem] sm:pb-[5rem] pb-[3.4rem] sm:px-[3.5rem] px-[2rem] sm:group-hover:flex sm:hidden flex place-items-start flex-col basis-[60%] gap-[1rem] h-full rounded-sm'>
                    <h2 className='text-grey tracking-[.25rem] sm:leading-[3rem] leading-[1.9rem] sm:text-[2vw] text-2xl font-bold'>Outdated Training? Downtime Dilemma? Meet Maui.</h2>

                    <div className='flex h-[5rem] w-full overflow-y-hidden place-items-center sm:gap-5 gap-3'>
                        <div className='w-auto'>
                            <h3 className='text-black sm:text-[2vw] text-[1.1rem] sm:tracking-[.2rem] font-bold'>VR is </h3>
                        </div>

                        <Swiper
                            direction={'vertical'}
                            className="mySwiper h-full w-auto"
                            loop={true}
                            mousewheel={true}
                            autoplay={{
                                delay: 1700,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                        >
                            {Info.virtualLabs.map((item, i) =>
                                <SwiperSlide key={i} className='sm:py-[1.2rem] py-[1.7rem] w-full'>
                                    <span className='text-purple sm:leading-[3rem]  sm:text-[2vw] font-bold'>{item}</span>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>

                    {/* <p className='text-black sm:text-[1.8vw] text-xl sm:leading-[3.3vw] leading-[1.7rem]'>
                        {` As VR/AR technology gains momentum and Generative AI approaches fruition, we're pioneering a transformative solution: bringing the laboratory experience directly to learners' eyes. Our platform merges immersive VR/AR environments with cutting-edge Generative AI algorithms, enabling hands-on STEM education from anywhere.`}
                    </p> */}

                    <div className='flex flex-col justify-center text-black text-xl gap-4'>
                        <p>Maui, our AI-powered training platform, revolutionizes how you prepare your industrial workforce.  Imagine:</p>
                        
                        <ul className='list-disc list-'>
                            {Info.vRImporttance.map((importance, i) => (
                                <li key={i} className='mb-2'>{importance}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Change to form in the future */}
                    <div className='w-full group h-full'>
                        <div className={`w-full flex cursor-pointer justify-center ${investToggle ? 'flex-col justify-center place-items-center' : 'sm:group-hover:flex-col sm:group-hover:justify-start'}  duration-150 ease-in-out`} >
                            <div className='w-full' onClick={() => setInvestToggle(prev => !prev)}>
                                <h4 className={`text-purple tracking-[.2rem] sm:text-[1.7vw] text-md ${investToggle ? 'text-left' : 'sm:group-hover:text-left text-center'} font-semibold`}>Invest in the future</h4>
                            </div>

                            <div className={`${investToggle ? 'flex flex-col sm:flex-row' : 'sm:group-hover:flex hidden'} sm:place-items-center  w-full sm:justify-between justify-center gap-5`}>
                                <input type='text' placeholder='Enter email' className='w-full rounded-full text-black sm:px-[2rem] px-[1.5rem] py-[1rem] text-xl bg-background3 outline-none focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent' />

                                <button className='border rounded-full border-purple px-[2rem] py-[1rem] font-bold text-purple sm:hover:bg-purple sm:hover:text-white ease-out duration-150'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Body