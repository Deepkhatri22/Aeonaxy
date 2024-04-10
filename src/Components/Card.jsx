import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Card({ image, title, desc }) {
    return (
        <>
            <section className='flex flex-col border-2 h-96 max-w-96 rounded-t-[4rem] border-black'>
                <div className='flex justify-center'>
                    <img className='object-cover px-10 pt-10 content-center rounded-t-[4rem]' src={image} alt="" />
                </div>
                <div className='flex flex-col gap-1 px-10 mt-3'>
                    <h1 className='font-bold text-xl'>{title}</h1>
                    <p>{desc}</p>
                    <div className='flex gap-2 justify-start items-center'>

                        <p className='font-bold underline cursor-pointe'>Explore Now </p>
                        <span><FaArrowRightLong /></span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Card
