import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Form, Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Log_in() {
    const redirect=useNavigate();
  const [formvalue, setFormvalue] = useState({
    email: "",
    password: "",
  });

  const onchange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    //console.log(formvalue);
  }

  function validate() {
    var result = true;
    if (formvalue.email == "" || formvalue.email == null) {
      result = false;
      toast.error('email Field required');
    }
    if (formvalue.password == "" || formvalue.password == null) {
      result = false;
      toast.error('password Field required');
    }
    return result;
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const res = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
      console.log(res);
      if (res.data.length > 0) {
        if (res.data[0].password == formvalue.password) {
          if (res.data[0].status == "Unblock") {
             
            // session variable store in browser 
            localStorage.setItem('id',res.data[0].id);
            localStorage.setItem('name',res.data[0].name);
            
            toast.success('Login Successfull !');
            return redirect('/');

          }
          else {
            toast.error('Login Failed due to Blocked User !');
            setFormvalue({...formvalue,email:"",password:""});
          }
        }
        else {
          toast.error('Login Failed due to wrong Password !');
          setFormvalue({...formvalue,email:"",password:""});
        }
      }
      else {
        toast.error('Login Failed due to wrong Email !');
        setFormvalue({...formvalue,email:"",password:""});

      }
    }

  }
    return (
        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Log In</h6>
                        <h1 className="mb-5">Log in</h1>
                    </div>
                    <div className="row g-4">
                        <div className=" col-md-8 offset-md-2 wow fadeInUp" data-wow-delay="0.5s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="email" value={formvalue.email} onChange={onchange} name='email' className="form-control" id="email" placeholder="Your Email" />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="password" value={formvalue.password} onChange={onchange} name='password' className="form-control" id="pwd" placeholder="Your Password" />
                                            <label htmlFor="name">Password</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit" onClick={onsubmit}>Log in</button>
                                    </div>
                                    <hr />
                                    <Link to="/signup">If you not registered yet then click Here</Link>
                                </div>
                            </form>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Log_in