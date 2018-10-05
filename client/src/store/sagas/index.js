import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { getTodosSaga, addTodoSaga } from './todoSaga';

export function* watchTodos() {
    yield takeEvery(actionTypes.GET_TODOS_INITIALIZE, getTodosSaga);
    yield takeEvery(actionTypes.ADD_TODO, addTodoSaga);
}