import React from 'react'

const Section3 = () => {
    return (
        <>
            <section className='bg-[#3f9bb5] h-full flex flex-col md:flex-row relative'>
                <div className='left h-full md:w-1/3 bg-[#3f9bb5] p-8 md:p-0'>
                    <p className='pt-28  md:pl-20 font-bold text-4xl md:text-5xl text-white'>
                        Who are our pros?
                    </p>

                    <h1 className='font-bold text-3xl text-white sm:pt-16 md:pt-16 md:pl-20'>
                        They're industry leaders
                    </h1>
                    <p className='text-white pt-4 font-2xl md:pl-20'>
                        Wix Partners are the masterminds behind some of the most successful brands, businesses and sites on Wix. Whether they're designers, developers or marketers, they're all designers, developers or marketers, they're all vetted, trusted leaders in their fields.
                    </p>
                    <h1 className='font-bold text-3xl text-white pt-4 md:pt-8 md:pl-20'>
                        They're specially selected
                    </h1>
                    <p className='text-white pt-4 font-2xl md:pl-20'>
                        Each of our professionals have been pre-screened for quality. They're not Wix employee, they're just real people with real skills who want tp help you reach ypur goals.
                    </p>
                    <h1 className='font-bold text-3xl text-white pt-4 md:pt-8 md:pl-20'>
                        They're ready to do the heavy lifting
                    </h1>
                    <p className='text-white pt-4 font-2xl md:pl-20'>
                        From big projects to small tasks, no matter the brief you can rest assured knowing that they'll deliver..
                    </p>
                </div>
                {/* -------------------------------------------------------------------------------- */}
                <div className='right md:pt-0 h-full md:w-3/5 bg-[#3f9bb5] flex flex-col justify-center content-center items-center'>
                    <img
                        className='object-cover'
                        src="/section3.png"
                        alt="hero image"
                    />
                </div>
            </section>
            
            <div className='bg-black text-white h-60 flex flex-col justify-center items-center'>
                <h1 className='text-center font-bold text-5xl'>Hire a pro</h1>
                <button className='bg-white text-black h-10 mt-5 rounded-3xl w-24  flex items-center justify-center content-center'>Get Started</button>
            </div>

        </>
    )
}

export default Section3
