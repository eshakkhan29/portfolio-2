import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="py-6 bg-white text-black">
                <div className="lg:w-9/12 mx-auto flex-col lg:flex lg:flex-row">
                    <div className="py-6 md:py-12 md:px-6 lg:px-0 mx-auto px-10 border-none">
                        <div className='mb-10'>
                            <h1 className='text-5xl font-bold border-b-4 pb-4 border-zinc-500 inline-block relative'>
                                Contact
                                <span className='absolute text-transparent -top-1 left-0'>C<span className='border-b-8 pb-2 z-10 border-primary'>ont</span>act</span>
                            </h1>
                        </div>
                        <p className='font-bold'>Phone:</p>
                        <p className="mb-6">(+880) 1708730727</p>
                        <p className='font-bold'>Email:</p>
                        <p className="mb-6">eshakkhan29@gmail.com</p>
                        <p className='font-bold'>Address:</p>
                        <p>Chandpur Sadar, Chandpur</p>
                        <p className="mb-6">Bangladesh</p>
                    </div>
                    <form novalidate="" className="flex border-none flex-col md:col-span-2 w-10/12 lg:w-7/12 mx-auto py-6 space-y-6 md:pt-28 md:px-6 ng-untouched ng-pristine ng-valid">
                        <label className="block">
                            <span className="mb-2 font-bold">Full name</span>
                            <input type="text" placeholder="Leroy Jenkins" className="block w-full focus:ring-primary  rounded-md shadow-sm " />
                        </label>
                        <label className="block">
                            <span className="mb-2 font-bold">Email address</span>
                            <input type="email" placeholder="leroy@jenkins.com" className="block w-full focus:ring-primary rounded-md shadow-sm " />
                        </label>
                        <label className="block">
                            <span className="mb-2 font-bold">Message</span>
                            <textarea rows="3" className="block w-full focus:ring-primary rounded-md "></textarea>
                        </label>
                        <button type="button" className="btn btn-outline w-40 mx-auto btn-primary">Submit Message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;

