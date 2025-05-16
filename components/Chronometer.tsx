import React, { useEffect, useRef, useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function Chronometer() {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef<number | null>(null);


  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const toggle = () => setIsRunning((prev) => !prev);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  const pad = (num: number) => num.toString().padStart(2, "0");

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formatTime(secondsElapsed)}</Text>
      <Button title={isRunning ? "Pause" : "Reprendre"} onPress={toggle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", padding: 20 },
  time: { fontSize: 48, fontWeight: "bold", marginBottom: 20 },
});
