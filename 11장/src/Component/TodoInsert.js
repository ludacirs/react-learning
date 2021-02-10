import React, {useState} from "react";
import {MdAdd} from "react-icons/all";
import './TodoInsert.scss';

const TodoInsert = ({onInsert})=>{
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onInsert(value);
        setValue('');
    };
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return(
        <form className="TodoInsert" onSubmit={handleSubmit}>
            <input type="text" name={'todoText'} value={value} onChange={handleChange}/>
            <button type={"submit"}>
                <MdAdd/>
            </button>
        </form>
    );
}
export default TodoInsert;