import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <>
            <section className='bg-[#017398] h-full flex flex-col md:flex-row relative pb-10'>
                <div className='left h-full md:w-1/2 bg-[#017398] p-8 md:p-0'>
                    <p className='pt-28 pl-8 md:pl-28 font-bold text-4xl md:text-6xl text-white'>
                        Hire a professional agency or freelancer
                    </p>
                    <input
                        placeholder="Browse services"
                        type="text"
                        name="text"
                        className="input mt-4 md:mt-6 ml-8 md:ml-28"
                    />
                    <p className='font-bold text-white pt-4 md:pt-8 pl-8 md:pl-28'>
                        Top requested pros
                    </p>
                    <div className='text-white mt-2 md:mt-6 pl-8 md:pl-28 flex flex-wrap gap-3'>
                        <a className='border-2 px-4 md:px-5 py-2 rounded-3xl' href="#">
                            Web Designer
                        </a>
                        <a className='border-2 px-4 md:px-5 py-2 rounded-3xl' href="#">
                            Web Developer
                        </a>
                        <a className='border-2 px-4 md:px-5 py-2 rounded-3xl' href="#">
                            Graphic Designer
                        </a>
                        <a className='border-2 px-4 md:px-5 py-2 rounded-3xl' href="#">
                            SEO Expert
                        </a>
                        <a className='border-2 px-4 md:px-5 py-2 rounded-3xl' href="#">
                            eCommerce Specialist
                        </a>
                        <a className='border-2 px-4 md:px-5 py-2 rounded-3xl' href="#">
                            Logo Designer
                        </a>
                        <a className='border-2 px-4 md:px-5 py-2 rounded-3xl' href="#">
                            Web Designer
                        </a>
                    </div>
                </div>
                <div className='right pb-16 sm:pl-0 md:pl-24 pt-10 md:pt-0 h-full md:w-2/3 bg-[#017398] flex justify-center items-center'>
                    <img
                        className='object-cover w-2/3 h-1/3 py-20'
                        src="/heroImage.png"
                        alt="hero image"
                    />
                </div>
            </section>
        </>
    );
}

export default Hero;
