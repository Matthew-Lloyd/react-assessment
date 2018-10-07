import API from "../../API/API"
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

export function addToDo(task) {
    
    return dispatch => {
        return fetch("API", {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({task})
        })
        .then(res => res.json())
        .then(data => dispatch(handleAdd(data)))
        .catch(err => console.log("something went wrong", err))
    }
}

export function removeToDo(id) {
    return dispatch => {
        return fetch(`API/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => dispatch(handleRemove(data.id)))
        .catch(err => console.log("something went wrong", err))
    }
}

export default {

    // GET_TODOS_INITIALIZE,
    // FETCH_TODOS_SUCCEEDED,
    // FETCH_TODOS_FAILED,
}