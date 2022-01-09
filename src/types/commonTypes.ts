export type Source = 'Account'| 'Credit';

export interface Category {
    name : string;
}

export interface Expense {
    _id?: string;
    name: string;
    amount: number;
    category: string;
    date: Date;
    source: Source;
}
