import React from 'react';
import useInputs from './useInputs';

const CustomInfo = ()=>{
    const [state,onChange] = useInputs({
        name: '',
        nickname : '',
    });
    return(
        <div>
            <input type="text" name={'name'} value={state.name} onChange={onChange} />
            <input type="text" name={'nickname'} value={state.nickname} onChange={onChange}/>
            <h2> 이름 : {state.name}</h2>
            <h2> 닉네임 : {state.nickname}</h2>
        </div>
    )
}

export default CustomInfo;