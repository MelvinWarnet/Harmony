import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type ButtonProps = {
  text?: string;
  iconName?: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  onPress?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, iconName, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.content}>
        {iconName && (
          <MaterialCommunityIcons
            name={iconName}
            size={20}
            color="#fff"
            style={text ? styles.iconWithText : styles.iconOnly}
          />
        )}
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWithText: {
    marginRight: 8,
  },
  iconOnly: {},
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Button;
