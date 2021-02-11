import './App.css';
import React, {useCallback, useRef, useState} from "react";
import produce from "immer";

const App = () => {
    const nextId = useRef(1);
    const [form,setForm] = useState({name:'',username:''});
    const [data,setData] = useState({ array:[], uselessValue:null});

    const handleChange = (e) => {

        setForm(produce(draft=>{
            draft[e.target.name] = e.target.value;
        }));
    };

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        setData(produce(draft=>{
            draft.array.push({...form,id:nextId.current});
        }));

        nextId.current++;

        setForm({name:'',username:''});
    }, [form, data]);

    const handleRemove = (id) =>{
        setData(produce(draft=>{
            draft.array.splice(draft.array.findIndex(v=>v.id===id),1);
        }));
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input name={"username"} placeholder={'ID'} value={form.username} onChange={handleChange}/>
                <input name={'name'} placeholder={'name'} value={form.name} onChange={handleChange}/>
                <button type={"submit"} >등록</button>
            </form>
            <ul>
                {data.array.map((v)=><li key={v.id} onClick={()=>handleRemove(v.id)}> name : {v.name}, username : ({v.username})</li>)}
            </ul>
        </div>
    )
}
export default App;
