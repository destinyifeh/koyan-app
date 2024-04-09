import React, {useState} from 'react';
import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useFocusEffect} from '@react-navigation/native';
import {
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';

import ForgotForm from './components/forgot-form';
const deviceWidth = Dimensions.get('window').width;
export default function ForgotPasswordScreen() {
  const [form, setForm] = useState('');
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_WHITE);

      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  const updateFormField = value => {
    console.log(value, 'valll');
    const updateForm = {
      ...form,
      ...value,
    };
    setForm(updateForm);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>Provide Email</Text>
        <View style={styles.descContainer}>
          <Text style={styles.descText}>
            Please enter the email address associated with your account. We will
            email you a link to reset your password.
          </Text>
        </View>
        <ForgotForm updateFormField={updateFormField} email={form?.email} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOUR_WHITE,
  },

  contentContainer: {
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
    flex: 1,
    paddingBottom: 60,
    marginTop: 80,
  },
  titleText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    color: '#000000',
    textAlign: 'center',
  },
  descText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#000000',
    textAlign: 'center',
  },
  loginText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#74AAF0',
  },
  descContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 8,
  },
});
