// Chronometer.tsx
import { PRIMARY_COLOR, SECONDARY_COLOR } from '@/constants/COLORS';
import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const formatTime = (seconds: number) => {
  const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
};

const Chronometer = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const widthAnim = useRef(new Animated.Value(250)).current;

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isRunning) {
      timer = setInterval(() => setSeconds(prev => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const toggleRunning = () => setIsRunning(prev => !prev);

  const toggleCollapse = () => setIsCollapsed(prev => !prev);

  return (
  <Animated.View style={styles.container}>
    <Icon name="time-outline" style={styles.clockIcon}/>
    {!isCollapsed && (
        <Text style={styles.timeText}>{formatTime(seconds)}</Text>
    )}
    <TouchableOpacity style={styles.playButton} onPress={toggleRunning}>
      <Icon name={isRunning ? 'pause' : 'play'} style={styles.playPauseIcon}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={toggleCollapse}>
      <Icon
        name={isCollapsed ? 'chevron-back' : 'chevron-forward'}
        style={styles.chevronIcon}
      />
    </TouchableOpacity>
  </Animated.View>
);
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    paddingHorizontal: 16,
    backgroundColor: PRIMARY_COLOR,
    borderColor: SECONDARY_COLOR,
    borderWidth: 1,
    borderRadius: 999,
  },
  clockIcon: {
    color: 'white',
    fontSize: 26,
  },
  timeText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  playButton: {
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 15,
    padding: 2,
    marginLeft: 8,
  },
  playPauseIcon: {
    color: 'black',
    fontSize: 18,
  },
  chevronIcon: {
    color: 'white',
    fontSize: 26,
  }
});

export default Chronometer;
