import { Card, CardContent, Typography } from '@mui/material';
import { Expense } from '../../types/commonTypes';
import './ExpenseCardComponent.scss';

interface Props {
    expense: Expense;
}

function ExpenseCardComponent(props: Props): JSX.Element {
    function getDate(dateString: Date) {
        if (dateString) {
            const date = new Date(dateString);
            console.log(date);
            return `${date.getDate()}/${date.getMonth() + 1}`
        }
        return '';
    }
    return (
        <Card className='card'>
            <CardContent>
                <div className='header'>
                    <Typography sx={{ fontSize: 12 }}  color="text.secondary">
                        {props.expense.category}
                    </Typography>
                </div>
                <div className='content'>
                    <Typography variant="h5" component="div">
                        {props.expense.name}
                    </Typography>
                    <Typography variant='h6'>
                        {props.expense.amount}
                    </Typography>
                </div>
                <div className='footer'>
                    <Typography variant="body2" color="text.secondary">
                        {getDate(props.expense.date)}
                    </Typography>
                    <Typography variant="body2"  color="text.secondary">
                        {props.expense.source}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}

export default ExpenseCardComponent;