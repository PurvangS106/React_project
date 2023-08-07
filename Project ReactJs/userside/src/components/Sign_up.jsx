import React, { useState } from 'react'
// import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

function Sign_up() {
    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        mobile: "",
        status: ""
      });
    
      const onchange = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
        //console.log(formvalue);
      }
    
      function validate() {
        var result = true;
        if (formvalue.name == "" || formvalue.name == null) {
          result = false;
          toast.error('name Field required');
        }
        if (formvalue.email == "" || formvalue.email == null) {
          result = false;
          toast.error('email Field required');
        }
        if (formvalue.password == "" || formvalue.password == null) {
          result = false;
          toast.error('password Field required');
        }
        if (formvalue.mobile == "" || formvalue.mobile == null) {
          result = false;
          toast.error('mobile Field required');
        }
        return result;
      }
    
      const onsubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
          const res = await axios.post(` http://localhost:3000/user`, formvalue);
          //console.log(res); 
          if (res.status == 201) {
            toast.success('Registered Success!');
            setFormvalue({ ...formvalue, name: "", email: "", mobile: "", password: "" });
          }
        }
    
      }

    return (
        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Sign Up</h6>
                        <h1 className="mb-5">Register here</h1>
                    </div>
                    <div className="row g-4">
                        <div className=" col-md-8 offset-md-2 wow fadeInUp" data-wow-delay="0.5s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" value={formvalue.name} onChange={onchange} name='name' className="form-control" id="name" placeholder="Your Name" />
                                            <label htmlFor="subject">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" value={formvalue.email} onChange={onchange} name='email' className="form-control" id="email" placeholder="Your Email" />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="password" value={formvalue.password} onChange={onchange} name='password' className="form-control" id="pwd" placeholder="Your Password" />
                                            <label htmlFor="name">Password</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="number" value={formvalue.mobile} onChange={onchange} name='mobile' className="form-control" id="mobile" placeholder="Your Name" />
                                            <label htmlFor="subject">Mobile Number</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit" onClick={onsubmit}>Sign up</button>
                                    </div>

                                </div>
                            </form>
                            <hr />
                            <Link to="/login">If you already registered then click Here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sign_up