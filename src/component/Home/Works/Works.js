import React,{useState,useEffect} from 'react';
import Work from '../Work/Work';
import './Works.css'

const Works = () => {
    const [filter,setFilter] = useState('all')
    const [products,setProducts] = useState([])
    useEffect(() => {
       if(filter == 'all'){
        fetch('service.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
       }else if(filter == 'coustom'){
        fetch('service.json')
        .then(res=>res.json())
        .then(data=> {
          const item = data.filter(i=> i.categorie == 'coustom')
          setProducts(item)
        })        
       }else if(filter == 'motion'){
        fetch('service.json')
        .then(res=>res.json())
        .then(data=> {
          const item = data.filter(i=> i.categorie == 'motion')
          setProducts(item)
        })        
       }else if(filter == 'ux'){
        fetch('service.json')
        .then(res=>res.json())
        .then(data=> {
          const item = data.filter(i=> i.categorie == 'ux')
          setProducts(item)
        })        
       }

    }, [filter])
    return (
        <div className='' id='portfolio'>
            <div className="container">
              <div className="row pt-5 d-flex justify-content-center align-itmes-center">
                <div className="col-lg-5 text-center">
                   <h2 className='services-title'>Portfolio</h2>
                </div>
            </div>
           <div className="row d-flex justify-content-center">
            <div className="col-lg-7 d-flex justify-content-center ">
                <ul className='nav nav-tabs works'>
                    <li className="nav-item">
                        <a className={`nav-link ${filter == 'all' ? 'active-btn' :''}`} onClick={()=>setFilter('all')}>All</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${filter == 'coustom' ? 'active-btn' :''}`} onClick={()=>setFilter('coustom')} >Coustom Desing</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${filter == 'motion' ? 'active-btn' :''}`} onClick={()=>setFilter('motion')} >Motion Desing</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${filter == 'ux' ? 'active-btn' :''}`} onClick={()=>setFilter('ux')}>UX Desing</a>
                    </li>
                </ul>
            </div>
           </div>
            </div>

        <div className='container-fulid px-4'>
          <div className="row  g-4  mt-5">
             
            {
              products.map(product => <Work key={product.id} product={product}/>)
            } 
 
          </div>
        </div>

        </div>
    );
};

export default Works;