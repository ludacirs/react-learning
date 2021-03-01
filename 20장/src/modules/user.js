import axios from "axios";

const GET_USER_PENDING = 'user/GET_USER_PENDING';
const GET_USER_SUCCESS = 'user/GET_USER_SUCCESS';
const GET_USER_FAILURE = 'user/GET_USER_FAILURE';

const getUserPending = () => ({type: GET_USER_PENDING});
const getUserSuccess = data => ({type : GET_USER_SUCCESS, payload: data});
const getUserFailure = error => ({type: GET_USER_FAILURE, payload: error, error : true});

export const getUser = (id) => async dispatch=>{
    dispatch(getUserPending());
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch(getUserSuccess(response));
    } catch (e){
        dispatch(getUserFailure(e));
        throw e;
    }

}


const initialState = {
    user : null,
    loading : false,
    error : null
}

export default function reducer(state =initialState, action ){
    switch (action.type){
        case GET_USER_PENDING :
            return ({...state,loading: true});
        case GET_USER_SUCCESS :
            return ({...state, loading: false, user : action.payload.data});
        case GET_USER_FAILURE :
            return ({...state,loading: false, error: action.payload.error});
        default :
            return state;
    }
}
