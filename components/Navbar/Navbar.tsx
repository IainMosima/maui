'use client';
import React, { useState } from 'react';
import "./Navbar.scss";
import { Images, Info } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const pathName = usePathname().split('/')[1];
    
    return (
        <div className="flex justify-between place-items-start sm:h-auto h-[25rem] gap-3 top-0 fixed w-full z-[100]">
            <Link href='/' className="pl-[1.5rem] pt-3 sm:pl-[4rem] sm:pt-[4rem] w-auto h-auto p-3">
                {pathName === 'about-us' ? <Image src={Images.logo2} alt="logo" priority={true} width={200} /> : <Image src={Images.logo} alt="logo" priority={true} width={200} />}
                
            </Link>

            <div className='sm:pr-[4rem] sm:py-[2rem] h-full text-white'>
                <div className={`bg-background lg:flex hidden px-[2rem] py-[1rem] gap-6 h-[6rem] z-10  ${menuToggle ? 'expanded h-full w-full' : ''}`}>
                    <h3 className={`font-semibold text-2xl self-start tracking-[.3rem] ${menuToggle ? 'hidden' : ''}`}>FIELDS</h3>

                    <div className='flex flex-col justify-end pr-5'>
                        {/* harmbuger menu */}
                        <div className={`flex flex-col gap-[0.4rem] cursor-pointer ${menuToggle ? 'fixed top-[13%] left-[92%]' : ''}`} onClick={() => setMenuToggle(prev => !prev)}>
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
                                    <Link href={link.link} key={i} onClick={() => setMenuToggle(false)}>
                                        {link.subject}
                                    </Link>
                                ))}
                            </div>

                            <Link href='/about-us' className='text-purple tracking-[.3rem] text-xl font-bold' onClick={() => setMenuToggle(false)}>ABOUT US</Link>
                        </div>

                        <div className='h-full flex place-items-end w-full justify-center'>
                            <p className='tracking-[1] text-2xl text-grey font-semibold'>© 2024, maui.ai</p>
                        </div>

                    </div>

                </div>

                {/* mobile */}
                <div className='h-full flex place-items-end'>
                    <div className={`bg-background flex px-3 py-[1rem] gap-3 h-[16rem] z-10 sm:hidden ${menuToggle ? 'expanded h-screen w-full' : ''}`}>
                        {/* <h3 className={`font-semibold text-2xl self-start tracking-[.3rem] ${menuToggle ? 'hidden' : ''}`}>SUBJECTS</h3> */}
                        <Image src={Images.subjects} alt='subjects' width={40} className={`mt-5 ${menuToggle ? 'hidden' : ''}`} />


                        <div className='flex flex-col justify-start'>
                            {/* harmbuger menu */}
                            <div className={`flex flex-col gap-[0.4rem] cursor-pointer ${menuToggle ? 'fixed top-[18%] left-[90%]' : ''}`} onClick={() => setMenuToggle(prev => !prev)}>
                                <div className={`w-[2.2rem] h-1 bg-white rounded-full ${menuToggle ? 'rotate-45 origin-left' : ''} ease-out duration-150`}></div>
                                <div className={`w-[2.2rem] h-1 bg-white rounded-full ${menuToggle ? 'opacity-0' : ''} ease-out duration-150`}></div>
                                <div className={`w-[2.2rem] h-1 bg-white rounded-full -rotate ${menuToggle ? '-rotate-45 origin-left' : ''} ease-out duration-150`} ></div>
                            </div>
                        </div>

                        {/* links */}
                        <div className={`w-full h-full flex flex-col place-items-center justify-end pt-[12rem] ${!menuToggle ? 'hidden' : ''}`}>
                            <div className='flex flex-col place-items-center justify-end gap-[1.5rem] h-full'>
                                <div className='flex flex-col w-full justify-center place-items-center gap-[2rem] text-3xl font-bold'>
                                    {Info.links.map((link, i) => (
                                        <Link href={link.link} key={i} onClick={() => setMenuToggle(false)}>
                                            {link.subject}
                                        </Link>
                                    ))}
                                </div>

                                <Link href='/about-us' className='text-purple tracking-[.3rem] text-xl font-bold' onClick={() => setMenuToggle(false)}>ABOUT US</Link>
                            </div>

                            <div className='h-full flex place-items-end w-full justify-center'>
                                <p className='tracking-[1] text-2xl text-grey font-semibold'>© 2024, maui.ai</p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>


    )
}

export default Navbar