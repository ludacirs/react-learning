import React from 'react';
import TodoItem from "./TodoItem";

const Todos = ({
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
               }) => {

    function onSubmit(e) {
        e.preventDefault();
        onChangeInput('');
    }

    return (
        <div>
            <form action="submit" onSubmit={onSubmit}>
                <input type="text" value={input} onChange={(e)=>onChangeInput(e.target.value)}/>
                <button onClick={()=>onInsert(input)} type={"submit"}>등록</button>
            </form>
            <div>
                {todos.map(todo=> <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>)}
            </div>
        </div>
    );
};

export default Todos;
