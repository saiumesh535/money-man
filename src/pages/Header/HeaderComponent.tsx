import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import { useLocation } from 'react-router';

function HeaderComponent(): JSX.Element {
    const location = useLocation();
    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>{location.pathname.split("/").pop()}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export default HeaderComponent;
