import React, { useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';  //THIS IS COMPONENT 
import { AuthContext } from '../context/AuthContext';



function Navbar(props) {
  const {data ,logout}=useContext(AuthContext)
  // const navigate=useNavigate()

  //     const logout=()=>{
  //       localStorage.removeItem("login")
  //       setData(null)
  //       navigate("/login") 
  //     }

    return (
        <div>  
            <nav className="navbar navbar-expand-lg bg-dark ">
  <div className="container-fluid ">
    <Link className="navbar-brand text-white " to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">    
       {
       !data?
        <>
         <li className="nav-item " >
          <Link className="nav-link active text-white" aria-current="page" to="/" >Home</Link>
        </li>
               
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/signup">Signup </Link>
        </li>
        </>:
        <>
         <li className="nav-item">
         <Link className="nav-link active text-white" aria-current="page" to="/task-list">TaskList</Link>
       </li>
       

       <li className="nav-item">
         <Link className="nav-link active text-white" aria-current="page" to="/create-task">CreateTask</Link>
       </li>

       <li className="nav-item">
         <Link className="nav-link active text-white" aria-current="page" to="/search">search</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link active text-white" aria-current="page" to="/about">About</Link>
       </li>
       {/* <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/signup">Signup </Link>
        </li> */}
      
          
       

       


        <li className="nav-item">
          <Link className="nav-link text-white" to="#" onClick={logout}>logout  </Link>
          {/* <a class="dropdown-item" href="#" onClick={logout} >logout</a> */}
        </li>
        <li className="nav-item dropdown ">
          <Link className="nav-link dropdown-toggle text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          
           
          
        </Link>
          
        {/* <ul class="dropdown-menu dropdown-menu-end">
            <li><Link class="dropdown-item" to="/profile">profile</Link></li>
            <li><a class="dropdown-item" href="#" onClick={logout} >logout</a></li>
          
          </ul> */}
           {/* .meaning here is contains this value */}
          
         
        </li>
      </>
}

      </ul>
        
     
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;