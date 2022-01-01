export const CATEGORIES : string [] = [
    "Bills",
    "Investments",
    "Online Shopping",
    "Chit",
    "Lent"
]

export const SOURCES : string[] = [
    "Account",
    "Credit Card"
]

export const pageMap = new Map<string, string>([["/page/RecordExpense", "Add Expense"], ["/page/Categories", "Categories"], ["/page/Expenses", "View Expenses"]]);