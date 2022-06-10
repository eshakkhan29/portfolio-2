import React from 'react';
import skills from '../../images/skills.jpg';

const Skill = () => {
    return (
        <div className="lg:w-9/12 mx-auto py-10 my-10 px-4 lg:px-0">
            <div className="grid md:py-24 md:grid-cols-2 gap-5">
                <div className="">
                    <h1 className='text-5xl mb-4 font-bold border-b-4 pb-4 border-zinc-500 inline-block relative'>
                        Skills
                        <span className='absolute text-transparent top-0 left-0'>S<span className='border-b-8 pb-1 z-10 border-primary'>kil</span>ls</span>
                    </h1>
                    <h3 className='mt-4 mb-2 font-semibold'>React js</h3>
                    <div class=" bg-gray-200 rounded-full">
                        <div class="bg-primary text-xs font-medium  text-white text-end p-0.5 leading-none rounded-full" style={{ width: "90%" }}> 90%</div>
                    </div>
                    <h3 className='mt-4 mb-2 font-semibold'>Javascript</h3>
                    <div class="bg-gray-200 rounded-full">
                        <div class="bg-primary text-xs font-medium  text-white text-end p-0.5 leading-none rounded-full" style={{ width: "75%" }}> 75%</div>
                    </div>
                    <h3 className='mt-4 mb-2 font-semibold'>Express Js</h3>
                    <div class="bg-gray-200 rounded-full">
                        <div class="bg-primary text-xs font-medium  text-white text-end p-0.5 leading-none rounded-full" style={{ width: "85%" }}> 85%</div>
                    </div>
                    <h3 className='mt-4 mb-2 font-semibold'>Mongo DB</h3>
                    <div class="bg-gray-200 rounded-full">
                        <div class="bg-primary text-xs font-medium  text-white text-end p-0.5 leading-none rounded-full" style={{ width: "70%" }}> 70%</div>
                    </div>
                    <h3 className='mt-4 mb-2 font-semibold'>HTML/CSS</h3>
                    <div class="bg-gray-200 rounded-full">
                        <div class="bg-primary text-xs font-medium  text-white text-end p-0.5 leading-none rounded-full" style={{ width: "95%" }}> 95%</div>
                    </div>

                </div>
                <div className="mt-4">
                    <img className='rounded-2xl' src={skills} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Skill;

