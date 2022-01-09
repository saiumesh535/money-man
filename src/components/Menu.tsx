import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useHistory, useLocation } from 'react-router-dom';
import { bookmarkOutline, walletSharp, bookSharp, cashSharp} from 'ionicons/icons';
import './menu.scss';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Categories',
    url: '/page/Categories',
    iosIcon: bookSharp,
    mdIcon: bookSharp
  },
  {
    title: 'Record Expense',
    url: '/page/RecordExpense',
    iosIcon: cashSharp,
    mdIcon: cashSharp
  },
  {
    title: 'View Expense',
    url: '/page/Expenses',
    iosIcon: walletSharp,
    mdIcon: walletSharp
  }
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList className='sidebar-list' id="inbox-list">
          <IonListHeader>Hi Madhuri</IonListHeader>
          <IonNote>Good Evening</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={location.pathname === appPage.url ? 'selected' : ''}
                  onClick={() => history.push(appPage.url)}
                  routerDirection="none"
                  lines="none"
                  detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
