import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function Testimonials() {
    const redirect=useNavigate();
    const logout=()=>{
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        return redirect('/');
    }
    return (
        <div>
            {/* Spinner Start */}
            {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div> */}
            {/* Spinner End */}
            {/* Topbar Start */}
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
                            <NavLink to="/product" className="nav-item nav-link">Products</NavLink>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/destination" className="dropdown-item">Destination</NavLink>
                                    <NavLink to="/booking" className="dropdown-item">Booking</NavLink>
                                    <NavLink to="/team" className="dropdown-item">Travel Guides</NavLink>
                                    <NavLink to="/testimonial" className="dropdown-item active">Testimonial</NavLink>
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
                                <h1 className="display-3 text-white animated slideInDown">Testimonial</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                        <li className="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navbar & Hero End */}
            {/* Testimonial Start */}
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="text-center">
                        <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                        <h1 className="mb-5">Our Clients Say!!!</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel position-relative">
                        <div className="testimonial-item bg-white text-center border p-4">
                            <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/testimonial-1.jpg" style={{ width: 80, height: 80 }} />
                            <h5 className="mb-0">John Doe</h5>
                            <p>New York, USA</p>
                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                        <div className="testimonial-item bg-white text-center border p-4">
                            <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/testimonial-2.jpg" style={{ width: 80, height: 80 }} />
                            <h5 className="mb-0">John Doe</h5>
                            <p>New York, USA</p>
                            <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                        <div className="testimonial-item bg-white text-center border p-4">
                            <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/testimonial-3.jpg" style={{ width: 80, height: 80 }} />
                            <h5 className="mb-0">John Doe</h5>
                            <p>New York, USA</p>
                            <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                        <div className="testimonial-item bg-white text-center border p-4">
                            <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/testimonial-4.jpg" style={{ width: 80, height: 80 }} />
                            <h5 className="mb-0">John Doe</h5>
                            <p>New York, USA</p>
                            <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial End */}
            {/* Footer Start */}
            <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Company</h4>
                            <a className="btn btn-link" href>About Us</a>
                            <a className="btn btn-link" href>Contact Us</a>
                            <a className="btn btn-link" href>Privacy Policy</a>
                            <a className="btn btn-link" href>Terms &amp; Condition</a>
                            <a className="btn btn-link" href>FAQs &amp; Help</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Contact</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href><i className="fab fa-twitter" /></a>
                                <a className="btn btn-outline-light btn-social" href><i className="fab fa-facebook-f" /></a>
                                <a className="btn btn-outline-light btn-social" href><i className="fab fa-youtube" /></a>
                                <a className="btn btn-outline-light btn-social" href><i className="fab fa-linkedin-in" /></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Gallery</h4>
                            <div className="row g-2 pt-2">
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src="img/package-1.jpg" alt />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src="img/package-2.jpg" alt />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src="img/package-3.jpg" alt />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src="img/package-2.jpg" alt />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src="img/package-3.jpg" alt />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src="img/package-1.jpg" alt />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                                <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                © <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
                                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                                Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <a href>Home</a>
                                    <a href>Cookies</a>
                                    <a href>Help</a>
                                    <a href>FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
            {/* <Helmet>
                
                <script>
                    (function ($) {
                        "use strict";
                    var spinner = function () {
                        setTimeout(function () {
                            if ($('#spinner').length > 0) {
                                $('#spinner').removeClass('show');
                            }
                        }, 1);
                    };
                    spinner();

                    new WOW().init();


                    $(window).scroll(function () {
                    if ($(this).scrollTop() > 45) {
                                    $('.navbar').addClass('sticky-top shadow-sm');
                    } else {
                                    $('.navbar').removeClass('sticky-top shadow-sm');
                    }
                    });


                    const $dropdown = $(".dropdown");
                    const $dropdownToggle = $(".dropdown-toggle");
                    const $dropdownMenu = $(".dropdown-menu");
                    const showClass = "show";

                    $(window).on("load resize", function() {
                    if (this.matchMedia("(min-width: 992px)").matches) {
                        $dropdown.hover(
                            function () {
                                const $this = $(this);
                                $this.addClass(showClass);
                                $this.find($dropdownToggle).attr("aria-expanded", "true");
                                $this.find($dropdownMenu).addClass(showClass);
                            },
                            function () {
                                const $this = $(this);
                                $this.removeClass(showClass);
                                $this.find($dropdownToggle).attr("aria-expanded", "false");
                                $this.find($dropdownMenu).removeClass(showClass);
                            }
                        );
                    } else {
                                    $dropdown.off("mouseenter mouseleave");
                    }
                    });


                    $(window).scroll(function () {
                    if ($(this).scrollTop() > 300) {
                                    $('.back-to-top').fadeIn('slow');
                    } else {
                                    $('.back-to-top').fadeOut('slow');
                    }
                    });
                                    $('.back-to-top').click(function () {
                                        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
                                    return false;
                    });


                    $(".testimonial-carousel").owlCarousel({
                        autoplay: true,
                    smartSpeed: 1000,
                    center: true,
                    margin: 24,
                    dots: true,
                    loop: true,
                    nav : false,
                    responsive: {
                        0:{
                        items:1
                    },
                            768:{
                                items:2
                    },
                            992:{
                                items:3
                    }
                    }
                    });
    
                    })(jQuery);


                </script>
            </Helmet> */}
        </div>

    )
}

export default Testimonials