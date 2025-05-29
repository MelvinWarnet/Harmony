import Chronometer from '@/components/Chronometer';
import Button from '@/components/Button';
import { View, StyleSheet, Text } from 'react-native';
import { router } from 'expo-router';
import Staff from "@/components/Staff";
import { getRandomClef, getRandomNoteFromRandomScale } from '@/utils/utilsFunction';
import { useState } from 'react';
import Piano from '@/components/Piano';
import BaseScreen from '@/components/BaseScreen';
import Banner from '@/components/Banner';
import { SECONDARY_COLOR } from '@/constants/COLORS';
import { CLEF_ID } from '@/models/clef';
import { CLEFS } from '@/constants/CLEFS';
import { SCALES } from '@/constants/SCALES';
import { SCALE_ID } from '@/models/scale';
import { NOTE_ID } from '@/models/note';
import { NOTES } from '@/constants/NOTES';


export default function StaffReadingScreen() {
  const [randomClef, setRandomClef] = useState(getRandomClef);
  const initial = getRandomNoteFromRandomScale();
  const [randomScale, setRandomScale] = useState(initial.scale);
  const [randomNote, setRandomNote] = useState(initial.note);
  const [score, setScore] = useState(0);

  const handleButtonPress = (noteIds: NOTE_ID[]) => {
    console.log("Button pressed with note IDs:", noteIds);
    if (noteIds.find(id => id === randomNote.id)) {
      const newValues = getRandomNoteFromRandomScale();
      setRandomClef(getRandomClef());
      setRandomScale(newValues.scale);
      setRandomNote(newValues.note);
      setScore(score + 1);
    }
    else {
      alert("Mauvaise réponse");
    }
  };

  return (
    <BaseScreen backgroundImage={require('@/assets/images/bg_piano.jpg')}>
      <Banner title="Reading training" />
      <View style={styles.content}>

        <View style={styles.headContent}>
          <Button text="Terminer" iconName='hand-back-left' onPress={() => {router.replace("/HomeScreen")}} />
          <Chronometer />
        </View>
      

        <Text style={styles.scoreText}>{"Score : " + score.toString()}</Text>
          
        <View style={styles.boxStaff}>
            <Staff clef={randomClef} scale={randomScale} note={randomNote} />
        </View>

        <Piano onKeyPress={handleButtonPress} />
        {/*<Text>{randomScale.name}</Text>
        <Button
          text="Reload note"
          onPress={() => handleButtonPress(randomNote.id)}
        />*/}

      </View>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding : 10,
  },
  scoreText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: SECONDARY_COLOR,
    fontFamily: 'YourCustomFont-Bold',
  },
  boxStaff: {
    width: 400,
    height: 200,
  },
});
