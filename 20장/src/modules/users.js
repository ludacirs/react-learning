import axios from 'axios';

const GET_USERS_PENDING = 'users/GET_USERS_PENDING';
const GET_USERS_SUCCESS = 'users/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'users/GET_USERS_FAILURE';

const getUsersPending = () => ({ type: GET_USERS_PENDING });
const getUsersSuccess = payload => ({ type: GET_USERS_SUCCESS, payload });
const getUsersFailure = payload => ({
  type: GET_USERS_FAILURE,
  error: true,
  payload
});

export const getUsers = () => async dispatch => {
  try {
    dispatch(getUsersPending());
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    dispatch(getUsersSuccess(response));
  } catch (e) {
    dispatch(getUsersFailure(e));
    throw e;
  }
};

const initialState = {
  users: null,
  loading : false,
  error : null,
};

function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users : action.payload.data,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error : true,
      };
    default:
      return state;
  }
}

export default users;
