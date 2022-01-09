import { IonPage, IonContent } from '@ionic/react';
import { List } from '@mui/material';
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStore, ZustandState } from '../../data/store';
import SnackBarComponent from '../../components/SnackBar/SnackBarComponent';
import { Expense } from '../../types/commonTypes';
import ExpenseCardComponent from '../../components/ExpenseCard/ExpenseCardComponent';
import './ViewExpense.scss';

function ViewExpense(): JSX.Element {
    const getExpenses = useStore((state: ZustandState) => state.getExpenses);
    const expenses: Expense[] = useStore((state: ZustandState) => state.expenses);

    useEffect(() => {
        getExpenses();
    }, [])

    return (
        <IonPage>
            <IonContent>
                <div className="view-expense page-content">
                    <List>
                        {expenses?.map(expense => {
                            return <ExpenseCardComponent expense={expense} key={expense._id} />
                        })}
                    </List>
                    <SnackBarComponent />
                </div>
            </IonContent>
        </IonPage>
    )
}

export default ViewExpense;
