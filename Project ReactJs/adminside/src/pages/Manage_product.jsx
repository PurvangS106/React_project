import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, NavLink,useNavigate} from 'react-router-dom';

function Manage_product() {
    const redirect = useNavigate();

    useEffect(() => {
        fetch();
    }, []);

    const [alldata, setAlldata] = useState([]);
    const fetch = async () => {

        const res = await axios.get(`http://localhost:3000/product`);
        //console.log(res.data);
        setAlldata(res.data);
    }

    const ondelete = async (id) => {

        const res = await axios.delete(`http://localhost:3000/product/${id}`);
        //console.log(res);
        if (res.status == 200) {
            toast.success('Product Delete Success');
            fetch();
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

        <div className='content-wrapper '>
            <div className="row mt" style={{padding:"20px"}}>
                <div className="col-md-12">
                    <div className="content-panel" style={{textAlign:"center"}}>
                        <h1  style={{textAlign:"left"}}>Manage User</h1><hr />
                        <table style={{textAlign:"left"}} className="table table-striped table-advance table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Days</th>
                                    <th>Person</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    alldata.map((item, index, ent) => {

                                        return (
                                            <tr>
                                                <td>{item.id}</td>
                                                <td><img src={item.image} alt="No Img" style={{ width: "50px", height: "50px", textAlign: "center" }} /></td>
                                                <td>{item.name}</td>
                                                <td>{item.days}</td>
                                                <td>{item.person}</td>
                                                <td>{item.description}</td>
                                                <td>{item.price}</td>
                                                <td>
                                                    <button onClick={() => ondelete(item.id)} className="btn btn-danger btn-xs"><i className="fa fa-trash-o " /></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <button type="submit" onClick={()=>{redirect('/dashboard')}} className='btn btn-danger text-center'>Main Menu</button>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Manage_product