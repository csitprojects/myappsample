import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Forms.css";
export default function Register() {

    return (<div className="forms animate__animated animate__fadeInRight"  >
    <div className="mb-3 row">
      <h3 style={{alignContent:'center'}}>Register</h3>
  </div>
  <div className="mb-3 row">
      <label htmlFor="username" className="col-sm-2 col-form-label">Name </label>
      <div className="col-sm-10">
          <input type="text" className="form-control" id="username"  />
      </div>
  </div>
  <div className="mb-3 row">
      <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email </label>
      <div className="col-sm-10">
          <input type="text" className="form-control" id="staticEmail"  />
      </div>
  </div>
  <div className="mb-3 row">
      <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password </label>
      <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword" />
      </div>
  </div>
  <div className="mb-3 row">
      <label htmlFor="cnfPassword" className="col-sm-2 col-form-label">Confirm  </label>
      <div className="col-sm-10">
          <input type="password" className="form-control" id="cnfPassword" />
      </div>
  </div>
  <div className="mb-3 row">
        <div className="mb-3 col-md">
  <button type="button" className="btn btn-primary">Register</button>
    </div>
  </div>
  <div className="mb-3 row">
    <NavLink to="/">  Back to Home  </NavLink>
  </div>
</div>
    
    )

}