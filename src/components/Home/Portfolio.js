import React from 'react';
import { BiCreditCardFront } from 'react-icons/bi';
import { BsCodeSquare } from 'react-icons/bs';
import { FaCode, FaDownload, FaMobile } from 'react-icons/fa';
import project1 from '../../images/portfolio/prosesore.png'
import project2 from '../../images/portfolio/dentis-zubayer.png'
import project3 from '../../images/portfolio/bd-motors.png'
import project4 from '../../images/portfolio/plaient-home.png'
import project5 from '../../images/portfolio/agency.png'
import project6 from '../../images/portfolio/nvisore-hero.png'

const Portfolio = () => {
    return (
        <section className='lg:w-9/12 mx-auto my-10'>
            <h1 className='text-5xl font-bold border-b-4 pb-4 border-zinc-500 inline-block relative'>
                My Projects
                <span className='absolute text-transparent -top-1 left-0'>M<span className='border-b-8 pb-2 z-10 border-primary'>y Proj</span>ects</span>
            </h1>

            <div className='py-10 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 lg:gap-6'>

                <div class="card card-compact bg-base-100 shadow-xl">
                    <figure><img className='w-full' src={project1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">PROCESSOR BUILDER</h2>
                        <p></p>
                        <div class="card-actions justify-center">
                            <button className='btn btn-primary btn-sm'><a href="https://processor-builder.web.app/">Live site</a></button>
                            <button className='btn btn-primary btn-sm'><a href="">View Details</a></button>
                        </div>
                    </div>
                </div>

                <div class="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={project2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Dentist Zubayer</h2>
                        <p></p>
                        <div class="card-actions justify-center">
                            <button className='btn btn-primary btn-sm'><a href="https://dental-care-818e6.web.app/home">Live site</a></button>
                            <button className='btn btn-primary btn-sm'><a href="">View Details</a></button>
                        </div>
                    </div>
                </div>

                <div class="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={project3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">BD Motors</h2>
                        <p></p>
                        <div class="card-actions justify-center">
                            <button className='btn btn-primary btn-sm'><a href="https://bd-motors-a5d14.web.app/">Live site</a></button>
                            <button className='btn btn-primary btn-sm'><a href="">View Details</a></button>
                        </div>
                    </div>
                </div>

                <div class="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={project4} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Plantie</h2>
                        <p></p>
                        <div class="card-actions justify-center">
                            <button className='btn btn-primary btn-sm'><a href="https://react-plantie-assingment.netlify.app/">Live site</a></button>
                            <button className='btn btn-primary btn-sm'><a href="">View Details</a></button>
                        </div>
                    </div>
                </div>

                <div class="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={project5} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Agency</h2>
                        <p></p>
                        <div class="card-actions justify-center">
                            <button className='btn btn-primary btn-sm'><a href="https://eshakkhan29.github.io/day-13-14-agancy-landing-page/">Live site</a></button>
                            <button className='btn btn-primary btn-sm'><a href="">View Details</a></button>
                        </div>
                    </div>
                </div>

                <div class="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={project6} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Mobile finder</h2>
                        <p></p>
                        <div class="card-actions justify-center">
                            <button className='btn btn-primary btn-sm'><a href="https://assignment-6-mobile-bazar.netlify.app/">Live site</a></button>
                            <button className='btn btn-primary btn-sm'><a href="">View Details</a></button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;