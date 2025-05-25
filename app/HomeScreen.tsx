import Banner from "@/components/Banner";
import BaseScreen from "@/components/BaseScreen";
import Button from "@/components/Button";
import { router } from "expo-router";
import React from "react";
import { View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <BaseScreen backgroundImage={require('@/assets/images/bg_piano.jpg')}>
      <Banner title="Harmony" />
      <View style={styles.content}>
          <Button
          iconName="music"
          text="Lecture de notes"
          onPress={() => router.push("/StaffReadingScreen")}
          />
      </View>
    </BaseScreen>
      
  );
}


const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});