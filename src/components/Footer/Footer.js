import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="flex items-center border-t h-28 border-gray-400">
            <div className="lg:w-9/12 mx-auto">
                <div className='flex lg:flex-row flex-col items-center gap-5 justify-around'>
                    <div class="">
                        <p>Eshak Khan © All Right Reserved</p>
                    </div>
                    <div class="">
                        <div class="flex lg:gap-3 gap-1">
                            <NavLink className="font-semibold hover:text-primary" to='/home'>Home</NavLink>
                            <NavLink className="font-semibold hover:text-primary" to='/about'>About</NavLink>
                            <NavLink className="font-semibold hover:text-primary" to='services'>service</NavLink>
                            <NavLink className="font-semibold hover:text-primary" to='portfolio'>Portfolio</NavLink>
                            <NavLink className="font-semibold hover:text-primary" to='blogs'>Blog</NavLink>
                            <NavLink className="font-semibold hover:text-primary" to='contact'>Contact</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

