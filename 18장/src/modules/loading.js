import {createAction} from "redux-actions";

const START_LOADING = 'loading/START_LOADING';
const END_LOADING = 'loading/END_LOADING';

export const startLoading = createAction(
    START_LOADING,
    requestType=>requestType,
);

export const endLoading = createAction(
    END_LOADING,
    requestType=>requestType
);

const initialState = {};


export default function reducer(state = initialState, action){
    switch (action.type){
        case START_LOADING :
            return {...state, [action.payload] : true};
        case END_LOADING :
            return {...state, [action.payload] : false};
        default :
            return state;
    }
};