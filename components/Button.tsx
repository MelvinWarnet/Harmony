import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '@/constants/COLORS';

type ButtonProps = {
  text?: string;
  iconName?: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  onPress?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, iconName, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        {iconName && (
          <MaterialCommunityIcons
            name={iconName}
            size={24}
            color={SECONDARY_COLOR}
            style={text ? styles.iconWithText : styles.iconOnly}
          />
        )}
        {text && <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 999,
    borderColor: SECONDARY_COLOR,
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  content: {
    
  },
  iconWithText: {
    marginRight: 8,
  },
  iconOnly: {},
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Button;
