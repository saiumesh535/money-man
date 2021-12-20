import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router';
import { useState } from 'react';
import { CATEGORIES, SOURCES } from '../../helpers/constants';
import { SelectComponent } from '../../components/Select/SelectComponent';
import { Source } from '../../types/commonTypes';
import { DatePicker } from '../../components/Date/DatePicker';
import './Record.scss';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

interface FormData {
    name: string;
    amount: number;
    category: string;
    date: Date;
    source: Source;
}

const initialFormData: FormData = {
    name: '',
    amount: 0,
    category: '',
    date: new Date(),
    source: 'Account'
}

const RecordExpense: React.FC = () => {
    const { name } = useParams<{ name: string; }>();
    const [formData, updateFormData] = useState<FormData>(initialFormData);
    function handleDateChange(prop: string, e: any) {
        updateFormData({
            ...formData,
            [prop]: e.target.value
        })
    }
    function saveExpense () {
        console.log("expense saved");
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <div className="page-content">
                    <TextField fullWidth id="outlined-basic" label="Name" onChange={(e) => handleDateChange('name', e)} variant="outlined" value={formData?.name}/>
                    <TextField fullWidth id="outlined-basic" label="Amount" onChange={(e) => handleDateChange('amount', e)} variant="outlined" value={formData?.amount} />
                    <SelectComponent list={CATEGORIES} label="Category" />
                    <DatePicker label="Spent"/>
                    <SelectComponent list={SOURCES} label="Source"/>
                    <ButtonComponent label='Save Expense' handler={saveExpense} />
                </div>
            </IonContent>
        </IonPage>
    );
}

export default RecordExpense;