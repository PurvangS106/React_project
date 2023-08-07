import React, { useState,useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

function Editprofile() {
    const [formvalue, setFormvalue] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
      });
    
      const redirect=useNavigate();
      const {id}=useParams();
    
      useEffect(()=>{
        if(localStorage.getItem('id'))
        {
            fetchedit();
        }
        else
        {
            redirect('/');
        }
      },[]);
    
      const fetchedit=async()=>
      {
        const profiledata=await axios.get(`http://localhost:3000/user/${id}`);
        //console.log(profiledata.data);
        setFormvalue({...formvalue,name:profiledata.data.name,email:profiledata.data.email,password:profiledata.data.password,mobile:profiledata.data.mobile})
      }
    
    
      
    
      const onchange = (e) => {
        setFormvalue({ ...formvalue,[e.target.name]: e.target.value });
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
          const res = await axios.patch(`http://localhost:3000/user/${id}`, formvalue);
          //console.log(res); 
          if (res.status == 200) {
            toast.success('Update Success!');
            setFormvalue({ ...formvalue, name: "", email: "", mobile: "", password: "" });
            localStorage.setItem('name',formvalue.name);
            redirect('/profile');
          }
        }
    
      }

  return (
    <div>
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">{formvalue.name}</h6>
                <h1 className="mb-5">Profile</h1>
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
                                <button className="btn btn-primary w-100 py-3" type="submit" onClick={onsubmit}>Save</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Editprofile