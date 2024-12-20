import React from 'react';
import { Link } from 'react-router-dom';

function About(props) {
    return (
        <div>
           <Link to="/list/Mamta/22" className='text-white' state={{name:"mamtarani "}}>fullname:</Link>
           <Link to="/list/Sohit/21">secondname:</Link>
        </div>
    );
}

export default About;