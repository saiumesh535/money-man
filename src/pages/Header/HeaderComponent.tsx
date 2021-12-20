import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';

interface Props {
    name : String;
}

function HeaderComponent(props: Props): JSX.Element {
    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>{props.name}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export default HeaderComponent;
