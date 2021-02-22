import React, {useCallback} from 'react';
import Counter from "../components/Counter";
import {useDispatch, useSelector} from "react-redux";
import {decrease, increase} from "../modules/counter";

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onDecrease = useCallback(()=>dispatch(decrease()),[dispatch]);
    const onIncrease = useCallback(()=>dispatch(increase()),[dispatch]);
    return (
        <div>
            <Counter number={number} onDecrease={onDecrease} onIncrease={onIncrease}/>
        </div>
    );
};

export default CounterContainer;
