import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';
import {VerifyForm} from './components/VerifyForm';
import {VerifyModal} from './components/VerifyModal';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default function VerifyEmailScreen(props) {
  const _ref = useRef();
  const [seconds, setSeconds] = useState(0);
  const [isSent, setIsSent] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      Platform.OS === 'android' && StatusBar.setBackgroundColor(COLOUR_WHITE);

      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  async function onSumbitToken(code) {
    console.log(code, 'codeee');
    try {
      _ref.current?.open();
      setSeconds(54);
      if (Platform.OS === 'ios') {
        _ref.current?.close();
        props.navigation.replace('VerifyEmail');
        props.navigation.replace('VerifiedUser');
      }
      setTimeout(() => {
        _ref.current?.close();
        props.navigation.replace('VerifyEmail');
        props.navigation.replace('VerifiedUser');
      }, 5000);
    } catch (err) {
      _ref.current?.close();
      console.log(err);
    }
  }
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.contentContainer}>
        <TouchableOpacity
          style={styles.goBackContainer}
          onPress={() => props.navigation.goBack()}>
          <Feather name="arrow-left" size={20} color="#000000" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>Verify your Account</Text>
          <Text style={styles.descText}>
            Please enter the 4 digit code sent to your registered number
          </Text>
          <Text style={styles.numberText}>+2348123049582</Text>
        </View>

        <VerifyForm onSubmit={onSumbitToken} />
        <View style={[styles.infoContainer, {marginTop: 25}]}>
          <Text style={styles.codeText}> Didn't receive code yet?</Text>
          <TouchableOpacity disabled={seconds > 0}>
            <Text style={[styles.codeText, {color: '#74AAF0'}]}>
              {seconds > 0
                ? 'Resend OTP in' + ' ' + seconds + 's'
                : 'Resend OTP'}
            </Text>
          </TouchableOpacity>
        </View>
        <VerifyModal
          containerStyle={styles.containerStyle}
          refRBSheet={_ref}
          height={deviceHeight * 0.83}
        />
      </SafeAreaView>
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
    marginTop: 60,
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
    lineHeight: 16.8,
    color: '#757C7D',
    textAlign: 'center',
  },
  numberText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19.2,
    color: '#000000',
    textAlign: 'center',
  },
  codeText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19.2,
    color: '#000000',
    textAlign: 'center',
  },
  backText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#000000',
  },
  goBackContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  infoContainer: {
    marginTop: 20,
    marginBottom: 10,
    width: 283,
    alignSelf: 'center',
    gap: 10,
  },
  containerStyle: {
    backgroundColor: COLOUR_WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
