import React, {useState, useRef, useCallback, useReducer} from "react";
import TodoTemplate from "./Component/TodoTemplate";
import TodoInsert from "./Component/TodoInsert";
import TodoList from "./Component/TodoList";

const creatDummyTodos= ()=>{
    const arr = [];
    for(let i=0; i<2501;i++){
        arr.push({
            id:i,
            text : `할 일 ${i}`,
            checked : false,
        });
    }
    return arr;
}
// const App = () => {
//     const [todos, setTodos] = useState(creatDummyTodos);
//     const nextId = useRef(todos.length+1);
//
//     const onInsert = useCallback(
//         text=>{
//             const todo = {
//                 id:nextId.current,
//                 text,
//                 checked:false
//             };
//             setTodos(todos=>todos.concat(todo));
//             nextId.current++;
//         }, [todos]);
//
//     const onToggle = useCallback(id=>{
//         setTodos((todos)=>
//             todos.map(v=> v.id === id ? {...v, checked: !v.checked} : v)
//         );
//     },[]);
//
//     const onRemove = useCallback(id=>{
//         setTodos((todos)=> todos.filter(v=> v.id!==id)
//         );
//     },[]);
//
//     return (
//         <TodoTemplate>
//             <TodoInsert onInsert={onInsert}/>
//             <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
//         </TodoTemplate>
//     )
// };

//use useReducer

const todoReducer = (todos, action) => {
    switch (action.type){
        case 'INSERT' :
            return todos.concat(action.todo);
        case 'REMOVE' :
            return todos.filter(v=>v.id!==action.id);
        case 'TOGGLE' :
            return todos.map(v=>v.id===action.id ? {...v,checked: !v.checked}: v);
        default : return todos;
    }
};

const App = () => {
    const [todos, dispatch] = useReducer(todoReducer,undefined,creatDummyTodos);
    const nextId = useRef(todos.length+1);

    const onInsert = useCallback(text=>{
        const todo = {
            id : nextId,
            text : text,
            checked: false
        };
        dispatch({type:'INSERT',todo});
        nextId.current++;
    },[]);

    const onRemove =useCallback(id=>{
        dispatch({type:'REMOVE', id});
    },[]);
    const onToggle =useCallback(id=>{
        dispatch({type:'TOGGLE', id});
    },[]);

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </TodoTemplate>
    )
};
export default App;
