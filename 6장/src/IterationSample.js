import React, {useState} from 'react';

const IterationSample = ()=>{
    const [names, setName] = useState([
        {id: 1, text: '가나다'},
        {id: 2, text: '라마바'},
        {id: 3, text: '사아자'},
        {id: 4, text: '차카타'},
    ]);
    const [input,setInput] = useState('');
    const [keyId,setKeyId] = useState(names.length+1);



    const handleSubmit = (e)=>{
        e.preventDefault();
        const nextNames = names.concat({id : keyId, text : input});
        setName(nextNames);
        setKeyId(keyId+1);
        setInput('');
    }


    const onRemove = (id) => {
        const nextNames = names.filter(v=>v.id!==id);
        setName(nextNames);
    }
    const forRender = names.map(v=> <li key={v.id}> {`key : ${v.id}, value: ${v.text}`}
                                    <button onClick={()=>onRemove(v.id)}>del</button> </li>);

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            </form>
            <ul>
                {forRender}
            </ul>
        </div>
    )
}

export default IterationSample;