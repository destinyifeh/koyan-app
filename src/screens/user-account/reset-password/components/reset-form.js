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
export default function ResetForm({updateFormField}) {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visiblePassword2, setVisiblePassword2] = useState(false);
  const navigation = useNavigation();
  function onTogglePassword() {
    setVisiblePassword(!visiblePassword);
  }
  function onTogglePassword2() {
    setVisiblePassword2(!visiblePassword2);
  }

  return (
    <View style={styles.mainContainer}>
      <Input
        title="Create New Password"
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

      <Input
        title="Confirm New Password"
        secureTextEntry={!visiblePassword2}
        placeholder="*************************"
        leftIcon={<SimpleLineIcons size={14} name="lock" />}
        rightIcon={<SimpleLineIcons color="#74AAF0" size={14} name="eye" />}
        onPressRightIcon={onTogglePassword2}
        textContentType="password"
        onChangeText={password => {
          updateFormField({password});
        }}
      />

      <View style={styles.buttonView}>
        <ActionButton
          onPress={() => navigation.navigate('PasswordChangedSuccess')}
          title="Reset Password"
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
