import React from 'react';
import eshakKhan from '../../images/cover.jpg';
import { ImFacebook2, ImLinkedin } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const About = () => {
    return (
        <div class="hero py-10 bg-white">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className='lg:w-1/2'>
                    <div className='lg:pl-16'>
                        <h1 className='text-5xl font-bold border-b-4 pb-2 border-zinc-500 inline-block relative'>
                            About me
                            <span className='absolute text-transparent -top-1 left-0'>A<span className='border-b-8 z-10 border-primary'>bout</span> me</span>
                        </h1>

                        <h2 className='text-2xl font-medium my-4'>Hi, I am Junior React JS Developer | Front-End Developer | Back-End Developer | MERN Stack Developer</h2>
                        <p className='font-normal text-lg'>I am an expert in Rect JS, Express JS, Mongo DB, javascript, ES6, and bootstrap5. I also know WordPress theme customization. I love to Develop single-page applications. I make websites adequately responsive for desktop, tablet, and mobile devices. My coding process is entirely hand code. And I love to grave new experiences And learn. Thank you. Last year I learned MERN Stack Development. Mostly React JS, Node JS, javascript, CSS3, HTML5, and many library's of react js.</p>
                        <div className='flex items-center gap-10'>
                            <h3 className='text-3xl font-semibold py-6'>Connect With me:</h3>
                            <div className='flex gap-10 text-3xl'>
                                <a target='_Blanck' className='hover:text-primary' href="https://www.linkedin.com/in/eshak-khan/"><ImLinkedin /></a>
                                <a target='_Blanck' className='hover:text-primary' href="https://github.com/eshakkhan29"><BsGithub /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lg:w-1/2 relative'>
                    <div className='lg:absolute lg:mb-0 mb-4 -top-8 -right-10 lg:w-5/12 lg:h-11/12 rounded-2xl bg-primary'>
                        <div className='border-b p-2 text-center text-white font-medium'>
                            <h3>name:</h3>
                            <h3>Md. Eshak Khan</h3>
                        </div>
                        <div className='border-b p-2 text-center text-white font-medium'>
                            <h3>Birthday:</h3>
                            <h3>19/05/1996</h3>
                        </div>
                        <div className='border-b p-2 text-center text-white font-medium'>
                            <h3>Phone & Mail:</h3>
                            <h3>(+880) 1708730727</h3>
                            <h3>eshakkhan29@gmail.com</h3>
                        </div>
                        <div className='border-b p-2 text-center text-white font-medium'>
                            <h3>Address:</h3>
                            <h3>Chandpur Sadar</h3>
                        </div>
                        <div className='p-2 text-center text-white font-medium'>
                            <h3>Nationality:</h3>
                            <h3>Bangladeshi</h3>
                        </div>
                    </div>
                    <div className='w-full'>
                        <img className='rounded-2xl'  src={eshakKhan} alt="Eshak Khan" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;