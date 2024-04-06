import React from 'react';
import "./Body.scss";

const Body = () => {
    return (
        
            <div className='px-[1.5rem] py-[1.5rem] sm:px-[4rem] sm:pt-[4rem] flex sm:flex-row flex-col place-items-center sm:justify-between w-full min-h-[80vh]'>
                <div className='self-start py-[2rem] h-full'>
                    <h1 className='font-semibold text-left sm:text-5xl text-4xl'>Immerse yourself in the future of STEM learning</h1>
                </div>

                <div className='bg-background2 sm:pt-[3rem] pt-[1.5rem] sm:pb-[5rem] pb-[3.4rem] sm:px-[4.5rem] px-[2rem] flex place-items-start flex-col basis-[60%] gap-[1.5rem] h-full'>
                    <h2 className='text-grey tracking-[.25rem] sm:leading-[3rem] leading-[1.9rem] sm:text-[2.5vw] text-2xl font-bold'>Fuel your curiosity and expand your mind</h2>

                    <h3 className='text-black sm:text-[2vw] text-3xl tracking-[.4rem] font-bold'>Virtual labs are <span className='text-purple'>24/7</span></h3>

                    <p className='text-black sm:text-[1.8vw] text-xl sm:leading-[3.3vw] leading-[1.7rem]'>
                        {` As VR/AR technology gains momentum and Generative AI approaches fruition, we're pioneering a transformative solution: bringing the laboratory experience directly to learners' eyes. Our platform merges immersive VR/AR environments with cutting-edge Generative AI algorithms, enabling hands-on STEM education from anywhere.`}
                    </p>

                    <h4 className='text-grey sm:text-[1.7vw] text-md text-center self-center font-semibold'>Invest in the future</h4>
                </div>
            </div>

        
    )
}

export default Body