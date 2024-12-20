import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function List(props) {
    const {name ,age}=useParams()
    const location=useLocation()
    console.log(location)
    return (
        <div>
            <h1 className='text-white'> my name is {name}     and my age is {age}</h1>
        </div>
    );
}

export default List;