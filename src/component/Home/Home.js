import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <About/>
            <Contact/>
        </div>
    );
};

export default Home;