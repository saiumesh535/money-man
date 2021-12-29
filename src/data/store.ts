import create from 'zustand';
import sagaMiddleware from 'zustand-saga';
import { Category, Expense } from '../types/commonTypes';
import { CREATE_CATEGORY, CREATE_EXPENSE, GET_CATEGORIES } from './actions';
import { saga } from './sagas';

export interface ZustandState {
    categories: Category[];
    createCategory: (category: Category) => void;
    loadCategories: (list: Category[]) => void;
    expenses: Expense[],
    createExpense: (expense: Expense) => void;
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
})));
