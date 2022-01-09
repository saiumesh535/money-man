import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import { useLocation } from 'react-router';
import { pageMap } from '../../helpers/constants';

function HeaderComponent(): JSX.Element {
    const location = useLocation();
    return (
        <IonHeader>
            <IonToolbar className='header-container'>
                <IonButtons slot="start">
                    <IonMenuButton className='menu-button'/>
                </IonButtons>
                <IonTitle className='title'>{pageMap.get(location.pathname)}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export default HeaderComponent;
