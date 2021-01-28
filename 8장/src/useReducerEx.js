import React,{useReducer} from 'react';

const counterReducer = (state,action)=>{
    switch (action.type){
        case 'INCREMENT' :
            return {value : state.value +1};
        case 'DECREMENT' :
            return {value : state.value -1};
        default: return state;
    }
}

const ReduceCounter = ()=>{
    const [state,dispatch] = useReducer(counterReducer, {value:0});

    return(
        <div>
            <h1>{state.value}</h1>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>+</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
        </div>
    )
}

const infoReducer = (state, action) =>{
    const nextState = {
        ...state,
        [action.name] : action.value
    }
    return nextState;


}

export const ReducerInfo = ()=>{
    const [state,dispatch] = useReducer(infoReducer,{
        name : 'name',
        nickname : 'nickname',
    });
    const handleChange = (e) =>{
        dispatch(e.target);
    }

    return(
        <div>
            <input type="text" name={'name'} value={state.name} onChange={handleChange} />
            <input type="text" name={'nickname'} value={state.nickname} onChange={handleChange}/>
            <h2> 이름 : {state.name}</h2>
            <h2> 닉네임 : {state.nickname}</h2>
        </div>
    )
}

export default {ReduceCounter,ReducerInfo}