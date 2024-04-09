import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {ActionButton} from '../../../components/ActionButton';
import {
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';
import successCheck from '../../../assets/media/check.png';
const deviceWidth = Dimensions.get('window').width;

export default function PasswordChangedScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>Password Reset Successfully!</Text>

        <View style={styles.successCheckContainer}>
          <Image
            source={successCheck}
            resizeMode="contain"
            style={{height: 120, width: 120}}
          />
        </View>

        <View style={styles.descContainer}>
          <Text style={styles.descText}>
            You can now proceed to login with your new password
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <ActionButton
            title="Proceed"
            onPress={() => props.navigation.replace('Login')}
          />
        </View>
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
    marginTop: 60,
  },
  titleText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontWeight: '600',
    fontSize: 25,
    lineHeight: 30,
    color: '#000000',
    textAlign: 'center',
    marginTop: 150,
    width: 200,
    alignSelf: 'center',
  },
  descText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#757C7D',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
  },
  descContainer: {
    width: 215,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  successCheckContainer: {
    alignSelf: 'center',
    marginTop: 20,
  },
});
