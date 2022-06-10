import React from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineCaretRight } from 'react-icons/ai';

const SiteDetails = () => {

    const sites = [
        {
            "name": "PROCESSOR BUILDER",
            "id": "1",
            "liveLink": "https://processor-builder.web.app/",
            "client": "https://github.com/eshakkhan29/PROCESSOR-BUILDER",
            "server": "https://github.com/eshakkhan29/PROCESSOR-BUILDER-SERVER",
            "image": "https://i.ibb.co/6ZQgr8B/prosesore.png",
            "technology": "react js, react bootstrap, react Router, react toastify, firebase auth, express js, cors middleware, mongo DB, counterUp js",
            "feature1": "A nice processor buying website. Registered users can order Processor and manage them.",
            "feature2": "Established Admin and User-based separate dashboard. An admin can manage all the user's order also can add or remove a product.",
            "feature3": "Use of Firebase email-password login system. A new visitor needs to register for making orders.",
            "feature4": "wheen user lodging this site server automatic send a access token and saved in localStorage",
            "feature5": "user verifying wheen he call data to manage product"
        },
        {
            "name": "Dentist-Zubayer",
            "id": "2",
            "liveLink": "https://dental-care-818e6.web.app/",
            "client": "https://github.com/eshakkhan29/dental",
            "server": "",
            "image": "https://i.ibb.co/McXb4pc/dentis-zubayer.png",
            "technology": "react Bootstrap, react router, react toastify, react firebase hook, Firebase authentication",
            "feature1": "It is a single personal website.",
            "feature2": "Established Google authentication system with Firebase and email-password login system.",
            "feature3": "Established private routing. Without login the accessing area of a visitor is limited.",
            "feature4": "requireAuth setup for checkOut route.",
            "feature5": "email verification mail and password reset email sent."
        },
        {
            "name": "BD Motors",
            "id": "3",
            "liveLink": "https://bd-motors-a5d14.web.app/",
            "client": "https://github.com/eshakkhan29/bd-motors",
            "server": "https://github.com/eshakkhan29/bd-motors-server",
            "image": "https://i.ibb.co/72wprpW/bd-motors.png",
            "technology": "react js, react bootstrap, react Router, react toastify, firebase auth, express js, mongo DB.",
            "feature1": "Update a product with quantity by clicking delivered and add quantity by restock.",
            "feature2": "Implementation of reacts private routing system. A user who is not logged in cannot update, manage or add product.",
            "feature3": "Use of Firebase email-password login system and Google login with a single click.",
            "feature4": "wheen user lodging this site server automatic send a access token and saved in localStorage",
            "feature5": "u can update delivery product count by clicking button"
        },
        {
            "name": "BD Motors",
            "id": "4",
            "liveLink": "https://react-plantie-assingment.netlify.app/",
            "client": "https://github.com/eshakkhan29/plantie",
            "server": "",
            "image": "https://i.ibb.co/4459XKj/plaient-home.png",
            "technology": "react js, react bootstrap, react Router.",
            "feature1": "this page make using react router",
            "feature2": "home page not showing all reviews",
            "feature3": "mostly using this project routing",
            "feature4": "active nav link",
            "feature5": "data chart recharts"
        },
        {
            "name": "Eplxe lab agancy",
            "id": "5",
            "liveLink": "https://eshakkhan29.github.io/day-13-14-agancy-landing-page/",
            "client": "https://github.com/eshakkhan29/day-13-14-agancy-landing-page",
            "server": "",
            "image": "https://i.ibb.co/LzKNZ2Z/agency.png",
            "technology": "this site make only using HTML and CSS",
            "feature1": "making fixel ferfact design",
            "feature2": "copmplex ui design with CSS3",
            "feature3": "",
            "feature4": "",
            "feature5": ""
        },
        {
            "name": "Eplxe lab agancy",
            "id": "6",
            "liveLink": "https://nvisor-client.netlify.app/",
            "client": "https://github.com/eshakkhan29/Nvisor-client",
            "server": "",
            "image": "https://i.ibb.co/T4z114p/nvisore-hero.png",
            "technology": "this site make only using HTML and CSS",
            "feature1": "making fixel ferfact design",
            "feature2": "copmplex ui design with CSS3",
            "feature3": "mobile responsive",
            "feature4": "",
            "feature5": ""
        }
    ]
    const { id } = useParams();
    // const { data: sites, isLoading } = useQuery('products', () => fetch('data.json').then(res => res.json()))

    // if (isLoading) {
    //     return <>
    //     <h1>loooo</h1>
    //     </>
    // }
    const site = sites?.filter(site => site.id === id);
    const [data] = site;
    return (
        <div className='lg:w-9/12 mx-auto px-3 lg:px-0 my-10'>
            <h1 className='text-3xl text-primary font-medium py-10'>Project {data.name}</h1>
            <div className='grid lg:grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                <div className='card'>
                    <figure><img src={data.image} alt="" /></figure>
                </div>
                <div className='card'>
                    <figure><img src={data.image} alt="" /></figure>
                </div>
                <div className='card'>
                    <figure><img src={data.image} alt="" /></figure>
                </div>
            </div>
            <div className='py-16 flex lg:flex-row flex-col gap-10'>
                <div className='lg:w-1/3 flex flex-col gap-y-5'>
                    <a target="_blanck" className='btn btn-primary' href={data?.liveLink}>Live site</a>
                    <a target="_blanck" className='btn btn-primary' href={data?.client}>Client side Code link</a>
                    <a target="_blanck" className='btn btn-primary' href={data?.server}>Server side Code link</a>
                </div>
                <div className='lg:w-2/3 lg:pl-10 pl-0'>
                    <h2 className='text-4xl pb-2 font-bold'>{data?.name}</h2>
                    <h3 className='text-2xl font-semibold text-primary'>Feature____________</h3>
                    <div className='lg:pl-20 pl-0 py-4'>
                        <p className='font-medium text-xl'><AiOutlineCaretRight className='inline' /> {data?.feature1}</p>
                        <p className='font-medium text-xl'><AiOutlineCaretRight className='inline' /> {data?.feature2}</p>
                        <p className='font-medium text-xl'><AiOutlineCaretRight className='inline' /> {data?.feature3}</p>
                        <p className='font-medium text-xl'><AiOutlineCaretRight className='inline' /> {data?.feature4}</p>
                        <p className='font-medium text-xl'><AiOutlineCaretRight className='inline' /> {data?.feature5}</p>
                    </div>
                    <h3 className='text-2xl font-semibold text-primary'>Technology____________</h3>
                    <div className='lg:pl-20 pl-0 pt-4'>
                        <p className='font-medium text-xl'><AiOutlineCaretRight className='inline' /> {data?.technology}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SiteDetails;