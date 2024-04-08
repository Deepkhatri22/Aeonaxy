import React from 'react';
import './Section1.css';

function Section1() {
    return (
        <>
            <section className="bg-white h-auto relative">
                <div className="rating bg-[#f4f4f4] h-1/3">
                    <div className="stats px-12 py-20 md:flex md:justify-center md:gap-24">
                        <div className="stat mb-8 md:mb-0">
                            <p className="stat-value font-bold text-3xl">680K requests</p>
                            <p className="stat-label">submitted in 2021</p>
                        </div>
                        <div className="line hidden md:block"></div>
                        <div className="stat mb-8 md:mb-0">
                            <p className="stat-value font-bold text-3xl">230 countries</p>
                            <p className="stat-label">access the Marketplace</p>
                        </div>
                        <div className="line hidden md:block"></div>
                        <div className="stat">
                            <p className="stat-value font-bold text-3xl">4.9/5 rating</p>
                            <p className="stat-label">average client satisfaction</p>
                        </div>
                    </div>
                </div>
                <div className="w-2/3 sm:w-3/4 py-28 pb-36 px-4 md:px-20 sm:flex sm:flex-col sm:gap-5 sm:justify-center sm:items-center">
                    <p className="text-4xl md:text-7xl font-bold font-sans md:mb-8">
                        Explore services for every Stage of your business
                    </p>
                    <p className="text-base md:text-[22px]">
                        Select sevices and browse through a curated list of professionals who can help you reach your goals. You can filter matches by location, price and language, view their portfolios and read reviews.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Section1;