import React, {useState} from "react";
import Counter from './useStateEx';
import Info from './useEffectEx';
import {ReduceCounter, ReducerInfo} from './useReducerEx';
import Average from './useMemoEx';
import {AverageRef,LocalVar} from './useRefEx';
import CustomInfo from './customHook';

function App(){
    return <CustomInfo/>;
}
export default App;
