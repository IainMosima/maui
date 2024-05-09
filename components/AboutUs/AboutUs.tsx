import React from 'react';
import "./AboutUs.scss";
import Image from 'next/image';
import { Info } from '@/constants';
import Explanation from './Explanation';

const AboutUs = () => {

    return (
        <div className=''>
            <div className='bg-background2 w-full min-h-screen flex flex-col px-[1.8rem] py-[1.5rem] sm:px-[4rem] sm:pt-[14rem] pt-[8rem] gap-[4rem]'>
                <h1 className='text-grey text-center font-semibold tracking-[.3rem] sm:text-3xl text-lg'>A job worth doing together</h1>

                <div className='w-full grid sm:grid-cols-3 grid-cols-2 justify-center place-items-center sm:gap-0 gap-4'>
                    {Info.founders.map((founder, i) => (
                        <div key={i} className={`flex flex-col place-items-center w-full ${i === 2 ? 'sm:col-span-1 col-span-2 sm:w-full w-[50%]' : ''}`}>
                            <Image src={founder.profile} alt={founder.name} className='rounded-full aspect-square' width={270} />

                            <h3 className='text-grey'>{founder.name}</h3>

                            <p>{founder.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='bg-black w-full min-h-screen flex flex-col px-[1.8rem] sm:px-[4rem] sm:pt-[10rem] pt-[15rem] gap-[4rem]'>
                {Info.explantion.map((info, i) =>
                    <div key={i}>
                        <Explanation
                            even={i % 2 === 0}
                            title={info.title}
                            body={info.body}
                            image={info.image}
                        />
                    </div>
                )}
            </div>

            <p className='tracking-[1] text-xl mt-2 text-grey font-semibold text-center'>© 2024, maui.ai</p>


        </div>
    )
}

export default AboutUs