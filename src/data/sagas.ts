import { AxiosResponse } from 'axios';
import { takeEvery, select, takeLatest } from 'redux-saga/effects';
import { setState } from 'zustand-saga';
import { SnackbarProps } from '../components/SnackBar/SnackBarComponent';
import { Category, Expense } from '../types/commonTypes';
import { CREATE_CATEGORY, CREATE_EXPENSE, DELETE_CATEGORY, GET_CATEGORIES, GET_EXPENSES, OPEN_SNACKBAR } from './actions';
import { createCategoryAPI, createExpenseAPI, deleteCategoryAPI, getCategoriesAPI, getExpensesAPI } from './backend';
import { Action, ZustandState } from './store';

function* createCategory(input: Action<Category>) {
    const categories: Category[] = yield select((state: ZustandState) => state.categories);
    try {
        const category = input.payload;
        yield createCategoryAPI(category);
        yield setState({ categories: [...categories, category] });
        yield setState( {  snackbarState: {open: true, type: 'success', message: `Category created : ${category.name}`} } );
    } catch (e) {
        console.error("Error while creating category ", e);
        yield setState( {  snackbarState: {open: true, type: 'error', message: `Failed to create category`} } );
    }

}

function* getCategories() {
    try {
        const response: AxiosResponse<Category[]> = yield getCategoriesAPI();
        yield setState({ categories: response });
    } catch (e) {
        console.error("Error while fetching categories ", e);
        yield setState( {  snackbarState: {open: true, type: 'error', message: `Failed to fetch categories`} } );
    }
}

function* createExpense(input: Action<Expense>) {
    const expenses: Expense[] = yield select((state: ZustandState) => state.expenses);
    try {
        yield createExpenseAPI(input.payload);
        yield setState({ expenses: [...expenses, input.payload] });
        yield setState( {  snackbarState: {open: true, type: 'success', message: `Expense added : ${input.payload.name}`} } );
    } catch (e) {
        console.error("Error while creating expense ", e);
        yield setState( {  snackbarState: {open: true, type: 'error', message: `Failed to create expense`} } );
    }
}

function* deleteCategory(input: Action<Category>) {
    const categories: Category[] = yield select((state: ZustandState) => state.categories);
    try {
        const categoryInput = input.payload;
        yield deleteCategoryAPI(categoryInput);
        yield setState({ categories: categories.filter(category => category.name !== categoryInput.name) });
        yield setState( {  snackbarState: {open: true, type: 'success', message: `Category deleted : ${categoryInput.name}`} } );
    } catch (e) {
        console.error("Error while deleting category", e);
        yield setState( {  snackbarState: {open: true, type: 'error', message: `Failed to delete category`} } );
    }
}

function* openSnackbar(input: Action<SnackbarProps>) {
    const snackState: SnackbarProps = yield select((state: ZustandState) => state.snackbarState);
    yield setState( {  snackbarState: {...snackState, ...input.payload} } )

}

function* getExpenses() {
    try {
        const response: AxiosResponse<Expense[]> = yield getExpensesAPI();
        yield setState({ expenses: response });
    } catch (e) {
        console.error("Error while fetching expenses ", e);
        yield setState( {  snackbarState: {open: true, type: 'error', message: `Failed to fetch expenses`} } );
    }
}

export function* saga() {
    yield takeEvery(CREATE_CATEGORY, createCategory);
    yield takeEvery(GET_CATEGORIES, getCategories);
    yield takeEvery(CREATE_EXPENSE, createExpense);
    yield takeEvery(DELETE_CATEGORY, deleteCategory);
    yield takeLatest(OPEN_SNACKBAR, openSnackbar);
    yield takeEvery(GET_EXPENSES, getExpenses);
}
