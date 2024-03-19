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

import flag from '../../../../assets/media/nigeriaColor.png';
import {ActionButton} from '../../../../components/ActionButton';

export default function SignupForm({updateFormField}) {
  const [visiblePassword, setVisiblePassword] = useState(false);

  function onTogglePassword() {
    setVisiblePassword(!visiblePassword);
  }

  return (
    <View style={styles.formInputContainer}>
      <View style={styles.usernameContainer}>
        <Input
          title="First Name"
          inputContainerStyle={{width: '100%'}}
          inputStyle={{width: '100%'}}
          placeholder="Destiny"
          onChangeText={firstName => {
            updateFormField({firstName});
          }}
        />
        <Input
          title="Last Name"
          inputContainerStyle={{width: '100%'}}
          inputStyle={{width: '100%'}}
          placeholder="Musk"
        />
      </View>
      <Input
        title="Phone Number"
        placeholder="09022334455"
        leftIcon={<Image source={flag} resizeMode="contain" />}
        inputType="phone"
      />
      <Input
        title="Email Address"
        placeholder="example@xyz.com"
        leftIcon={<SimpleLineIcons size={14} name="envelope" />}
        inputType="email"
        textContentType="emailAddress"
      />
      <Input
        title="Create Password"
        secureTextEntry={!visiblePassword}
        placeholder="*************************"
        leftIcon={<SimpleLineIcons size={14} name="lock" />}
        rightIcon={<SimpleLineIcons color="#74AAF0" size={14} name="eye" />}
        onPressRightIcon={onTogglePassword}
        textContentType="password"
      />

      <View style={styles.buttonView}>
        <ActionButton
          onPress={() => console.log('press')}
          title="Get Started"
        />
        <TouchableOpacity>
          <Text style={styles.guestText}>Continue as Guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '46.8%',
    gap: 20,
  },
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
});
