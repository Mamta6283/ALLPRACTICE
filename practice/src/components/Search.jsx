import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Search(props) {
    const [searchParam,setSearchParam]=useSearchParams();
    const myName=searchParam.get('name')
    return (
        <div>
            <h1>my name is {myName}</h1>
            <input type='text' placeholder='enter your number' onChange={(e)=>setSearchParam({name:e.target.value})}></input>
            <button onClick={()=>setSearchParam( {name:"mamta"})}>changeName</button>
            
        </div>
    );
}

export default Search;