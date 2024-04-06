'use client';
import React, { useState } from 'react';
import "./Navbar.scss";
import { Images, Info } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';



const DesktopNavbar = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    return (
        <div className='sm:pr-[4rem] sm:pt-[4rem] h-full'>
            <div className={`bg-background lg:flex hidden px-[2rem] py-[1rem] gap-6 h-[6rem] z-10 ${menuToggle ? 'expanded h-full w-full' : ''}`}>
                <h3 className={`font-semibold text-2xl self-start tracking-[.3rem] ${menuToggle ? 'hidden' : ''}`}>SUBJECTS</h3>

                <div className='flex flex-col justify-end pr-5'>
                    {/* harmbuger menu */}
                    <div className={`flex flex-col gap-[0.4rem] cursor-pointer fixed ${menuToggle ? 'top-[15%] left-[94%]' : ''}`} onClick={() => setMenuToggle(prev => !prev)}>
                        <div className={`w-[2.2rem] h-1 bg-white rounded-full ${menuToggle ? 'rotate-45 origin-left' : ''} ease-out duration-150`}></div>
                        <div className={`w-[2.2rem] h-1 bg-white rounded-full ${menuToggle ? 'opacity-0' : ''} ease-out duration-150`}></div>
                        <div className={`w-[2.2rem] h-1 bg-white rounded-full -rotate ${menuToggle ? '-rotate-45 origin-left' : ''} ease-out duration-150`} ></div>
                    </div>
                </div>

                {/* links */}
                <div className={`w-full h-full flex flex-col place-items-center justify-center ${!menuToggle ? 'hidden' : ''}`}>
                    <div className='flex flex-col place-items-center gap-[1.5rem] h-full justify-end'>
                        <div className='flex w-full justify-center place-items-center gap-[5rem] text-3xl font-bold'>
                            {Info.links.map((link, i) => (
                                <Link href={link.link} key={i}>
                                    {link.subject}
                                </Link>
                            ))}
                        </div>

                        <Link href='#' className='text-purple tracking-[.3rem] text-xl font-bold'>ABOUT US</Link>
                    </div>

                    <div className='h-full flex place-items-end w-full justify-center'>
                        <p className='tracking-[1] text-2xl text-grey font-semibold'>© 2024, maui.ai</p>
                    </div>

                </div>

            </div>


            <div className='h-full flex place-items-end'>
                <div className={`bg-background flex px-[2rem] py-[1rem] gap-3 h-[16rem] z-10 sm:hidden ${menuToggle ? 'expanded h-[100%] w-full' : ''}`}>
                    {/* <h3 className={`font-semibold text-2xl self-start tracking-[.3rem] ${menuToggle ? 'hidden' : ''}`}>SUBJECTS</h3> */}
                    <Image src={Images.subjects} alt='subjects' width={40} className={`mt-5 ${menuToggle ? 'hidden' : ''}`} />

                    <div className='flex flex-col justify-start pr-[1rem]'>
                        {/* harmbuger menu */}
                        <div className={`flex flex-col gap-[0.4rem] cursor-pointer fixed ${menuToggle ? 'top-[12%] left-[90%]' : ''}`} onClick={() => setMenuToggle(prev => !prev)}>
                            <div className={`w-[2.2rem] h-1 bg-white rounded-full ${menuToggle ? 'rotate-45 origin-left' : ''} ease-out duration-150`}></div>
                            <div className={`w-[2.2rem] h-1 bg-white rounded-full ${menuToggle ? 'opacity-0' : ''} ease-out duration-150`}></div>
                            <div className={`w-[2.2rem] h-1 bg-white rounded-full -rotate ${menuToggle ? '-rotate-45 origin-left' : ''} ease-out duration-150`} ></div>
                        </div>
                    </div>

                    {/* links */}
                    <div className={`w-full h-full flex flex-col place-items-center justify-end pt-[5rem] ${!menuToggle ? 'hidden' : ''}`}>
                        <div className='flex flex-col place-items-center justify-end gap-[1.5rem] h-full'>
                            <div className='flex flex-col w-full justify-center place-items-center gap-[2rem] text-3xl font-bold'>
                                {Info.links.map((link, i) => (
                                    <Link href={link.link} key={i}>
                                        {link.subject}
                                    </Link>
                                ))}
                            </div>

                            <Link href='#' className='text-purple tracking-[.3rem] text-xl font-bold'>ABOUT US</Link>
                        </div>

                        <div className='h-full flex place-items-end w-full justify-center'>
                            <p className='tracking-[1] text-2xl text-grey font-semibold'>© 2024, maui.ai</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default DesktopNavbar