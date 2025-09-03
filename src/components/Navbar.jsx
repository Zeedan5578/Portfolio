import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 
        flex justify-center items-center 
        px-4 py-4 z-50 
        transition-all duration-300 ease-in-out
        ${scrolled ? 'bg-transparent/5 shadow-lg shadow-[#020c1b]/70' : 'bg-transparent'}
        backdrop-blur-md
      `}
    >
      <div className="w-full max-w-4xl flex justify-center items-center relative">
        
        <button
          className={`md:hidden flex flex-col justify-between w-6 h-5 z-50 focus:outline-none absolute left-4 ${
            isOpen ? 'fixed left-6' : ''
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-full ${isDark ? 'bg-white' : 'bg-black'} transition-all ${isOpen ? 'transform translate-y-2 rotate-45' : ''}`}></span>
          <span className={`block h-0.5 w-full ${isDark ? 'bg-white' : 'bg-black'} transition-all ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block h-0.5 w-full ${isDark ? 'bg-white' : 'bg-black'} transition-all ${isOpen ? 'transform -translate-y-2 -rotate-45' : ''}`}></span>
        </button>

        
        <ul
          className={`
            ${isDark?'bg-slate-50/60': 'bg-transparent/80'} md:bg-transparent
            flex flex-col md:flex-row items-center gap-5 justify-center
            md:space-x-6 lg:space-x-8
            fixed md:static top-0 right-0 
            w-3/4 md:w-full h-screen md:h-auto 
            pt-24 md:pt-0 px-8 md:px-0
            transition-all duration-300 ease-in-out
            ${isOpen?'translate-x-0' : 'translate-x-full md:translate-x-0' }
            
          `}
        >
          {['Home', 'Skills', 'Projects', 'Works', 'Contact'].map((item) => (
            <li key={item} className="mb-8 md:mb-0">
              <a
                href={`#${item.toLowerCase()}`}
                className={`
                  ${isDark? (isOpen?'text-black':'text-white'):(isOpen?'text-white':'text-black')}
                  hover:!text-blue-600
                  active:!text-blue-600
                  text-xl font-medium 
                  transition-colors duration-300
                  relative
                  after:content-[''] after:absolute after:bottom-[-5px] after:left-0 
                  after:w-0 after:h-0.5 after:!bg-blue-600 
                  after:transition-all after:duration-300
                  hover:after:w-full no-underline
                `}
                onClick={closeMenu}
              >
                {item}
              </a>
            </li>
          ))}

          
          <li className="mb-8 md:mb-0">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="text-xl p-2 rounded-full transition duration-300"
            >
              {isDark ? <FiSun className="text-yellow-400" /> : <FiMoon className={`${isOpen?'text-white':'text-black'}`}/>}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;