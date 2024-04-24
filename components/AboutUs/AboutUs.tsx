import React from 'react';
import "./AboutUs.scss";
import Image from 'next/image';
import { Info } from '@/constants';

const AboutUs = () => {

    return (
        <div className=''>
            <div className='bg-background2 w-full min-h-screen flex flex-col px-[1.8rem] py-[1.5rem] sm:px-[4rem] sm:pt-[14rem] pt-[29rem] gap-[4rem]'>
                <h1 className='text-grey text-center font-semibold tracking-[.3rem] sm:text-3xl text-lg'>A job worth doing together</h1>
                
                <div className='w-full flex sm:flex-row flex-col justify-center place-items-center sm:gap-0 gap-4'>
                    {Info.founders.map((founder, i) => (
                        <div key={i} className='flex flex-col place-items-center w-full'>
                            <Image src={founder.profile} alt={founder.name} className='rounded-full' width={270}/>

                            <h3 className='text-grey'>{founder.name}</h3>

                            <p>{founder.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='bg-black w-full min-h-screen flex flex-col px-[1.8rem] py-[1.5rem] sm:px-[4rem] sm:pt-[14rem] pt-[29rem] gap-[4rem]'>
                
            </div>


        </div>
    )
}

export default AboutUs