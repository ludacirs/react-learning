import React from "react";

const TodoItem = ({todo, onToggle, onRemove}) => {
    return (
        <div >
            <input onClick={()=>onToggle(todo.id)} type="checkbox" checked={todo.done} readOnly/>
            <span style={{textDecoration : todo.done ? 'line-through' : 'none'}}>{todo.text}</span>
            <button onClick={()=>onRemove(todo.id)}>삭제</button>
        </div>
    );
};

export default TodoItem;