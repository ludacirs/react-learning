import React, {useCallback} from 'react';
import Todos from "../components/Todos";
import {useDispatch, useSelector} from "react-redux";
import {changeInput, insert, remove, toggle} from "../modules/todos";

const TodosContainer = () => {
    const [input, todos] = useSelector(state=>{
        return [state.todos.input, state.todos.todos];
    });
    const dispatch = useDispatch();
    const onToggle = useCallback((id)=>dispatch(toggle(id)),[dispatch]);
    const onRemove = useCallback((id)=>dispatch(remove(id)),[dispatch]);
    const onChangeInput = useCallback((input)=>dispatch(changeInput(input)),[dispatch]);
    const onInsert = useCallback((text)=>dispatch(insert(text)),[dispatch]);

    return (
        <div>
            <Todos input={input}
                   todos={todos}
                   onToggle={onToggle}
                   onRemove={onRemove}
                   onChangeInput={onChangeInput}
                   onInsert={onInsert} />
        </div>
    );
};

export default React.memo(TodosContainer);
