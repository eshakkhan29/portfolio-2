import React from 'react';
import { FaCode, FaDownload, FaMobile, } from 'react-icons/fa';
import { BsCodeSquare } from 'react-icons/bs';
import { BiCreditCardFront } from 'react-icons/bi';

const Services = () => {
    return (
        <section className='px-80 py-10'>
            <h1 className='text-6xl font-bold border-b-4 pb-4 border-zinc-500 inline-block relative'>
                My Services
                <span className='absolute text-transparent -top-1 left-0'>M<span className='border-b-8 pb-2 z-10 border-primary'>y Serv</span> ices</span>
            </h1>

            <div className='py-10 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5'>

                <div class="hover:text-primary card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <span className='text-6xl'><FaCode /></span>
                        <h2 class="card-title my-3 text-3xl">Web Design</h2>
                        <p className='font-medium'>You can design a beautiful responsive website through me in a very short time.</p>
                    </div>
                </div>

                <div class="hover:text-primary card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <span className='text-6xl'><BsCodeSquare /></span>
                        <h2 class="card-title my-3 text-3xl">Well Documented Codes</h2>
                        <p className='font-medium'>The Trydo code is awesome well documented code. And Its customization is very easily</p>
                    </div>
                </div>

                <div class="hover:text-primary card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <span className='text-6xl'><FaMobile /></span>
                        <h2 class="card-title my-3 text-3xl">Perfect Responsive</h2>
                        <p className='font-medium'>Our Template is full Perfect for all device. You can visit our template all device easily.</p>
                    </div>
                </div>

                <div class="hover:text-primary card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <span className='text-6xl'><FaDownload /></span>
                        <h2 class="card-title my-3 text-3xl">Fast Loading Speed</h2>
                        <p className='font-medium'>Trydo is faster loading speed.Trydo create your theme so much faster</p>
                    </div>
                </div>

                <div class="hover:text-primary card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <span className='text-6xl'><BiCreditCardFront /></span>
                        <h2 class="card-title my-3 text-3xl">Front-end Develop</h2>
                        <p className='font-medium'>Trydo is faster loading speed.Trydo create your theme so much faster</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;