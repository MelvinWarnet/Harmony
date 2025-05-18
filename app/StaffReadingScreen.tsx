import Chronometer from '@/components/Chronometer';
import Label from '@/components/Label';
import Button from '@/components/Button';
import { View, StyleSheet} from 'react-native';
import { router } from 'expo-router';
import Staff from "@/components/Staff";
import { getRandomNote } from '@/utils/functionOnNotes';
import { useState } from 'react';
import Piano from '@/components/Piano';

export default function StaffReadingScreen() {
  const [randomNote, setRandomNote] = useState(getRandomNote());
  const [score, setScore] = useState(0);


  const handleButtonPress = (noteId: string) => {
    if (randomNote.id === noteId) {
      setRandomNote(getRandomNote());
      setScore(score + 1);
    }
    else {
      alert("Mauvaise réponse");
    }

  };

  return (
    <View style={styles.page}>
      <Label text="Entraînement" type="title" />
      <Chronometer />

      <Label text="Score" type="title" />
      <Label text={score.toString()} type="title" />

      <View style={styles.content}>
        
        <View style={{ width: 300, height: 200 , marginBottom: 20}}>
            <Staff clef='SOL' note={randomNote} />
        </View>

      </View>
 
      <View>
        <Piano onKeyPress={handleButtonPress} />
      </View>

      <Button text="Arreter l'entrainement" onPress={() => {router.replace("/HomeScreen")}} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
