import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="lg:w-9/12 mx-auto py-10 ">
                <div className=" flex-col lg:flex lg:flex-row">
                    <div className="md:py-12 md:px-6 lg:px-0 mx-auto px-10 border-none">
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
                    <form action="https://formspree.io/f/xjvlzwpl"
                        method="POST" novalidate="" className="flex border-none flex-col md:col-span-2 w-10/12 lg:w-7/12 mx-auto py-6 space-y-6 md:pt-28 md:px-6 ng-untouched ng-pristine ng-valid">
                        <label className="block">
                            <span className="mb-2 font-bold">Full name</span>
                            <input required name='name' type="text" placeholder="your name" className="block w-full focus:ring-primary  rounded-md shadow-sm " />
                        </label>
                        <label className="block">
                            <span className="mb-2 font-bold">Email address</span>
                            <input required name='email' type="email" placeholder="type your email" className="block w-full focus:ring-primary rounded-md shadow-sm " />
                        </label>
                        <label className="block">
                            <span className="mb-2 font-bold">Message</span>
                            <textarea required name='message' rows="3" className="block w-full focus:ring-primary rounded-md "></textarea>
                        </label>
                        <button type="submit" className="btn btn-outline w-40 mx-auto btn-primary">Sent Message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;

