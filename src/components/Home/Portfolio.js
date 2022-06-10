import React from 'react';
import { BiCreditCardFront } from 'react-icons/bi';
import { BsCodeSquare } from 'react-icons/bs';
import { FaCode, FaDownload, FaMobile } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import UseSite from '../Hook/UseSite';

const Portfolio = () => {
    const [sites] = UseSite();
    const navigate = useNavigate();

    return (
        <section className='lg:w-9/12 mx-auto my-10'>
            <h1 className='text-5xl font-bold border-b-4 pb-4 border-zinc-500 inline-block relative'>
                My Projects
                <span className='absolute text-transparent -top-1 left-0'>M<span className='border-b-8 pb-2 z-10 border-primary'>y Proj</span>ects</span>
            </h1>

            <div className='py-10 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 lg:gap-6'>
                {
                    sites.map((site, i) =>
                        <div key={i}>
                            <div class="card card-compact bg-base-100 shadow-xl">
                                <figure><img className='w-full' src={site.image} alt="Shoes" /></figure>
                                <div class="card-body">
                                    <h2 class="card-title">{site.name}</h2>
                                    <p></p>
                                    <div class="card-actions justify-center">
                                        <button className='btn btn-primary rounded btn-sm'><a target="_blanck" href={site.liveLink}>Live site</a></button>
                                        <button onClick={()=>navigate(`/details/${site.id}`)} className='btn btn-primary rounded btn-sm'>Detail</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Portfolio;