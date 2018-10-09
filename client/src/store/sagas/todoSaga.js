import { call, put } from 'redux-saga/effects';
import * as ActionTypes from "../actions/actionTypes";
import API from '../../API/API';

export function* getTodosSaga() {
    try {
        const response = yield call(API.getTodos);
        const todos = yield response.json();
        yield put({ type: ActionTypes.GET_TODOS_SUCCESS, todos: todos })
    } catch (error) {    
            yield err => console.log("something went wrong", err);
    }
};

export function* addTodoSaga(action) {
    try {
        const response = yield API.postTodo(action.todo);
        const todo = yield response.json();
        yield put({ type: ActionTypes.GET_TODOS_INITIALIZE });
    } catch (error) {
        yield err => console.log("something went wrong", err);
    }
};

export function* deleteTodoSaga(action) {
    try {
        const response = yield API.deleteTodo(action.id);
        const todo = yield response.json();
        yield put({ type: ActionTypes.GET_TODOS_INITIALIZE });
    } catch (error) {
        yield err => console.log("something went wrong", err);
    }
};

export function* completeTodoSaga(action) {
    try {
        // debugger
        const response = yield API.putTodo(action.id);
        const todo = yield response.json();
        // console.log(todo);
        // debugger
        yield put({ type: ActionTypes.GET_TODOS_INITIALIZE });
    } catch (error) {
        yield err => console.log("something went wrong", err);
    }
};

export function* editTodoSaga(action) {
    try {
        const response = yield API.patchTodo(action.id, action.updates);
        const todos = yield response.json();
        yield put({ type: ActionTypes.GET_TODOS_INITIALIZE });
    } catch (error) {
        yield err => console.log("something went wrong", err);
    }
}
