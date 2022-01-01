import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Register=(props)=>{
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [fname,setFName]=useState('');
  const [lname,setLName]=useState('');
  
  const signup=()=>{
      axios.post('http://3.140.210.76:8000/api/user/',{
        "first_name": fname, 
        "last_name": lname, 
        "email": email, 
        "password": password
      }, 
      {headers: {
        "Content-type": "application/json",
    },  
}).then((res)=>{
    console.log(res)
    alert(res.data.message);
}).catch((err)=>alert(err.data))

  }
    return(
        
         <>
<section className="vh-100">
  <div className="container-fluid h-100">
    <div className="row d-flex justify-content-center align-items-center h-100 ">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src='https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_1280.png' className="img-fluid"
          alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={(e)=>{e.preventDefault();
        signup();
        }}>
          <div className="d-flex  align-items-center justify-content-center justify-content-lg-around ">
            <h1 className="fw-bold mb-4 me-3">Join Us</h1>
          </div>

         
        
         
          <div className="form-outline mb-4">
          <label className="form-label" for="name">First Name</label>
            <input required ={true} type="text" id="name" className="form-control form-control-lg"
              placeholder="Enter your Name" autoComplete='on' onChange={(e)=>setFName(e.target.value)} />
           
          </div>

        
          <div className="form-outline mb-3">
          <label className="form-label" for="lname">Last Name</label>
            <input required ={true} type="text" id="lname" className="form-control form-control-lg"
              placeholder="Enter password" onChange={(e)=>setLName(e.target.value)} />
            
          </div>
          <div className="form-outline mb-4">
          <label className="form-label" for="email">Email address</label>
            <input required ={true} type="email" id="email" className="form-control form-control-lg"
              placeholder="Enter a valid email address" autoComplete='on' onChange={(e)=>setEmail(e.target.value)} />
           
          </div>
          <div className="form-outline mb-3">
          <label className="form-label" for="cpassword">Password</label>
            <input required ={true} type="password" id="cpassword" className="form-control form-control-lg"
              placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} />
            
          </div>
      


          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" className="btn btn-primary btn-lg mb-1"
              >Register</button>
               <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link to="/login"
                className="link-danger">SignIn</Link></p>
            
          </div>

        </form>
      </div>
    </div>
  </div>
</section>

</>
        
      
    )
}
export default Register;
