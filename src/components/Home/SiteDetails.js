import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

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
    console.log(sites);
    const site = sites?.filter(site => site.id === id);
    console.log(site);
    return (
        <div>
            <h1>{id}</h1>
            <h1>Khan</h1>
        </div>
    );
};

export default SiteDetails;