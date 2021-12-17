import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/react';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router';

function CreateCategory(): JSX.Element {
    const { name } = useParams<{ name: string; }>();
    const [categoryName, setCategoryName] = useState('');
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
