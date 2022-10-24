import React from 'react';
import './Contact.css'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset,faEnvelope,faGlobe } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

    const handleMessage = event =>{
        event.preventDefault();        
        
    emailjs.sendForm('service_0gb8yw7', 'template_df7a1jt', event.target, 'GGJcUSYKscponjqL2')
    .then((result) => {
        toast.success('Send your email message Successfully')
        event.target.reset()
    }, (error) => {
        toast.error(`Send message failed ${error} !!`)
    });
        
    }
    return (
        <div className='container mb-5' id='contact'>
             <div className="row py-4 pt-5 d-flex justify-content-center align-itmes-center">
                <div className="col-lg-5 text-center">
                   <h2 className='services-title'>Let's Talk</h2>
                </div>
            </div>
            <div className="row g-4">
                <div className="col-lg-7 contact-page ">
                    <div>
                        <h2 className='text-center mt-4 mb-3'>Get In Toch</h2>
                    </div>
                    <form action="" onSubmit={handleMessage}>
                       <div className="row gx-5 mb-4">
                        <div className="col-lg-6 col-md-6">
                            <input type="text" className='input-filed w-100' required name='name' placeholder='Fristname' />
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <input type="text" className='input-filed w-100' name='name' placeholder='Lastname' />
                        </div>
                       </div>
                       <input type="email" required className='input-filed w-100 mb-4' name='email' placeholder='Email' />
                       <input type="text" required className='input-filed w-100 mb-4' name='subject' placeholder='Subject' />
                       <textarea name="message" required id="" className='input-filed w-100' cols="30" rows="5" placeholder='Message' ></textarea>
                       <input type="submit" className='btn btn1 mt-5 mb-4' value="Send Message" />
                    </form>
                </div>
                <div className="col-lg-5 ">
                    <div className=" contact-details">
                    <div className='contact-details-pages'>
                        <h4>Bangladesh,Cumilla</h4>
                        <div className='d-flex align-items-center mt-4'>
                            <div className='contact-icon'><FontAwesomeIcon className='icon' icon={faGlobe}/></div>
                            <p>Office Address</p>
                        </div>
                   
                    </div>
                    <div className='contact-details-pages contact-details-pages-email'>
                        <h4>mdarif767778@gmail.com</h4>
                        <div className='d-flex align-items-center mt-4'>
                            <div className='contact-icon'><FontAwesomeIcon className='icon' icon={faEnvelope}/></div>
                            <p>Office Email</p>
                        </div>
                    </div>
                    <div className='contact-details-pages'>
                        <h4>+0161254854</h4>
                        <div className='d-flex align-items-center mt-4'>
                            <div className='contact-icon'><FontAwesomeIcon className='icon' icon={faHeadset}/></div>
                            <p>Office Phone</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;