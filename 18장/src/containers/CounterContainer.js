import React, {useCallback} from 'react';
import Counter from "../components/Counter";
import {useDispatch, useSelector} from "react-redux";
import { decreaseAsync, increaseAsync} from "../modules/counter";

const CounterContainer = () => {
    const number = useSelector(state=>state.counter);
    const dispatch = useDispatch();

    const onIncrease = useCallback(()=>dispatch(increaseAsync()),[dispatch]);
    const onDecrease = useCallback(()=>dispatch(decreaseAsync()),[dispatch]);

    return (
        <div>
            <Counter number={number}
                     increase={onIncrease}
                     decrease={onDecrease}/>
        </div>
    );
};

export default CounterContainer;
