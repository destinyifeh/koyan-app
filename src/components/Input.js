import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  textContentType,
} from 'react-native';
import {
  COLOUR_TITLE,
  COLOUR__INPUT_TITLE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
} from '../constants/Styles';

export const Input = ({
  value,
  placeholder,
  inputStyle,
  leftIcon,
  rightIcon,
  title,
  inputType,
  secureTextEntry,
  inputContainerStyle,
  onPressRightIcon,
  onChangeText,
}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.inputContainer, {...inputContainerStyle}]}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <TextInput
          style={[
            styles.textInput,
            {
              paddingLeft: leftIcon ? 10 : undefined,
              paddingRight: rightIcon ? 10 : undefined,
              ...inputStyle,
            },
          ]}
          placeholder={placeholder}
          textContentType={textContentType}
          keyboardType={
            inputType === 'email'
              ? 'email-address'
              : inputType === 'phone'
              ? 'phone-pad'
              : 'default'
          }
          secureTextEntry={secureTextEntry}
          defaultValue={value}
          onChangeText={onChangeText}
        />
        {rightIcon && (
          <TouchableOpacity
            style={styles.rightIcon}
            onPressIn={onPressRightIcon}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 25,
  },
  inputContainer: {
    borderWidth: 1,
    width: '100%',
    height: 50,
    borderRadius: 50,
    borderColor: '#D1D3D4',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textInput: {
    color: '#192426',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.8,
    width: '90%',
  },
  leftIcon: {},
  rightIcon: {},
  title: {
    color: COLOUR__INPUT_TITLE,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16.8,
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    marginBottom: 5,
  },
});
