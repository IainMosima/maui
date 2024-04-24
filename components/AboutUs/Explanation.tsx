import { StaticImageData } from 'next/image';
import React from 'react';
import Image from "next/image";

interface Props {
    even: boolean,
    title: string,
    body: string,
    image: StaticImageData
}

const Explanation = ({ even, title, body, image }: Props) => {
    return (
        <div className={`w-full text-white flex place-items-center justify-center gap-6 ${even ? '' : 'sm:flex-row-reverse'} sm:flex-row flex-col-reverse`}>
            <div className={`flex flex-col gap-3 w-[90%] ${even ? '' : 'sm:text-right'}`}>
                <h4 className='font-semibold text-3xl'>{title}</h4>

                <p className={`${even ? '' : 'sm:text-right'}`}>{body}</p>
            </div>

            <Image src={image} alt={title} />
        </div>
    )
}

export default Explanation