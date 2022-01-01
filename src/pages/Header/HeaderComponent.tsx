import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import { useLocation } from 'react-router';
import { pageMap } from '../../helpers/constants';

function HeaderComponent(): JSX.Element {
    const location = useLocation();
    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>{pageMap.get(location.pathname)}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export default HeaderComponent;
