import React, { useContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

function Login(props) {
    // const intial={
    //     name:"",
    //     email:"",
    //     password:""
    // }
    const [formData ,setFormData]=useState({
        name:"",
        email:"",
        password:""
    })
    // const [data,setData]=useState(null)
    // const [showData,setShowData]=useState(false)
    // const[message,setMessage]=useState("")
    // const navigate= useNavigate()

    const {loginuser,message}=useContext(AuthContext)
    const handleInput=(e)=>{
                 let {name,value}=e.target
                 setFormData((prev)=>({
                         ...prev,
                         [name]:value
                 }))       
    }

    // const config={
    //     method:"POST", 
       
    //     headers:{
    //         "content-type":"application/json",
    //     },
    //     body:JSON.stringify(formData)
    
    // }
    // const checkUserStatus=async(email)=>{
    //     const response=await fetch(`http://localhost:5000/users?email=${email} `,{method:"GET"})
    //     console.log(response)
    //     if(response.ok){
    //         const userData=await response.json()
    //         if(userData.length > 0){
    //             setData(userData[0])
    //             setMessage("user already exist")
    //             // navigate('/')
    //         }
    //         else{ 
    //             setMessage("user doesnot exist")
    //             setData(null)
    //             localStorage.removeItem("login")
    //         }
    //     }else{
    //         setMessage("something went wrong")
    //     }
    // }
    const handleSubmit= async(e)=>{
              e.preventDefault();
              loginuser(formData)
   
    }
    //       const checkUser= await fetch(`http://localhost:5000/users?email=${formData.email}`,{method:"GET"})
    //       console.log(checkUser)
    //       if(checkUser.ok){
    //                 const user= await checkUser.json()
    //                 if(user.length >0){
    //                     setMessage("user ALREADY  exist")
    //                     setTimeout(() => {
    //                         navigate('/signup') 
    //                     }, 2000);
                       
    //                 }
    //       else{
    //         const response= await fetch("http://localhost:5000/users",config)
    //         console.log(response)
    //         if(response.status==201){
    //                const user= await response.json();
    //                console.log(user)
    //                 setData(user)
    //                 localStorage.setItem("login",JSON.stringify(user))
    //                  navigate("/") 
    //                  setMessage("login successfully") 
               
    //         } else{
    //                 setMessage("you are not login please login first")
    //         }
    //     }
    // }else{
    //     setMessage("something went wrong")
    // }


    // }
    
    //  useEffect(()=>{
    //       const loginuser=JSON.parse(localStorage.getItem("login"))
    //       setData(loginuser)
    //     //   if(loginuser && loginuser.email){
            
    //        checkUserStatus(loginuser.email)
    //     // //    navigate("/")
    //     //   }
    //     if(loginuser){
            
    //         navigate('/')
    //     }
    //       else{
    //         navigate('/login')
    //       }
    //  },[])
    
        
      

    return (
        <div>
        <div className='container' >
            <div>

              <h1>login form </h1>
            </div>
            {/* <h1>thankyou so much for Registertion{formData}</h1> */}
          
             <form>
               
        <div className='mb-3'>
            <label className='form-label'>Name</label>
            <input type="text"  name="name" className='form-control'  onChange={handleInput} />

        </div>
        <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input type="email"  name="email" className='form-control'onChange={handleInput} />
                   

        </div>

        <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input type="password"  name="password" className='form-control'onChange={handleInput} />
             
        </div>
        
        <button className='btn btn-primary' onClick={handleSubmit}>login</button>
        <p>{message}</p>
        {/* <button >logout</button> */}

       </form> 
       {/* <p>{ data && data.email}</p> */}
       </div> 
       {/* {
        showData?

           <>
         
            <table>
                {/* <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead> 
                <tbody>
                    {
                        data.map((item,index)=>(
                            <>
                            {/* <tr key={index}> 

                            <h1> thankyou for Registertion {item.name}</h1>
                            {/* <td>{item.email}</td> 
                            {/* <td>{item.password}</td> 
                            {/* </tr> 
                            </>
                           
                        ))
                    }
                </tbody>
            </table>
            
           </>:  ""
}
       

        */}
        </div>
    );
}

export default Login;