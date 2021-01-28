import React, {useState,useMemo,useRef} from 'react';

const calAver = (list)=>{
    return list.length ? list.reduce((acc,v)=>acc+v)/list.length : 0;
}

export const AverageRef = ()=>{
    const [list, setList] = useState([]);
    const [number,setNumber] = useState(0);
    const inputEl = useRef(null);

    const avg = useMemo(()=>calAver(list),[list]);

    const forRender =()=>{
        return list.map((v,i)=><li key={i}>{v}</li>);
    };

    const handleClick= ()=> {
        const nextList = list.concat([Number(number)]);
        inputEl.current.focus();
        setList(nextList);
    }
    const handleChange =(e)=>{
        setNumber(e.target.value);
    }

    return (
        <div>
            <input type="text" name={'number'} value={number} onChange={handleChange} ref={inputEl}/>
            <button onClick={handleClick}>등록</button>
            <h1>평균값 : {avg}</h1>
            <ul>{forRender()}</ul>
        </div>
    )
}
export const LocalVar = ()=>{
    const variable = useRef(1);
    variable.current = 10;
    console.log(variable);
    return (
        <div>

        </div>
    )
}

export default {AverageRef,LocalVar};