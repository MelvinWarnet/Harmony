import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BANNER_COLOR } from "@/constants/COLORS";

type BannerProps = {
  title: string;
};

export default function Banner({ title }: BannerProps) {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BANNER_COLOR,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 25,
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "YourCustomFont-Bold",
  },
});

