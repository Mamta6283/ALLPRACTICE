import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';

function SignUp(props) {
    const[formData ,setFormData]=useState(null)
    const[message ,setMessage]=useState("")
    const navigate=useNavigate()
    const handleInput=(e)=>{
        let{name,value}=e.target
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const handleSubmit= async(e)=>{
        e.preventDefault()
        const checkUser=await fetch(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`,{method:"GET"})
        console.log(checkUser)
        if(checkUser.ok){
            const user= await checkUser.json()
            console.log(user)
            if(user.length >0)
            {
            localStorage.setItem("login",JSON.stringify(user[0]))
        
              navigate('/about')
            }
            else{
                setMessage("email or password is incorrect")
            }
        }else{
            setMessage("something went wrong")
        }

    }
    return (
        
            
        <div className='container' >
            <div>

              <h1>signup form </h1>
            </div>
            {/* <h1>thankyou so much for Registertion{formData}</h1> */}
          
             <form>
               
       
        <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input type="email"  name="email" className='form-control'onChange={handleInput} />
                   

        </div>

        <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input type="password"  name="password" className='form-control'onChange={handleInput} />
             
        </div>
        
        <button className='btn btn-primary' onClick={handleSubmit}>Signup</button>
        <p>{message}</p>
      

       </form>
       </div> 
        
    );
}

export default SignUp;