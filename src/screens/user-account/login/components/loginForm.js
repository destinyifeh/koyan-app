import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import flag from '../../../../assets/media/nigeriaColor.png';
import {ActionButton} from '../../../../components/ActionButton';
import {Input} from '../../../../components/Input';
import {FONT_FAMILY_BODY} from '../../../../constants/Styles';

export default function LoginForm({updateFormField}) {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const navigation = useNavigation();
  function onTogglePassword() {
    setVisiblePassword(!visiblePassword);
  }

  return (
    <View style={styles.formInputContainer}>
      <Input
        title="Phone Number"
        placeholder="09022334455"
        leftIcon={<Image source={flag} resizeMode="contain" />}
        inputType="phone"
        onChangeText={phone => {
          updateFormField({phone});
        }}
      />

      <Input
        title="Password"
        secureTextEntry={!visiblePassword}
        placeholder="*************************"
        leftIcon={<SimpleLineIcons size={14} name="lock" />}
        rightIcon={<SimpleLineIcons color="#74AAF0" size={14} name="eye" />}
        onPressRightIcon={onTogglePassword}
        textContentType="password"
        onChangeText={password => {
          updateFormField({password});
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.buttonView}>
        <ActionButton
          onPress={() => navigation.navigate('UserLocation')}
          title="Login"
          disabled={false}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('DashboardScreen')}>
          <Text style={styles.guestText}>Continue as Guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formInputContainer: {
    marginTop: 20,
  },
  buttonView: {
    marginTop: 42,
  },
  guestText: {
    color: '#757C7D',
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
  },
  forgotText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#000000',
    textAlign: 'right',
    marginTop: 5,
  },
});
