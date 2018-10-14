import { call, put } from 'redux-saga/effects';
import * as ActionTypes from "../actions/actionTypes";
import * as ErrorTypes from "../actions/errorTypes";
import API from '../../API/API';

export function* getTodosSaga() {
    try {
        const response = yield call(API.getTodos);
        const todos = yield response.json();
        yield put({ type: ActionTypes.GET_TODOS_SUCCESS, todos: todos })
    } catch (error) {
        yield put({ type: ErrorTypes.GET_TODOS_ERROR, error: error.message });
    }
};

export function* addTodoSaga(action) {
    try {
        yield API.postTodo(action.todo);
        yield put({ type: ActionTypes.GET_TODOS_INITIALIZE });
    } catch (error) {
        yield put({ type: ErrorTypes.ADD_TODO_ERROR, error: error.message });
    }
};

export function* deleteTodoSaga(action) {
    try {
        yield API.deleteTodo(action.id);
        yield put({ type: ActionTypes.GET_TODOS_INITIALIZE });
    } catch (error) {
        yield put({ type: ErrorTypes.REMOVE_TODO_ERROR, error: error.message });
    }
};

export function* completeTodoSaga(action) {
    try {
        yield API.putTodo(action.id);
        yield put({ type: ActionTypes.GET_TODOS_INITIALIZE });
    } catch (error) {
        yield put({ type: ErrorTypes.COMPLETE_TODO_ERROR, error: error.message });
    }
};

export function* editTodoSaga(action) {
    try {
        yield API.patchTodo(action.id, action.updates);
        yield put({ type: ActionTypes.GET_TODOS_INITIALIZE });
    } catch (error) {
        yield put({ type: ErrorTypes.EDIT_TODO_ERROR, error: error.message });
    }
}