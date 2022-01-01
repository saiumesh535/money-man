import create from 'zustand';
import sagaMiddleware from 'zustand-saga';
import { initialSnackbarState, SnackbarProps } from '../components/SnackBar/SnackBarComponent';
import { Category, Expense } from '../types/commonTypes';
import { CREATE_CATEGORY, CREATE_EXPENSE, DELETE_CATEGORY, GET_CATEGORIES, OPEN_SNACKBAR } from './actions';
import { saga } from './sagas';

export interface ZustandState {
    categories: Category[];
    createCategory: (category: Category) => void;
    loadCategories: (list: Category[]) => void;
    deleteCategory: (category: Category) => void;
    expenses: Expense[],
    createExpense: (expense: Expense) => void;
    snackbarState: SnackbarProps;
    setSnackbarState: (snackbarState: SnackbarProps) => void;
}

export interface Action<T> {
    type: string,
    payload: T
};

export const [useStore] = create(sagaMiddleware(saga, (set, get, store) => ({
    categories: [],
    createCategory: (category: Category) => store.putActionToSaga({ type: CREATE_CATEGORY, payload: category }),
    loadCategories: () => store.putActionToSaga({ type: GET_CATEGORIES }),
    expenses: [],
    createExpense: (expense: Expense) => store.putActionToSaga({ type: CREATE_EXPENSE, payload: expense }),
    deleteCategory: (category: Category) => store.putActionToSaga({ type: DELETE_CATEGORY, payload: category }),
    snackbarState: initialSnackbarState,
    setSnackbarState: (snackbarState: SnackbarProps) => store.putActionToSaga({ type: OPEN_SNACKBAR, payload: snackbarState}),
})));
