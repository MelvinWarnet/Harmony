import React, { useEffect, useState } from 'react';
import Chronometer from '@/components/Chronometer';
import Label from '@/components/Label';
import Button from '@/components/Button';
import { View, StyleSheet } from 'react-native';
import useMusicGenerator from '@/hooks/useMusicGenerator';
import { router } from 'expo-router';

export default function TrainingScreen() {
  const { getRandomNote, getRandomScale, getRandomProgression } = useMusicGenerator();

  const [note, setNote] = useState('');
  const [scale, setScale] = useState('');
  const [progression, setProgression] = useState('');

  useEffect(() => {
    const initialScale = getRandomScale();
    setNote(getRandomNote());
    setScale(initialScale);
    setProgression(getRandomProgression(initialScale));
  }, [getRandomNote, getRandomScale, getRandomProgression]);

  const reloadNote = () => setNote(getRandomNote());
  const reloadScale = () => {
    const newScale = getRandomScale();
    setScale(newScale);
    setProgression(getRandomProgression(newScale));
  };
  const reloadProgression = () => setProgression(getRandomProgression(scale));

  return (
    <View style={styles.page}>
      <Label text="Entraînement" type="title" />
      <Chronometer />

      <View style={styles.content}>

        <View style={styles.box}>
          <Label text="Fondamentale" type="subtitle" />
          <Label text={note} type="randomValue" />
          <Button iconName="reload" onPress={reloadNote} />
        </View>

        <View style={styles.box}>
          <Label text="Gamme" type="subtitle" />
          <Label text={scale} type="randomValue" />
          <Button iconName="reload" onPress={reloadScale} />
        </View>

        <View style={styles.box}>
          <Label text="Progression" type="subtitle" />
          <Label text={progression} type="randomValue" />
          <Button iconName="reload" onPress={reloadProgression} />
        </View>

      </View>
      <Button text="Arreter l'entrainement" onPress={() => {router.replace("/HomeScreen")}} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 16,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
