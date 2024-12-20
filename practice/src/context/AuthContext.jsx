import { children, useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext =createContext()

const AuthProvider=({children})=>{
    const [data,setData]=useState(null)
    const[message,setMessage]=useState("")
    const navigate= useNavigate()


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

    //login user 
    const loginuser= async(formData)=>{
        const config={
            method:"POST", 
           
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(formData)
        
        }
          const checkUser= await fetch(`http://localhost:5000/users?email=${formData.email}`,{method:"GET"})
          console.log(checkUser)
          if(checkUser.ok){
                    const user= await checkUser.json()
                    if(user.length >0){
                        setMessage("user ALREADY  exist")
                        setTimeout(() => {
                            navigate('/signup') 
                        }, 2000);
                       
                    }
          else{
            const response= await fetch("http://localhost:5000/users",config)
            console.log(response)
            if(response.status==201){
                   const user= await response.json();
                   console.log(user)
                    setData(user)
                    localStorage.setItem("login",JSON.stringify(user))
                     navigate("/about") 
                     setMessage("login successfully") 
               
            } else{
                    setMessage("you are not login please login first")
            }
        }
    }else{
        setMessage("something went wrong")
    }


    }
    const logout=()=>{
        localStorage.removeItem("login")
        setData(null)
        navigate('/login')
    }
     useEffect(()=>{
          const localuser=JSON.parse(localStorage.getItem("login"))
          setData(localuser)
        //   if(loginuser && loginuser.email){
            
        //    checkUserStatus(localuser.email)
        // //    navigate("/")
        //   }
        if( localuser){
            
            navigate('/')
        }
          else{
            navigate('/login')
          }
     },[])
    
        
     

    return(
    <AuthContext.Provider value={{ data ,
        message,
        loginuser,
        logout
    }}>
               
              {children}
    </AuthContext.Provider>
    )
}
export default AuthProvider