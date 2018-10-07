import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { getTodosSaga, addTodoSaga, deleteTodoSaga, completeTodoSaga } from './todoSaga';

export function* watchTodos() {
    yield takeEvery(actionTypes.GET_TODOS_INITIALIZE, getTodosSaga);
    yield takeEvery(actionTypes.ADD_TODO, addTodoSaga);
    yield takeEvery(actionTypes.REMOVE_TODO, deleteTodoSaga);
    yield takeEvery(actionTypes.COMPLETE_TODO, completeTodoSaga);
}