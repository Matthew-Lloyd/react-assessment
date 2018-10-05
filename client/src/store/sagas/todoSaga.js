import { call, put } from 'redux-saga/effects';
import * as ActionTypes from "../actions/actionTypes";
import API from '../../API/API';

export function* getTodosSaga(action) {
    try {
        const response = yield call(API.getTodos);
        const todos = yield response.json();
        console.log(todos);
        // debugger
        yield put({
            type: ActionTypes.GET_TODOS_SUCCESS,
            todos: todos
        })
    } catch (error) {    
            yield err => console.log("something went wrong", err);
    }
};

export function* addTodoSaga(action) {
    console.log(action);
    debugger
    const response = yield API.postTodo(action.todo);
    const todo = yield response.json();
    console.log(todo);
    debugger
    // yield put({ type: actions.ADD_TODO });
    yield put({ type: ActionTypes.GET_TODOS_INITIALIZE });
};
