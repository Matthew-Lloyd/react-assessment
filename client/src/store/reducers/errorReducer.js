import * as ErrorTypes from '../actions/errorTypes';


const initialState = {
    error: ""
};

export default function errorReducer(state = initialState, action) {
    switch (action.type) {
        case ErrorTypes.GET_TODOS_ERROR:
            return { message: action.error };
        case ErrorTypes.ADD_TODO_ERROR:
            return { message: action.error };
        case ErrorTypes.COMPLETE_TODO_ERROR:
            return { message: action.error };
        case ErrorTypes.REMOVE_TODO_ERROR:
            return { message: action.error };
        case ErrorTypes.EDIT_TODO_ERROR:
            return { message: action.error };
        default:
            return state;
    }
}
