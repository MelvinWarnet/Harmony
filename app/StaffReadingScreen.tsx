import Chronometer from '@/components/Chronometer';
import Button from '@/components/Button';
import { View, StyleSheet, Text } from 'react-native';
import { router } from 'expo-router';
import Staff from "@/components/Staff";
import { getRandomClef, getRandomNoteFromRandomScale} from '@/utils/utilsFunction';
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
  const initial = getRandomNoteFromRandomScale();
  const [randomScale, setRandomScale] = useState(initial.scale);
  const [randomNote, setRandomNote] = useState(initial.note);
  const [randomClef, setRandomClef] = useState(getRandomClef);
  const [randomNotePositionYIndex, setRandomNotePositionYIndex] = useState(Math.floor(Math.random() * randomClef.noteStaffYPositions[randomNote.id].length));
  const [score, setScore] = useState(0);
  const [answerColor, setAnswerColor] = useState('transparent');


  const handleButtonPress = (noteIds: NOTE_ID[]) => {
    if (noteIds.find(id => id === randomNote.id)) {
      const newValues = getRandomNoteFromRandomScale();
      const newClef = getRandomClef();
      setRandomScale(newValues.scale);
      setRandomNote(newValues.note);
      setRandomClef(newClef);
      setRandomNotePositionYIndex(Math.floor(Math.random() * newClef.noteStaffYPositions[newValues.note.id].length));

      setScore(score + 1);
      setAnswerColor("rgba(0, 255, 0, 0.5)")
    }
    else {
      setAnswerColor("rgba(255, 0, 0, 0.5)");
    }
    setTimeout(() => {
      setAnswerColor("transparent");
    }, 400);
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
            <Staff clef={randomClef} scale={randomScale} note={randomNote} notePositionYIndex={randomNotePositionYIndex} />
            <View style={[styles.answerInfo, { backgroundColor: answerColor }]}/>
        </View>

        <Piano onKeyPress={handleButtonPress} />
        {/*<Text>{randomScale.name}</Text>
        <Button
          text="Reload note"
          onPress={() => handleButtonPress([randomNote.id])}
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
  answerInfo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
  },
});
