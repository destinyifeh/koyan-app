import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import loginHeaderBackground from '../../../assets/media/loginUpperBackgroun.png';
import {
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';

import LoginForm from './components/loginForm';
const deviceWidth = Dimensions.get('window').width;
export default function LoginScreen(props) {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [form, setForm] = useState('');
  useFocusEffect(
    React.useCallback(() => {
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setBarStyle('light-content');
        StatusBar.setTranslucent(true);
      }
      StatusBar.setBarStyle('light-content');
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
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}>
      <ImageBackground style={{height: 304}} source={loginHeaderBackground}>
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>Login to your account</Text>
          <View style={styles.descContainer}>
            <Text style={styles.descText}>Don't have an account yet? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text style={styles.loginText}>Create account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.contentContainer}>
        <LoginForm updateFormField={updateFormField} />
      </View>
    </ScrollView>
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
    marginTop: 60,
  },
  titleText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  descText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#E3EEFC',
  },
  loginText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#E3EEFC',
  },

  descContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 8,
  },
  headerContainer: {
    marginTop: 190,
    marginLeft: 30,
  },
});
