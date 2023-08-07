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
      const res = await axios.get(`http://localhost:3000/admin?email=${formvalue.email}`);
      console.log(res);
      if (res.data.length > 0) {
        if (res.data[0].password == formvalue.password) {
            // session variable store in browser 
            localStorage.setItem('id',res.data[0].id);
            localStorage.setItem('name',res.data[0].name);
            localStorage.setItem('designation',res.data[0].designation);
            localStorage.setItem('joining',res.data[0].joining);
            
           toast.success('Login Successfull !');
            return redirect('/dashboard');

         
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
        <div className="login-box">
            <div className="login-logo">
                <a href="../../index2.html"><b>Admin</b>LTE</a>
            </div>{/* /.login-logo */}
            <div className="login-box-body">
                <p className="login-box-msg">Sign in to start your session</p>
                <form action="../../index2.html" method="post">
                    <div className="form-group has-feedback">
                        <input type="email" value={formvalue.email} onChange={onchange} name='email' className="form-control" placeholder="Email" />
                        <span className="glyphicon glyphicon-envelope form-control-feedback" />
                    </div>
                    <div className="form-group has-feedback">
                        <input type="password" value={formvalue.password} onChange={onchange} name='password' className="form-control" placeholder="Password" />
                        <span className="glyphicon glyphicon-lock form-control-feedback" />
                    </div>
                    <div className="row">
                        <div className="col-xs-8">
                            <div className="checkbox icheck">
                                <label>
                                    <input type="checkbox" /> Remember Me
                                </label>
                            </div>
                        </div>{/* /.col */}
                        <div className="col-xs-4">
                            <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={onsubmit}>Sign In</button>
                        </div>{/* /.col */}
                    </div>
                </form>
                <div className="social-auth-links text-center">
                    <p>- OR -</p>
                    <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook" /> Sign in using Facebook</a>
                    <a href="#" className="btn btn-block btn-social btn-google-plus btn-flat"><i className="fa fa-google-plus" /> Sign in using Google+</a>
                </div>{/* /.social-auth-links */}
                <a href="#">I forgot my password</a><br />
                <a href="register.html" className="text-center">Register a new membership</a>
            </div>{/* /.login-box-body */}
        </div>

    )
}

export default Log_in