import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
} from "@ionic/react";


const questions = [
  {
    id: "wellbeing-01",
    text: "Exact questionnaire question goes here",
  },
  {
    id: "wellbeing-02",
    text: "Next exact questionnaire question goes here",
  },
];

const Home: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Well Live Assessment</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>Assessment</h2>

        {questions.map((question) => (
          <IonRadioGroup
            key={question.id}
            value={answers[question.id]}
            onIonChange={(event) =>
              setAnswers((current) => ({
                ...current,
                [question.id]: event.detail.value,
              }))
            }
          >
            <IonItem>
              <IonLabel>{question.text}</IonLabel>
            </IonItem>
            <IonItem>
              <IonRadio value="Concern">Concern</IonRadio>
            </IonItem>
            <IonItem>
              <IonRadio value="No concern">No concern</IonRadio>
            </IonItem>
            <IonItem>
              <IonRadio value="Skipped">Skipped</IonRadio>
            </IonItem>
          </IonRadioGroup>
        ))}

        <IonButton expand="block">Continue</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;