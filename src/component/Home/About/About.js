import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='container my-5'>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-4 text-center py-5">
                    <h2 className='services-title'>About Me</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className='about-img text-center'>
                        <img src="http://follio-react.wpocean.com/static/media/about.c275b471.jpg" alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                  <div className='ms-5'>
                  <h2 className='about-title'>I Create Products <br /> Not Just Art</h2>
                    <p className='mt-4 about-detail'>My name is Md Arif. I am a Graphic Designer.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                 
                  <ul className='about-section-ul'>
                    <li>High Quality Service</li>
                    <li>Best Price in Marketplace</li>
                    <li>Unique Design</li>
                  </ul>
                  <button className="btn header-button mt-4"><a href=""><span>Let's Talk</span></a></button>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default About;