import { IonPage, IonContent } from '@ionic/react';
import { TextField } from '@mui/material';
import { useState } from 'react';
import HeaderComponent from '../Header/HeaderComponent';

function CreateCategory(): JSX.Element {
    const [categoryName, setCategoryName] = useState('');
    return (
        <IonPage>
        <HeaderComponent name= "Create Category"/>
        <IonContent>
        <TextField
            fullWidth id="outlined-basic"
            label="Category name"
            variant="outlined"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
        />
        </IonContent>
        </IonPage>
    )
}

export default CreateCategory;
