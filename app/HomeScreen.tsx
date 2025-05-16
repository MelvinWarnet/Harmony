import Button from "@/components/Button";
import Label from "@/components/Label";
import { router } from "expo-router";
import React from "react";
import { View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <Label text="Harmony" type="title" />

      <View style={styles.content}>
        <Button
        iconName="play-circle-outline"
        text="Commencer l'entraînement"
        onPress={() => router.push("/TrainingScreen")}
        />
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});