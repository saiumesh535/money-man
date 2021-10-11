import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router';
import { useState } from 'react';
import { CATEGORIES } from '../../helpers/constants';
import { SelectComponent } from '../../components/Select/SelectComponent';
import { Source } from '../../types/commonTypes';
import { DatePicker } from '../../components/Date/DatePicker';
import './Record.scss';
import el from 'date-fns/esm/locale/el/index.js';

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
                    <DatePicker />
                    <TextField fullWidth id="outlined-basic" label="Source" onChange={(e) => handleDateChange('source', e)} variant="outlined" value={formData?.source} />
                </div>
            </IonContent>
        </IonPage>
    );
}

export default RecordExpense;