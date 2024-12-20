import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute(props) {
    const {component}=props
    const navigate=useNavigate()
//    const [isLoggedin ,setIsLoggedIn]=useState(false)

//    const checkUser =async(email)=>{
//     const response= await fetch(`http://localhost:5000/users?email=${email}`,{method:"GET"})
//     if(response.ok){
//         const userData= await response.json();
//         if(userData.length >0){
//             // localStorage.getItem("login")
//             setIsLoggedIn(true)
//         }
//         else{
//             setIsLoggedIn(false)
//             localStorage.removeItem("login")
//         }
//     } 
//    }

    useEffect(()=>{
        const localuser=JSON.parse(localStorage.getItem("login"))
        if( !localuser){
            // checkUser(localuser.email)
            // setIsLoggedIn(false)
            navigate("login")
        }
        // navigate('/')

    },[])
    const handlebtn=()=>{
    localStorage.removeItem("login")
       
        navigate('/login')
       
    }
    return (
        <div>
           {/* {isLoggedin ? <component></component> :null} */}
           <component></component>
           <h1>this is home page</h1>
           <button onClick={handlebtn}>go to login page</button>
           
        </div>
    );
}

export default ProtectedRoute;