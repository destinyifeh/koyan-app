import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {
  COLOUR_DISABLED,
  COLOUR_LIGHT_BLUE,
  FONT_FAMILY_BODY,
} from '../constants/Styles';
import {useNavigation} from '@react-navigation/native';

export const ActionButton = ({
  disabled,
  onPress,
  title,
  color,
  backgroundcolor,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPressIn={onPress}
        disabled={disabled}
        style={[
          styles.button,
          {
            backgroundColor: backgroundcolor
              ? backgroundcolor
              : disabled
              ? COLOUR_DISABLED
              : COLOUR_LIGHT_BLUE,
          },
        ]}
        onPress={() => navigation.navigate('Signup')}>
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
