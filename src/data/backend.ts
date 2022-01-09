import { Category, Expense } from '../types/commonTypes';
import { AxiosResponse } from 'axios';
import { deleteAPI, getAPI, postAPI } from './api';

const categoriesURL = `${process.env.REACT_APP_BACKEND_URL}/categories`;
const expenseURL = `${process.env.REACT_APP_BACKEND_URL}/expenses`

export async function getCategoriesAPI(): Promise<Category[]> {
    return await getAPI<Category[]>(categoriesURL)
}

export async function createCategoryAPI(category: Category): Promise<AxiosResponse> {
    return await postAPI(categoriesURL, category);
}

export async function createExpenseAPI(expense: Expense): Promise<AxiosResponse> {
    return await postAPI(expenseURL, expense);
}

export async function deleteCategoryAPI(category: Category): Promise<AxiosResponse> {
    return await deleteAPI(`${categoriesURL}/${category.name}`);
}

export async function getExpensesAPI(): Promise<Expense[]> {
    return await getAPI<Expense[]>(expenseURL)
}
