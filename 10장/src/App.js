import React,{useState, useRef, useCallback} from "react";
import TodoTemplate from "./Component/TodoTemplate";
import TodoInsert from "./Component/TodoInsert";
import TodoList from "./Component/TodoList";

const App = () => {
    const [todos, setTodos] = useState([
        { id:1,text : '리액트의 기초 알아보기',checked: true},
        { id:2,text : '컴포넌트 스타일링 해보기',checked: true},
        { id:3,text : '일정 관리 앱 만들어 보기',checked: false},
    ]);
    const nextId = useRef(todos.length+1);

    const onInsert = useCallback(
        text=>{
            const todo = {
                id:nextId.current,
                text,
                checked:false
            };
            setTodos(todos.concat(todo));
            nextId.current++;
        },
        [todos]
    );
    const onToggle = (id)=>{
        setTodos(todos.map(todo=> {
            return todo.id === id ? {...todo, checked: !todo.checked}:todo;
        }))
    }
    const onRemove = (id)=>{
        setTodos(todos.filter(todo=>todo.id!==id));
    }
    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </TodoTemplate>
    )
};

export default App;
