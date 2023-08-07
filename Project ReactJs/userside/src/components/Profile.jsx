import React,{useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import axios from 'axios';

function Profile() {
    const  redirect = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('id')){
            fetchprofile();
        }
        else{
            redirect('/');
        }
    },[])

    const [userdata,setUserdata]=useState({});
    const fetchprofile=async()=>{
        const profiledata = await axios.get(`http://localhost:3000/user/${localStorage.getItem('id')}`)
        setUserdata(profiledata.data);
    }

  return (
    <div className="container p-5 shadow position-relative">
      <div className="menu"><i class='fas fa-external-link-alt' onClick={()=>{redirect('/')}} style={{fontSize:"30px",position:"absolute",top:"o",right:"30px"}}></i></div>
      <div className="row">
        <div className="col-6">
        <img className="img-fluid w-100" src="img/about.jpg" alt />
        </div>
        <div className="col-6 p-5">
          <h1 className='display-1'>{userdata.name}</h1>
          <br />
          <address>12,dsbhdh dgdshdhjkhd dhjkdh ddhjdhjd jdkfhjkd h dkjdjjh</address>
          <br />
          <p>{userdata.mobile}</p> 
          <br />
          <p>{userdata.email}</p>
          <br />
          <div className="btn" typeof='button'><a onClick={()=>{redirect('/editprofile/'+userdata.id)}} href="javascript:void(0)">Edit Profile</a></div>
        </div>
      </div>
    </div>
  )
}

export default Profile