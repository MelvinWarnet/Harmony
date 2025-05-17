// Chronometer.tsx
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
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => setSeconds(prev => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const toggleRunning = () => setIsRunning(prev => !prev);

  const toggleCollapse = () => {
    Animated.timing(widthAnim, {
      toValue: isCollapsed ? 250 : 120,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsCollapsed(prev => !prev);
  };

  return (
  <Animated.View style={[styles.container, { width: widthAnim }]}>
    <View style={styles.inner}>
      <Icon name="time-outline" style={styles.clockIcon}/>
      <View style={styles.left}>
        {!isCollapsed && (
          <View style={styles.timeRow}>
            <Text style={styles.time}>{formatTime(seconds)}</Text>
          </View>
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={toggleRunning}>
        <Icon name={isRunning ? 'pause' : 'play'} size={18} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleCollapse}>
        <Icon
          name={isCollapsed ? 'chevron-forward' : 'chevron-back'}
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </View>
  </Animated.View>
);
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'black',
    borderRadius: 25,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  left: {
    flex: 1,
    alignItems: 'flex-start',
  },
  time: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 6,
    marginHorizontal: 10,
  },
  timeRow: {
  flexDirection: 'row',
  alignItems: 'center',
  },
  clockIcon: {
    color: 'white',
    fontSize: 24,
    marginRight: 5,
  },

});

export default Chronometer;
