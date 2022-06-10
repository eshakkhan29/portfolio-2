import React from 'react';
import eshakKhan from '../../images/protfolio-eshak.png';
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import About from './About';
const Hero = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-100   ">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2'>
                        <h1 class="text-2xl font-medium"><span className='border-b-2 pb-1 border-primary'>HELLO</span>, MY NAME IS</h1>
                        <h1 class="text-5xl font-bold mt-3">Md. Eshak Khan</h1>
                        <p class="pt-3 text-3xl ">Juniot React JS Developer</p>
                        <div className='my-4'>
                            <p><HiOutlineMail className='inline mr-2 my-2' /> eshakkhan29@gmail.com</p>
                            <p><BsTelephone className='inline mr-2' /> (+880) 1708730727</p>
                        </div>
                        <button class="btn btn-primary"><a download='ESHAK_KHAN_RESUME.pdf' href="../../images/ESHAK_KHAN_RESUME.pdf">Download Resume</a></button>
                    </div>
                    <img src={eshakKhan} class="lg:w-1/2 rounded-lg shadow-1xl" alt='Eshak khan' />
                </div>
            </div>
            <About></About>
        </div>
    );
};

export default Hero;