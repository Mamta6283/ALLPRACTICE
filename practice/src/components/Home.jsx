import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const navigate=useNavigate()
    const handleBtn1=()=>{
        navigate('/about')
    }
    const handleBtn2=()=>{
        navigate('/search')
    }
    return (
        <div>
            <h2>home</h2>
            <button onClick={handleBtn1}>About</button>
            <button onClick={handleBtn2}>Search</button>
        </div>
    );
}

export default Home;