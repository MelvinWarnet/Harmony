import Chronometer from '@/components/Chronometer';
import Label from '@/components/Label';
import Button from '@/components/Button';
import { View, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import Staff from "@/components/Staff";
import { getRandomNote } from '@/utils/functionOnNotes';
import { useState } from 'react';

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
    <ScrollView style={styles.page}>
      <Label text="Entraînement" type="title" />
      <Chronometer />

      <Label text="Score" type="title" />
      <Label text={score.toString()} type="title" />

      <View style={styles.content}>
        
        <View style={{ width: 300, height: 200 , marginBottom: 20}}>
            <Staff clef='SOL' note={randomNote} />
        </View>

      </View>
      <Button text="C" onPress={() => {handleButtonPress("C")}} />
      <Button text="C#" onPress={() => {handleButtonPress("C#")}} />
      <Button text="D" onPress={() => {handleButtonPress("D")}} />
      <Button text="D#" onPress={() => {handleButtonPress("D#")}} />
      <Button text="E" onPress={() => {handleButtonPress("E")}} />
      <Button text="F" onPress={() => {handleButtonPress("F")}} />
      <Button text="F#" onPress={() => {handleButtonPress("F#")}} />
      <Button text="G" onPress={() => {handleButtonPress("G")}} />
      <Button text="G#" onPress={() => {handleButtonPress("G#")}} />
      <Button text="A" onPress={() => {handleButtonPress("A")}} />
      <Button text="A#" onPress={() => {handleButtonPress("A#")}} />
      <Button text="B" onPress={() => {handleButtonPress("B")}} />

      <Button text="Arreter l'entrainement" onPress={() => {router.replace("/HomeScreen")}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 16,
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
