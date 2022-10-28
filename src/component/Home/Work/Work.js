import React from 'react';
import './work.css'

const Work = ({product}) => {
    const {name,categorie,img} = product
    return (
        <div className="col-lg-3 col-md-6">
        
        <div className="fall-item fall-effect">
            <img src={img} className='work-img' />
            <div className="mask">
              <h2>{name}</h2>
              <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
              <h4 className='mt-2 text-uppercase'>{categorie} Design</h4>
            </div>
          </div>
      </div>
    );
};

export default Work;