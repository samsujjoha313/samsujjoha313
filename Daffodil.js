import React from 'react';
import { Link } from 'react-router-dom';


import PropTypes from 'prop-types';

function Daffodil(props){
 

   

        return(
            <>
    
  
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/">{props.name}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            
          </ul>
          <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:"20px",width:"20px",cursor:"pointer"}}></div>
          <div className="bg-secondary rounded mx-2" onClick={()=>{props.toggleMode('secondary')}} style={{height:"20px",width:"20px",cursor:"pointer"}}></div>
          <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:"20px",width:"20px",cursor:"pointer"}}></div>
          
          </div>
          
          <div className="form-check form-switch text-{props.mode==='light'? 'dark':'white'}">
  <input className="form-check-input" type="checkbox" onClick={()=>{props.toggleMode(null)}} role="switch" id="flexSwitchCheckDefault"></input>
  <label className="form-check-label text-white" for="flexSwitchCheckDefault">Enable Switch Mode</label>
</div>
         

        </div>
      </div>
    </nav>
    
   
    
    </>

 
    );
}
    
export default Daffodil;


Daffodil.propTypes = {
    name: PropTypes.string
}
