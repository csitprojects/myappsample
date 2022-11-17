
import './Forms.css'
import { NavLink } from 'react-router-dom'

export default function Login() {
    return(<div className="forms animate__animated animate__fadeInRight"  >
          <div className="mb-3 row">
            <h3 style={{alignContent:'center'}}>Please Login</h3>
        </div>
        <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="staticEmail"  />
            </div>
        </div>
        <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword" />
            </div>
        </div>
        <div className="mb-3 row">
    <NavLink to="/form/register">  Create an account  </NavLink>
  </div> 
  <div className=" mb-3 row">
        <div className=" col-md">
  <button type="button" className="btn btn-primary">Login</button>
    </div>
  </div>
    </div>
  
        
    )
} 
