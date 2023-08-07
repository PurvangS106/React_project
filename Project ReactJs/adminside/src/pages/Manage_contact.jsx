import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

function Manage_contact() {
    useEffect(() => {
        fetch();
    }, []);

    const [alldata, setAlldata] = useState([]);
    const fetch = async () => {

        const res = await axios.get(` http://localhost:3000/user`);
        //console.log(res.data);
        setAlldata(res.data);
    }

    const ondelete=async(id)=>{

        const res = await axios.delete(` http://localhost:3000/user/${id}`);
        //console.log(res);
        if(res.status==200)
        {
            toast.success('Contact Delete Success');
            fetch();
        }
    }

    const onstatuschange=async(id)=>{
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        console.log(res.data);
        if(res.data.status=="Unblock"){
            const res = await axios.patch(`http://localhost:3000/user/${id}`,{status:"Block"});
            if(res.status==200)
            {
                toast.success('User Block Successfully');
                fetch();
            }
        }
        else{
            const res = await axios.patch(`http://localhost:3000/user/${id}`,{status:"Unblock"});
            if(res.status==200)
            {
                toast.success('User Unblock Successfully');
                fetch();
            }
        }
        

        
    }
    
    return (
        <>
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
            {/* Right side column. Contains the navbar and content of the page */}
            <div className="content-wrapper">
                <div className='container bg-success p-5 shadow'>
                    {/* <section id="main-content">
                        <section className="wrapper">
                            <h3>Manage User</h3> */}

                            <div className="row mt">
                                <div className="col-md-12">
                                    <div className="content-panel">
                                        <h1>Manage User</h1><hr /><table className="table table-striped table-advance table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Password</th>
                                                    <th>mobile</th>
                                                    <th>status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    alldata.map((item, index, ent) => {

                                                        return (
                                                            <tr>
                                                                <td>{item.id}</td>
                                                                <td>{item.name}</td>
                                                                <td>{item.email}</td>
                                                                <td>{item.password}</td>
                                                                <td>{item.mobile}</td>
                                                                <td>
                                                                    <button onClick={() => onstatuschange(item.id)} className="btn btn-danger btn-xs">
                                                                        {item.status=="Block"? 'Unblock':'Block'}
                                                                    </button> &nbsp;
                                                                </td>
                                                                <td>
                                                                    <button onClick={() => ondelete(item.id)} className="btn btn-danger btn-xs"><i className="fa fa-trash-o " /></button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </>
    )
}

export default Manage_contact