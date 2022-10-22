import React from 'react';
import './Services.css'
import Print from '../../../assets/print1.png'
import Coustom from '../../../assets/coustom1.png'
import Motion from '../../../assets/motion1.png'
import Product from '../../../assets/product1.png'
import Service from '../Service/Service';


const Services = () => {
    const services = [
        {
            id:1,
            img:Coustom,
            name:"Custom Design",
            detail:'Custom graphics are graphics that are specifically designed for a certain purpose.'

        },
        {
            id:2,
            img:Product,
            name:"Product Design",
            detail:'Product designers use their creative prowess to research, design and develop new products.'

        },
        {
            id:3,
            img:Motion,
            name:"Motion Design",
            detail:'Motion Graphics involves creating graphics and moving them in time and space to achieve an intended goal or tell a story.'

        },
        {
            id:4,
            img:Print,
            name:"Print Design",
            detail:'Unlike web graphics, print graphics are saved using vector format, which converts an image to mathematical formulae.'

        },
    ]
    return (
        <div className='container my-5'>
            <div className="row py-5 d-flex justify-content-center align-itmes-center">
                <div className="col-lg-5 text-center">
                   <h2 className='services-title'>Services</h2>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">

               {
                services.map((service)=> <Service key={service.id} service={service}/> )
               }
            </div>
        </div>
    );
};

export default Services;