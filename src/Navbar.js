import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="py-4 flex items-center w-full justify-between relative mx-0 lg:px-40 md:px-10 sm:px-6 px-4"> 
            <div className="container flex justify-between items-center">
                <div className="text-white text-2xl font-bold flex gap-2">
                    <img src='./Assets/frances_logo.png' alt='Logo' className='w-8' />
                    <h1>The Frances<span className="text-2xl text-rose-600">.</span></h1>
                </div>

                <div className="hidden md:flex gap-5 active:text-red items-center"> 
                    <Link className="text-gray-400 text-sm font-semibold transition-colors duration-300 hover:text-white" to="/">Home</Link>
                    <Link className="text-gray-400 text-sm font-semibold transition-colors duration-300 hover:text-white" to="/menu">Menu</Link>
                    <Link className="text-gray-400 text-sm font-semibold transition-colors duration-300 hover:text-white" to="/gallery">Gallery</Link>
                    <Link className="text-gray-400 text-sm font-semibold transition-colors duration-300 hover:text-white" to="/events">Event</Link>
                    <Link className="text-gray-400 text-sm font-semibold transition-colors duration-300 hover:text-white" to="/about">About</Link>
                    <Link className="text-gray-400 text-sm font-semibold transition-colors duration-300 hover:text-white" to="/contact">Contact</Link>
                </div>
                <div className='hidden md:block'>
                    <Link to="/book"><button className="py-2 px-3 text-xs text-white border-0 rounded-3xl bg-rose-600 font-bold hover:bg-rose-700 transition duration-300">BOOK A TABLE</button></Link>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white focus:outline-none"
                >
                    {/* Hamburger Icon */}
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-10 left-0 right-0 bg-black opacity-90 mt-4 space-y-2 py-4 flex flex-col items-center z-10">
                    <Link className="text-gray-400 text-sm font-semibold transition-colors duration-300 hover:text-white" to="/">Home</Link>
                    <Link className="text-gray-400 text-sm font-semibold transition-colors duration-300 hover:text-white" to="/menu">Menu</Link>
                    <Link className="text-gray-400 text-sm font-semibold transition-colors duration-300 hover:text-white" to="/gallery">Gallery</Link>
                    <Link className="text-gray-400 text-sm font-semibold transition-colors duration-300 hover:text-white" to="/events">Event</Link>
                    <Link className="text-gray-400 text-sm font-semibold transition-colors duration-300 hover:text-white" to="/about">About</Link>
                    <Link className="text-gray-400 text-sm font-semibold transition-colors duration-300 hover:text-white" to="/contact">Contact</Link>
                    <div>
                        <Link to="/book"><button className="px-3 py-2 text-xs text-white border-0 rounded-3xl bg-rose-600 font-bold hover:bg-rose-700 transition duration-300">BOOK A TABLE</button></Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
