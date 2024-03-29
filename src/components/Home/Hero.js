import React from 'react';
import eshakKhan from '../../images/protfolio-eshak.jpg';
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from '../Footer/Footer';
import Skill from './Skills';
const Hero = () => {
    return (
        <div>
            <div class="hero py-10 bg-base-100">
                <div class=" flex py-10 flex-col items-center lg:px-0 px-3 lg:gap-0 gap-5 lg:flex-row">
                    <div
                        className='lg:w-1/2'>
                        <h1 class="text-2xl font-medium"><span className='border-b-2 pb-1 border-primary'>HELLO</span>, MY NAME IS</h1>
                        <h1 class="text-5xl font-bold mt-3">Md. Eshak Khan</h1>
                        <p class="pt-3 text-3xl ">Junior React JS Developer</p>
                        <div className='my-4'>
                            <p><HiOutlineMail className='inline mr-2 my-2' /> eshakkhan29@gmail.com</p>
                            <p><BsTelephone className='inline mr-2' /> (+880) 1708730727</p>
                        </div>
                        <button><a class="btn btn-primary" href="ESHAK_KHAN_RESUME.pdf" download>Download Resume</a></button>
                    </div>
                    <img
                        src={eshakKhan} class="lg:w-1/2 rounded-2xl shadow-1xl" alt='Eshak khan' />
                </div>
            </div>
            <About></About>
            <Services></Services>
            <Skill></Skill>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Hero;