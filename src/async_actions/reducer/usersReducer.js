import { ADD_USERS_DATA, DELETE_USERS_DATA, GET_USERS_DATA, UPDATE_USERS_DATA, USERS_DATA_FAILURE, USERS_DATA_PENDIND, USERS_DATA_SUCCESS } from "../type/type";

const initialState = {
    loading: false,
    userData: [],
    error: ''
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_DATA:
            return {
                ...state, userData: [], loading: true
            }

        case ADD_USERS_DATA:
            return {
                ...state, userData: [...state.userData, action.payload], loading: true
            }

        case DELETE_USERS_DATA:
            return {
                ...state, userData: state.userData.filter((user) => user.id !== action.payload), loading: true
            }
            case UPDATE_USERS_DATA : 
            return {
                ...state,
                userData : state.userData.map((user)=>
                        user.id === action.payload.id ? action.payload : user
                        ),
                        loading :true
            };
        case USERS_DATA_PENDIND:
            return {
                ...state, loading: true
            }

        case USERS_DATA_SUCCESS:
            return {
                ...state, loading: false, userData: action.payload
            }

        case USERS_DATA_FAILURE:
            return {
                ...state, loading: false,
                // error: "something went wrong"
                error: action.payload,
                userData: []

            }


        default: return state
    }
}
export default usersReducer