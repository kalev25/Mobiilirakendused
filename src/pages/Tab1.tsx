import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonDatetime, IonSelectOption, IonSelect, IonButton, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';



const Tab1: React.FC = () => {
	const [sugu, setSugu] = useState<string>();
	const [number1, setKaal] = useState<number>();
	const [number2, setPikkus] = useState<number>();
	const [number3, setVanus] = useState<number>();
	const [selectedDate, setSelectedDate] = useState('2012-12-15T13:47:20.789')

  return (
<IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><p>Sisesta keha andmed</p></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          
          <IonItem>
            <IonLabel>Kaal (kg)</IonLabel>
            <IonInput type="number" value={number1}></IonInput>
          </IonItem>

		  <IonItem>
            <IonLabel>Pikkus (cm)</IonLabel>
            <IonInput type="number" value={number2}></IonInput>
          </IonItem>

		  <IonItem>
            <IonLabel>Vanus (aastat)</IonLabel>
            <IonInput type="number" value={number3}></IonInput>
          </IonItem>

		  <IonItem>
          <IonLabel position="floating">Sugu</IonLabel>
		  <IonSelect value={sugu} okText="Okay" cancelText="Dismiss" onIonChange={e => setSugu(e.detail.value)}>
            <IonSelectOption value="Mees">Mees</IonSelectOption>
            <IonSelectOption value="Naine">Naine</IonSelectOption> 
          </IonSelect>
        </IonItem>


		  <IonItem>
            <IonLabel position="floating"></IonLabel>
            <IonDatetime value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}>
			</IonDatetime>
          </IonItem>



        </IonList>
		<IonButton expand="block">Sisesta andmed</IonButton>
	
      </IonContent>
	  
    </IonPage>
  );
};

export default Tab1;
