import * as ActionTypes from "./actionTypes"


export function getTodos() {
    return {
        type: ActionTypes.GET_TODOS_INITIALIZE
    };
}

export function handleAdd(todo) {
    return {
        type: ActionTypes.ADD_TODO,
        todo
    };
}

export function handleRemove(id) {
    return {
        type: ActionTypes.REMOVE_TODO,
        id
    };
}


export function handleComplete(id) {
    return {
        type: ActionTypes.COMPLETE_TODO,
        id
    };
}

export const editTodo = (id, updates) => ({
    type: ActionTypes.EDIT_TODO,
    id,
    updates
});
