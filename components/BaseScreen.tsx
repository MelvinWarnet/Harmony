// components/Screen.js
import React from 'react';
import { ImageBackground, StyleSheet, View} from 'react-native';

interface BaseScreenProps {
  backgroundImage: any;
  children?: React.ReactNode;
}

const BaseScreen: React.FC<BaseScreenProps> = ({backgroundImage, children}) => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {children}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});

export default BaseScreen;
