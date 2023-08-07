import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'

function Product() {

    const redirect=useNavigate();
    const logout=()=>{
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        return redirect('/');
    }

    useEffect(()=>{
        fetchproduct();
    },[]);

    const [data,setData] = useState([]);
    const fetchproduct=async()=>{
        const res= await axios.get('http://localhost:3000/product');
        setData(res.data);
    }

  return (
    <div>
        <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                        <small className="me-3 text-light"><i class="fa fa-user-circle-o"></i> &nbsp;
                                {(()=>{
                                    if(localStorage.getItem('id')){
                                        return(<Link to="/profile" style={{color:"white" }}>Hi.. {localStorage.getItem('name')}</Link>
                                        )}
                                })()}
                            </small>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-twitter fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-facebook-f fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-linkedin-in fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-instagram fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href><i className="fab fa-youtube fw-normal" /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar & Hero Start */}
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href className="navbar-brand p-0">
                        <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3" />Tourist</h1>
                        {/* <img src="img/logo.png" alt="Logo"> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                            <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
                            <NavLink to="/package" className="nav-item nav-link">Packages</NavLink>
                            <NavLink to="/product" className="nav-item nav-link active">Products</NavLink>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/destination" className="dropdown-item">Destination</NavLink>
                                    <NavLink to="/booking" className="dropdown-item">Booking</NavLink>
                                    <NavLink to="/team" className="dropdown-item">Travel Guides</NavLink>
                                    <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                                </div>
                            </div>
                            <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                        </div>
                        {(() => {
                                if (localStorage.getItem('id')) {
                                    return (
                                        <a href="javascript:void(0)" className="btn btn-primary rounded-pill py-2 px-4" onClick={logout}>Log out</a>
                                    )
                                }
                                else {
                                    return (
                                        <NavLink to="/signup" className="btn btn-primary rounded-pill py-2 px-4">Register</NavLink>
                                    )
                                }


                            })()}
                    </div>
                </nav>
                <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                    <div className="container py-5">
                        <div className="row justify-content-center py-5">
                            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                                <h1 className="display-3 text-white animated slideInDown">Our Products</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                        <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-2">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h1 className="section-title text-center mb-5 p-2"> Every Product is avialable for your tour.</h1>
                    </div>
                </div>
                <div className="row g-4 justify-content-center">
                    {
                        data.map((item)=>{
                            return(
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="package-item">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src={item.image} alt/>
                                    </div>
                                    <div className="d-flex border-bottom">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2" />{item.name}</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />{item.days} Days</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />{item.person} Person</small>
                                    </div>
                                    <div className="text-center p-4">
                                        <h3 className="mb-0"> &#8377; {item.price}</h3>
                                        <div className="mb-3">
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                        </div>
                                        <p>{item.description}</p>
                                        <div className="d-flex justify-content-center mb-2">
                                            <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                                            <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                               /* <div className="col-lg-3 col-md-6 mb-4 pb-2">
                                    <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                                        <div className="bg-primary mt-3 mb-4 p-1" style={{height:"300px",width:"100%"}}>                             
                                            <img className=" w-100 h-100" src={item.image} style={{objectFit:"cover"}}/>                    
                                        </div>
                                        <h5 className="fw-bold mb-4">{item.name}</h5>
                                        <p className="fw-bold mb-4">{item.description}</p>
                                        <div className="bg-primary m-2 p-3">
                                            <h4 className="font-weight-bold text-white mb-0"><i class="fa fa-rupee"></i> {item.price}</h4>
                                        </div>
                                        <a href className='btn btn-sm btn-secondary'>Order Now</a>
                                    </div>
                                </div>*/
                            )
                        })
                    }
                </div>
            </div>
    </div>
  )
}

export default Product