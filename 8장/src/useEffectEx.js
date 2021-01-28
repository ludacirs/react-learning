import React, {useState, useEffect} from 'react';

const Info =()=>{
    const [names, setNames] = useState({
        name : '',
        nickname : '',
    });
    const {name, nickname} = names;

    useEffect(()=>{
        console.log(`??`);
        return ()=>{
        }
    },[]);

    const handleChange =(e) =>{
        const nextNames = {
            ...names,
            [e.target.name] : e.target.value,
        }
        setNames(nextNames);
    }

    return(
        <div>
            <input type="text" name={'name'} value={name} onChange={handleChange}/>
            <input type="text" name={'nickname'} value={nickname} onChange={handleChange}/>
            <h2> 이름 : {name}</h2>
            <h2> 닉네임 : {nickname}   </h2>
        </div>
    )
}
export default Info;