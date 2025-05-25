import Chronometer from '@/components/Chronometer';
import Label from '@/components/Label';
import Button from '@/components/Button';
import { View, StyleSheet, Text } from 'react-native';
import { router } from 'expo-router';
import Staff from "@/components/Staff";
import { getRandomNote } from '@/utils/functionOnNotes';
import { useState } from 'react';
import Piano from '@/components/Piano';
import BaseScreen from '@/components/BaseScreen';
import Banner from '@/components/Banner';
import { SECONDARY_COLOR } from '@/constants/COLORS';

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
    <BaseScreen backgroundImage={require('@/assets/images/bg_piano.jpg')}>
      <Banner title="Reading training" />
      <View style={styles.content}>

        <View style={styles.headContent}>
          <Button text="Terminer" iconName='hand-back-left' onPress={() => {router.replace("/HomeScreen")}} />
          <Chronometer />
        </View>
      

        <Text style={styles.scoreText}>{"Score : " + score.toString()}</Text>
          
        <View style={styles.boxStaff}>
            <Staff clef='SOL' note={randomNote} />
        </View>

        <Piano onKeyPress={handleButtonPress} />
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
    width: 300,
    height: 200,
  },
});
