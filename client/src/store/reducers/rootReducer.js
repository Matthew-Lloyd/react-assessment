import * as ActionTypes from '../actions/actionTypes'

const initialState = {
    todos: [],
    loaded: false
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_TODOS_SUCCESS:
            return {
                ...state,
                loaded: true,
                todos: action.todos
            };
        case ActionTypes.ADD_TODO:
            return { ...state, todos: [...state.todos, action.todo] };
        case ActionTypes.COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.id) {
                        return {
                            ...todo,
                            ...action.updates
                        }
                    }
                    return todo;
                })
            }
        case ActionTypes.REMOVE_TODO:
            let todos = state.todos.filter(val => val.id !== action.id);
            return { ...state, todos };
        default:
            return state;
    }
}