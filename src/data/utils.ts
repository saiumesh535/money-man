import { Category } from '../types/commonTypes'

export const getCategoryList = (categories: Category[]): string[] => {
    const list = categories.map(category => category.name);
    return list;
}
