import React from 'react'
import { NavLink } from 'react-router-dom';

import "./Forms.css";

export default function Address() {
   return (<div className="forms animate__animated animate__fadeInRight"  >
    <div className="mb-3 row">
      <h3 style={{alignContent:'center'}}>Address  </h3>
  </div>
  <div className="mb-3 row">
      <label htmlFor="city" className="col-sm-2 col-form-label">City</label>
      <div className="col-sm-10">
          <input type="text" className="form-control" id="city"  />
      </div>
  </div>
  <div className="mb-3 row">
      <label htmlFor="province" className="col-sm-2 col-form-label">Province</label>
      <div className="col-sm-10">
          <input type="text" className="form-control" id="province"  />
      </div>
  </div>
  <div className="mb-3 row">
      <label htmlFor="lm" className="col-sm-2 col-form-label">LandMark</label>
      <div className="col-sm-10">
          <input type="text" className="form-control" id="lm" />
      </div>
  </div>
  
  <div className="mb-3 row">
        <div className="mb-3 col-md">
  <button type="button" className="btn btn-primary">Checkout</button>
    </div>
  </div>
  <div className="mb-3 row">
    <NavLink to="/">  Back to Home  </NavLink>
  </div>
</div>
      
    )
} 