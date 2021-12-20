import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import RecordExpense from './pages/Record/Record';
import CreateCategory from './pages/Category/CreateCategory';

const App: React.FC = () => {
  return (
    <Router>
      <IonApp>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route exact={true} path="/" render={() => {
              return <Redirect to={"/page/RecordExpense"} />
            }} />
            <Route path="/page/Categories" component={CreateCategory} />
            <Route path="/page/RecordExpense" component={RecordExpense} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonApp>
    </Router>
  );
};

export default App;
