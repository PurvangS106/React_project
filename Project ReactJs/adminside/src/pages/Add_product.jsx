import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Add_product() {
    const  redirect = useNavigate();

    const [formvalue,setFormvalue] = useState({
        id:"",
        image:"",
        name:"",
        days:"",
        person:"",
        description:"",
        price:""
    });

    const onchange=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
    }

    function validate(){
        var result = true;
        if(formvalue.image==""||formvalue.image==null){
            result=false;
            toast.error("Image field required");
        }
        if(formvalue.name==""||formvalue.name==null){
            result=false;
            toast.error("Name field required");
        }
        if(formvalue.days==""||formvalue.days==null){
            result=false;
            toast.error("Days field required");
        }
        if(formvalue.person==""||formvalue.person==null){
            result=false;
            toast.error("Person field required");
        }
        if(formvalue.description==""||formvalue.description==null){
            result=false;
            toast.error("Description field required");
        }
        if(formvalue.price==""||formvalue.price==null){
            result=false;
            toast.error("Price field required");
        }
        return result;
    }

    const onsubmit=async(e)=>{
        e.preventDefault();
        if(validate()){
            const res =await axios.post('http://localhost:3000/product',formvalue);
            if(res.status ==201){
                toast.success("Add product successfully");
                setFormvalue({...formvalue, image:"",name:"",days:"",person:"",description:"",price:""});
            }
        }
    }


  return (
    <div>
        <aside className="main-sidebar">
                <section className="sidebar">
                    {/* Sidebar user panel */}
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p>Purvang Suhagiya</p>
                            <a href="#"><i className="fa fa-circle text-success" /> Online</a>
                        </div>
                    </div>
                    {/* search form */}
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..." />
                            <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" /></button>
                            </span>
                        </div>
                    </form>
                    <ul className="sidebar-menu">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="active treeview">
                            <a href="#">
                                <i className="fa fa-dashboard" /> <NavLink to="/dashboard"> Dashboard</NavLink> 
                            </a>                           
                        </li>
                        
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-edit" /><NavLink to="/contact"> Forms</NavLink>
                                <i className="fa fa-angle-left pull-right" />
                            </a>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-table" /><NavLink to="/addproduct"> Add Product</NavLink>
                                <i className="fa fa-angle-left pull-right" />
                            </a>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-table" /><NavLink to="/product"> Manage Product</NavLink>
                                <i className="fa fa-angle-left pull-right" />
                            </a>
                        </li>
                        
                    </ul>
                </section>
               
            </aside>
        <div className="content-wrapper">
            <div className="row">
                <div className="col-md-12 col-sm-12 sol-xs-12">
                    <div className="panel panel-info">
                        <div className="panel-heading">Add More Packages for Tour</div>
                        <div className="panel-body">
                            <form>
                                <div className="form-group">
                                    <label>Place Image</label>
                                    <input type="url" name="image" id="image" className='form-control' value={formvalue.image} onChange={onchange}/>
                                </div>
                                <div className="form-group">
                                    <label>Place Name</label>
                                    <input type="text" name="name" id="name" className='form-control' value={formvalue.name} onChange={onchange}/>
                                </div>
                                <div className="form-group">
                                    <label>Days</label>
                                    <input type="number" name="days" id="days" className='form-control' value={formvalue.days} onChange={onchange}/>
                                </div>
                                <div className="form-group">
                                    <label>Person</label>
                                    <input type="number" name="person" id="person" className='form-control' value={formvalue.person} onChange={onchange}/>
                                </div>
                                <div className="form-group">
                                    <label>Place Description</label>
                                    <input type="text" name="description" id="description" className='form-control' value={formvalue.description} onChange={onchange}/>
                                </div>
                                <div className="form-group">
                                    <label>Price</label>
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-rupee"></i></span>
                                        <input type="number" name="price" id="price" className='form-control' value={formvalue.price} onChange={onchange}/>
                                    </div>
                                   
                                </div>
                                <div className="text-center">
                                    <button type="submit" className='btn btn-info' onClick={onsubmit} style={{margin:"20px"}}>Submit</button>
                                </div>
                                <div className="text-center">
                                    <button type="submit" onClick={()=>{redirect('/dashboard')}} className='btn btn-danger'>Main Menu</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add_product