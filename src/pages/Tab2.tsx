import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonText, IonAvatar, IonThumbnail, IonButton, IonIcon, IonDatetime, IonSelect, IonSelectOption, IonToggle, IonInput, IonCheckbox, IonRange, IonNote } from '@ionic/react';
import { closeCircle, home, star, navigate, informationCircle, checkmarkCircle, shuffle } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Keha andmete ajalugu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>


        <IonItem detail href="tab3">
          <IonLabel>
            02. juuni 2022
          </IonLabel>
        </IonItem>

		<IonItem detail href="tab3">
          <IonLabel>
            07. juuni 2022
          </IonLabel>
        </IonItem>

		<IonItem detail href="tab3">
          <IonLabel>
            09. juuni 2022
          </IonLabel>
        </IonItem>

		<IonItem detail href="tab3">
          <IonLabel>
            12. juuni 2022
          </IonLabel>
        </IonItem>

		<IonItem detail href="tab3">
          <IonLabel>
            20. juuni 2022
          </IonLabel>
        </IonItem>

		<IonItem detail href="tab3">
          <IonLabel>
            30. juuni 2022
          </IonLabel>
        </IonItem>

		<IonItem detail href="tab3">
          <IonLabel>
            15. juuli 2022
          </IonLabel>
        </IonItem>

 



      
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
