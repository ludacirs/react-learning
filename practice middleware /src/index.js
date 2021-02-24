import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import rootReducer from "./modules";
import {Provider} from "react-redux";

function applyMiddleware(store, middlewares) {
    middlewares = middlewares.slice();
    middlewares.reverse();

    middlewares.forEach(middleware=>store.dispatch = middleware(store)(store.dispatch));
}

const store = createStore(rootReducer);


// function logger(store){
//     // const next = store.dispatch;
//     return function wrapDispatchAndLog(next){
//         return function dispatchAndLog(action){
//             console.group(action);
//             console.log('prev State',store.getState());
//             const result = next(action);
//             console.log('next State',store.getState());
//             console.groupEnd();
//             return result;
//         };
//     }
// }
// function call(store){
//     return function wrapDispatchAndCall(next){
//         return function dispatchAndCall(action){
//             console.group(action)
//             console.log('변화합니다');
//             const result = next(action);
//             console.groupEnd();
//             return result;
//         };
//     }
// }
const logger = store=>next=>action=>{
    console.group(action);
    console.log('prev:',store.getState());
    const result = next(action);
    console.log('next:',store.getState());
    console.groupEnd();
    return result;
}
const call = store=>next=>action=>{
    console.group(action);
    console.log('변화합니다');
    const result = next(action);
    console.groupEnd();
    return result;
}
applyMiddleware(store,[logger,call]);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
