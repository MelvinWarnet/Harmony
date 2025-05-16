import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

type LabelProps = {
  text: string;
  type?: "title" | "subtitle" | "normal";
};

const Label: React.FC<LabelProps> = ({ text, type = "normal" }) => {
  const getStyle = (): TextStyle => {
    switch (type) {
      case "title":
        return styles.title;
      case "subtitle":
        return styles.subtitle;
      case "normal":
      default:
        return styles.normal;
    }
  };

  return <Text style={getStyle()}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  normal: {
    fontSize: 14,
    color: "#555",
  },
});

export default Label;
