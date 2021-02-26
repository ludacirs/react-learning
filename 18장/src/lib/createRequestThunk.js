
// export default function createRequestThunk (type,request){
//     const SUCCESS = `${type}_SUCCESS`;
//     const FAILURE = `${type}_FAILURE`;
//
//     return params => async dispatch =>{
//         dispatch({type: type});
//         try{
//             const response = await request(params);
//             dispatch({
//                 type:SUCCESS,
//                 payload: response.data
//             });
//         }catch(e){
//             dispatch({
//                 type: FAILURE,
//                 payload: e,
//                 error: true,
//             });
//         }
//     };
// };

import {endLoading, startLoading} from "../modules/loading";

export default function createRequestThunk (type, request){
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return params => async dispatch =>{
        dispatch({type: type});
        dispatch(startLoading(type));
        try{
            const response = await request(params);
            dispatch({
                type:SUCCESS,
                payload: response.data
            });
            dispatch(endLoading(type));
        }catch(e){
            dispatch({
                type: FAILURE,
                payload: e,
                error: true,
            });
            dispatch(endLoading(type));
        }
    };
};