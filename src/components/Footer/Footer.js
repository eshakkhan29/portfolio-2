import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="border-t border-gray-400">  
            <div className="">
                <footer class="footer w-9/12 mx-auto py-4  border-gray-400">
                    <div class="items-center grid-flow-col">
                        <p>Eshak Khan © All Right Reserved</p>
                    </div>
                    <div class="md:place-self-center md:justify-self-end">
                        <div class="grid grid-flow-col gap-4">
                            <NavLink className="font-semibold" to='/home'>Home</NavLink>
                            <NavLink className="font-semibold" to='/about'>About</NavLink>
                            <NavLink className="font-semibold" to='services'>service</NavLink>
                            <NavLink className="font-semibold" to='portfolio'>Portfolio</NavLink>
                            <NavLink className="font-semibold" to='blogs'>Blog</NavLink>
                            <NavLink className="font-semibold" to='contact'>Contact</NavLink>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;

