import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
<IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Detail vaade</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Keha andemd seisuga:</IonCardSubtitle>
            <IonCardTitle>2. juuni 2022</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keha kaal oli 100 kilo, viimase nädala jookul kaalua kaotus 1 kilo, kuu jookul 3 kilo.
      </IonCardContent>
        </IonCard>
		</IonContent>




    </IonPage>
  );
};

export default Tab3;
