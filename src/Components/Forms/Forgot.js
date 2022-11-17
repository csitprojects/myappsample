import React from 'react'



export default function Forgot() {
    return (<div className="forms animate__animated animate__fadeInRight"  >
    <div className="mb-3 row">
      <h3 style={{alignContent:'center'}}>Please enter your email :</h3>
  </div>
  <div className="mb-3 row">
      <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
      <div className="col-sm-10">
          <input type="text" className="form-control" id="staticEmail"  />
      </div>
  </div>

  <div className=" mb-3 row">
        <div className=" col-md">
  <button type="button" className="btn btn-primary">Submit</button>
    </div>
  </div>
  
</div>
        
        
    )
}