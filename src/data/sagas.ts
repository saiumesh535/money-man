import { AxiosResponse } from 'axios';
import { takeEvery, select, takeLatest } from 'redux-saga/effects';
import { setState } from 'zustand-saga';
import { SnackbarProps } from '../components/SnackBar/SnackBarComponent';
import { Category, Expense } from '../types/commonTypes';
import { CREATE_CATEGORY, CREATE_EXPENSE, DELETE_CATEGORY, GET_CATEGORIES, OPEN_SNACKBAR } from './actions';
import { createCategoryAPI, createExpenseAPI, deleteCategoryAPI, getCategoriesAPI } from './backend';
import { Action, ZustandState } from './store';

function* createCategory(input: Action<Category>) {
    const categories: Category[] = yield select((state: ZustandState) => state.categories);
    try {
        yield createCategoryAPI(input.payload);
        yield setState({ categories: [...categories, input.payload] });
        yield setState( {  snackbarState: {open: true, type: 'success', message: 'category created'} } );
    } catch (e) {
        console.error("Error in saga");
    }

}

function* getCategories() {
    try {
        const response: AxiosResponse<Category[]> = yield getCategoriesAPI();
        yield setState({ categories: response });
    } catch (e) {
        console.error("Error in saga");
    }
}

function* createExpense(input: Action<Expense>) {
    const expenses: Expense[] = yield select((state: ZustandState) => state.expenses);
    try {
        yield createExpenseAPI(input.payload);
        yield setState({ expenses: [...expenses, input.payload] });
    } catch (e) {
        console.error("Error in saga");
    }
}

function* deleteCategory(input: Action<Category>) {
    const categories: Category[] = yield select((state: ZustandState) => state.categories);
    try {
        yield deleteCategoryAPI(input.payload);
        yield setState({ categories: categories.filter(category => category.name !== input.payload.name) });
    } catch (e) {
        console.error("Error in saga", e);
    }
}

function* openSnackbar(input: Action<SnackbarProps>) {
    const snackState: SnackbarProps = yield select((state: ZustandState) => state.snackbarState);
    yield setState( {  snackbarState: {...snackState, ...input.payload} } )

}

export function* saga() {
    yield takeEvery(CREATE_CATEGORY, createCategory);
    yield takeEvery(GET_CATEGORIES, getCategories);
    yield takeEvery(CREATE_EXPENSE, createExpense);
    yield takeEvery(DELETE_CATEGORY, deleteCategory);
    yield takeLatest(OPEN_SNACKBAR, openSnackbar)
}
