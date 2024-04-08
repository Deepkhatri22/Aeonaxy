import React, { useState } from 'react';
import { IoIosStar } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Carousel from './Carousel';

function Review() {
    const reviews = [
        {
            text: "Galaxy is the best. They were super punctual, communicated very well...I recommend if you need some work done these are definitely the guys to do it, the site they made for me is outstanding.",
            rating: 5,
            author: "Isaiah Christopher Thomas",
            project: "eCommerce Website by Wix Partner Galaxy Visual Media"
        },
        {
            text: "I am very pleased with the service provided by Galaxy. They are professional and always ready to help. I would definitely recommend them to anyone looking for web development services.",
            rating: 4,
            author: "Emma Watson",
            project: "Portfolio Website by Wix Partner Galaxy Visual Media"
        },
        {
            text: "I am really happy with the service that Galaxy has offered. They are courteous and willing to assist at all times. They are absolutely someone I would suggest to anyone in need of web development services.",
            rating: 5,
            author: "Deep Khatri",
            project: "Portfolio Website by Wix Partner Galaxy Visual Media"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <h1 className='pt-20 text-center text-5xl font-bold'>Wix Marketplace user reviews</h1>

            <section className="max-w-4xl mx-auto mt-5 p-6 space-y-4 rounded-lg">
                <div className="text-center">
                    <p className="text-lg text-gray-600">
                        {reviews[currentIndex].text}
                    </p>
                    <div className="flex justify-center text-3xl mt-4">
                        {[...Array(reviews[currentIndex].rating)].map((_, index) => (
                            <IoIosStar key={index} />
                        ))}
                    </div>

                    <div className="font-semibold text-lg mt-4">{reviews[currentIndex].author}</div>
                    <div className='flex justify-between items-center'>
                        <button onClick={handlePrev} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-2xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                            <FaArrowLeft />
                        </button>
                        <button onClick={handleNext} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-2xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                            <FaArrowRight />
                        </button>
                    </div>
                    <div>{reviews[currentIndex].project}</div>
                </div>
            </section>
            <Carousel />
        </>
    );
}

export default Review;
