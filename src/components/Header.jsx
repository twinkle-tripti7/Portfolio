import React, { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 shadow-lg">
            <div className="container mx-auto flex items-center justify-between px-6">
                {/* Hamburger Menu */}
                <div className="flex items-center space-x-4">
                    <button 
                        className="lg:hidden flex flex-col space-y-1 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <span className="w-6 h-0.5 bg-white"></span>
                        <span className="w-6 h-0.5 bg-white"></span>
                        <span className="w-6 h-0.5 bg-white"></span>
                    </button>

                    {/* Branding */}
                    <h1 className="text-2xl font-bold">TRIPTI</h1>
                </div>

                {/* Navbar */}
                <nav className={`lg:flex lg:items-center lg:space-x-8 ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>
                    <a href="#home" className="block py-2 text-lg font-medium hover:text-gray-300">Home</a>
                    <a href="#about" className="block py-2 text-lg font-medium hover:text-gray-300">About Me</a>
                    <a href="#education" className="block py-2 text-lg font-medium hover:text-gray-300">Education</a>
                    <a href="#certification" className="block py-2 text-lg font-medium hover:text-gray-300">Certification</a>
                    <a href="#project" className="block py-2 text-lg font-medium hover:text-gray-300">Projects</a>
                    <a href="#skills" className="block py-2 text-lg font-medium hover:text-gray-300">Skills</a>
                </nav>
            </div>

            <div className="text-center mt-6">
                <h2 className="text-3xl font-semibold">Software Developer</h2>
                <p className="text-lg mt-2">Hi, I'm <span className="font-bold">TRIPTI</span></p>
                <p className="text-lg">from Jharkhand</p>
            </div>
        </header>
    );
}

export default Header;
