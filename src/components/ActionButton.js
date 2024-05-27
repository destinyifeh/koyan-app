import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  COLOUR_DISABLED,
  COLOUR_LIGHT_BLUE,
  FONT_FAMILY_BODY,
} from '../constants/Styles';

export const ActionButton = ({
  disabled,
  onPress,
  title,
  color,
  backgroundcolor,
  buttonStyle,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.button,

          {
            ...buttonStyle,
            backgroundColor: backgroundcolor
              ? backgroundcolor
              : disabled
              ? COLOUR_DISABLED
              : COLOUR_LIGHT_BLUE,
          },
        ]}>
        <Text style={[styles.buttontext, {color: color ? color : 'white'}]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    backgroundColor: COLOUR_LIGHT_BLUE,

    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 10,
  },
  buttontext: {
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: FONT_FAMILY_BODY,
    color: '#192426',
    lineHeight: 18,
    textAlign: 'center',
  },
  buttonContainer: {
    alignSelf: 'center',
    marginVertical: 8,
    width: '100%',
  },
});
