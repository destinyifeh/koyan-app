import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
  COLOUR_BLACK,
  COLOUR_DARK_GREEN,
  COLOUR_GREEN,
} from '../../../../constants/Styles';
import {useNavigation} from '@react-navigation/native';
export const VerifyForgotForm = ({onSubmit}) => {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();

  const otpRef = useRef(null);
  const [verifyEmail, setVerifyEmail] = React.useState('');

  useEffect(() => {
    setTimeout(() => otpRef.current?.focusField(0), 250);
  }, []);
  return (
    <View>
      <OTPInputView
        pinCount={4}
        style={{
          width: '65%',
          height: 90,
          alignSelf: 'center',
        }}
        codeInputFieldStyle={[
          styles.otpInput,
          //errorMessage.otp && styles.isErrorInput,
        ]}
        codeInputHighlightStyle={[
          styles.focusedInput,
          // errorMessage.otp && styles.isErrorInput,
          {color: COLOUR_BLACK},
        ]}
        onCodeFilled={otp => {
          onSubmit(otp);
        }}
        autoFocusOnLoad={false}
        ref={otpRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  otpInput: {
    borderColor: '#757C7D',
    width: 50,
    height: 50,
    borderRadius: 10,
    color: COLOUR_BLACK,
    fontWeight: 'bold',
  },
  focusedInput: {
    borderColor: COLOUR_BLACK,
    fontWeight: 'bold',
    borderWidth: 2,
  },
});
