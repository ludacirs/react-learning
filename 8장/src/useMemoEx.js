import React, {useState,useMemo,useCallback} from 'react';

const calAver = (list)=>{
    return list.length ? list.reduce((acc,v)=>acc+v)/list.length : 0;
}

const Average = ()=>{
    const [list, setList] = useState([]);
    const [number,setNumber] = useState(0);

    const avg = useMemo(()=>calAver(list),[list]);


    // const forRender =()=>{
    //     return list.map((v,i)=><li key={i}>{v}</li>);
    // };

    const handleClick= ()=> {
        const nextList = list.concat([Number(number)]);
        setList(nextList);
    }
    const handleChange =(e)=>{
        setNumber(e.target.value);
    }
    const forRender = useCallback(()=>{
        return list.map((v,i)=><li key={i}>{v}</li>);
    },[list]);


    return (
        <div>
            <input type="text" name={'number'} value={number} onChange={handleChange}/>
            <button onClick={handleClick}>등록</button>
            <h1>평균값 : {avg}</h1>
            <ul>{forRender()}</ul>
        </div>
    )
}

export default Average;