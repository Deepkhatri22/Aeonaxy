import { useState } from 'react';
import { FaWix } from "react-icons/fa";




function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-white sticky top-0 z-10">
                <div className=" flex flex-wrap items-center justify-between p-3">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center flex gap-1 items-center text-2xl font-semibold whitespace-nowrap text-black"><span className='text-5xl'> <FaWix /></span> Marketplace</span>
                    </a>

                    {/* Toggle Button */}
                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        onClick={toggleMenu}
                        aria-controls="navbar-cta"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="items-center justify-between w-full md:hidden" id="navbar-cta">
                            <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">

                                <li>
                                    <a href="#" className="block py-2 px-3 md:p-0 text-black bg-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 ">All Services</a>

                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 ">Get Hired</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 md:p-0 bg-black text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 ">Find a professional</a>
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Desktop Menu */}
                    <div className="items-center gap-4 justify-between pl-5 hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  md:bg-white ">

                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 ">All Services
                                </a>
                            </li>
                            {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className=" h-4 w-4"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg> */}
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 ">Get Hired</a>
                            </li>
                        </ul>
                        <button className="text-white bg-black px-3 py-2 hover:text-white rounded-md text-sm font-medium">
                            Find a Professional
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
