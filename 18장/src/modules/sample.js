import * as api from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";


const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USER = 'sample/GET_USER';
const GET_USER_SUCCESS = 'sample/GET_USER_SUCCESS';
const GET_USER_FAILURE = 'sample/GET_USER_FAILURE';

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUser = createRequestThunk(GET_USER, api.getUsers);

// export const getPost = id => async dispatch =>{
//     dispatch({type:GET_POST});
//     try{
//         const response = await api.getPost(id);
//         dispatch({
//             type:GET_POST_SUCCESS,
//             payload : response.data,
//         });
//     } catch (e){
//         dispatch({
//             type:GET_POST_FAILURE,
//             payload : e,
//             error : true,
//         });
//         throw e;
//     }
// };
//
// export const getUser = id => async dispatch =>{
//     dispatch({type:GET_USER});
//     try{
//         const response = await api.getUsers();
//         dispatch({
//             type:GET_USER_SUCCESS,
//             payload:response.data,
//         });
//     }catch (e){
//         dispatch({
//             type :GET_USER_FAILURE,
//             payload : e,
//             error : true,
//         });
//         throw e;
//     }
// };

// const initialState = {
//     loading : {
//         GET_POST : false,
//         GET_USERS : false,
//     },
//     post: null,
//     users: null,
// };
//
// export default function reducer(state = initialState, action){
//     switch (action.type){
//         case GET_POST :
//             return ({...state, loading: {...state.loading, GET_POST : true}});
//         case GET_POST_SUCCESS :
//             return ({...state, loading: {...state.loading, GET_POST: false}, post : action.payload});
//         case GET_POST_FAILURE :
//             return ({...state, loading: {...state.loading, GET_POST: false}});
//         case GET_USER :
//             return ({...state, loading: {...state.loading, GET_USERS: true}});
//         case GET_USER_SUCCESS :
//             return ({...state, loading: {...state.loading, GET_USERS: false}, users : action.payload});
//         case GET_USER_FAILURE :
//             return ({...state, loading: {...state.loading, GET_USERS: false}});
//         default : return state;
//     }
// };

const initialState = {
    post: null,
    users: null,
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case GET_POST_SUCCESS :
            return ({...state, loading: {...state.loading, GET_POST: false}, post : action.payload});
        case GET_POST_FAILURE :
            return ({...state, loading: {...state.loading, GET_POST: false}});
        case GET_USER_SUCCESS :
            return ({...state, loading: {...state.loading, GET_USERS: false}, users : action.payload});
        case GET_USER_FAILURE :
            return ({...state, loading: {...state.loading, GET_USERS: false}});
        default : return state;
    }
};