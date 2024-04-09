import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../../constants/Styles';
import {Input} from '../../../../components/Input';
import {ActionButton} from '../../../../components/ActionButton';
const deviceWidth = Dimensions.get('window').width;
export default function ForgotForm({updateFormField, email}) {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <Input
        title="Email Address"
        placeholder="example@xyz.com"
        leftIcon={<SimpleLineIcons size={14} name="envelope" />}
        inputType="email"
        textContentType="emailAddress"
        onChangeText={email => {
          updateFormField({email});
        }}
        value={email}
      />

      <View style={styles.buttonView}>
        <ActionButton
          onPress={() => navigation.navigate('VerifyForgotPasswordEmail')}
          title="Proceed"
          disabled={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  buttonView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
