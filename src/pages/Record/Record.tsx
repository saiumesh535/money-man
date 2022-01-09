import { IonContent, IonPage } from '@ionic/react';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { SOURCES } from '../../helpers/constants';
import { SelectComponent } from '../../components/Select/SelectComponent';
import { Expense } from '../../types/commonTypes';
import { DatePicker } from '../../components/Date/DatePicker';
import './Record.scss';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { useStore, ZustandState } from '../../data/store';
import { getCategoryList } from '../../data/utils';
import SnackBarComponent from '../../components/SnackBar/SnackBarComponent';
import { setTimeout } from 'timers';

const initialFormData: Expense = {
    name: '',
    amount: 0,
    category: '',
    date: new Date(),
    source: 'Account'
}

const RecordExpense: React.FC = () => {
    const [formData, updateFormData] = useState<Expense>(initialFormData);
    const getCategories = useStore((state: ZustandState) => state.loadCategories);
    const categories = useStore((state: ZustandState) => state.categories);
    const createExpense = useStore((state: ZustandState) => state.createExpense);
    const [categoryList, setCategoryList] = useState<string[]>([]);

    useEffect(() => {
        getCategories();
    }, [])

    useEffect(() => {
        //required to change object array to string array using name property
        setCategoryList(getCategoryList(categories));
    }, [categories])

    function handleChangeForm(prop: string, value: any) {
        updateFormData({
            ...formData,
            [prop]: value
        })
    }
    function saveExpense() {
        createExpense(formData);
        setTimeout(() => updateFormData(initialFormData), 1000);
    }
    return (
        <IonPage>
            <IonContent>
                <div className="add-expense page-content">
                    <TextField className='textField' fullWidth id="outlined-basic" label="Name" onChange={(e) => handleChangeForm('name', e.target.value)} variant="outlined" value={formData?.name} />
                    <TextField className='textField' fullWidth id="outlined-basic" label="Amount" onChange={(e) => handleChangeForm('amount', +e.target.value)} variant="outlined" value={formData?.amount} />
                    <SelectComponent  list={categoryList} label="Category" value={formData.category} handleChange={(value) => handleChangeForm('category', value)} />
                    <DatePicker label="Spent on" />
                    <SelectComponent list={SOURCES} label="Source" value={formData.source} handleChange={(value) => handleChangeForm('source', value)} />
                    <ButtonComponent label='Save Expense' handler={saveExpense} />
                </div>
                <SnackBarComponent />
            </IonContent>
        </IonPage>
    );
}

export default RecordExpense;