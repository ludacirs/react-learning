import React from 'react';
import Counter from "../components/Counter";
import {useSelector, useStore} from "react-redux";
import {decrease, increase} from "../modules/counter";

const CounterContainer = () => {
    const number = useSelector(state=>state.counter);
    const store = useStore();
    return (
        <div>
            <Counter number={number}
                     increase={()=>store.dispatch(increase())}
                     decrease={()=>store.dispatch(decrease())}/>
        </div>
    );
};

export default CounterContainer;
