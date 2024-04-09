import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Input} from '../../../../components/Input';
import {
  COLOUR_GHOST_WHITE,
  COLOUR_LIGHT_BLUE,
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_BOLD,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../../constants/Styles';
import {useFocusEffect} from '@react-navigation/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import flag from '../../../../assets/media/nigeriaColor.png';
import {ActionButton} from '../../../../components/ActionButton';

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
        <TouchableOpacity>
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
