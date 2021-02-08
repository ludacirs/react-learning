import TodoListItem from "./TodoListItem";
import React from "react";

const TodoList = ({todos, onRemove, onToggle})=>{
    const forRender = todos.map(todo=> <TodoListItem onToggle={onToggle} onRemove={onRemove} key={todo.id} todo={todo}/>);

    return(
        <div className="Todolist">
            {forRender}
        </div>
    );
}

export default TodoList;