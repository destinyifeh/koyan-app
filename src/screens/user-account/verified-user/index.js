import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {ActionButton} from '../../../components/ActionButton';
import {
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';
const deviceWidth = Dimensions.get('window').width;

export default function VerifiedUserScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>Verified!</Text>

        <View style={styles.descContainer}>
          <Text style={styles.descText}>
            Your account has been successfully created and verified!
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
    top: 80,
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
    width: 283,
    justifyContent: 'center',
    flex: 1,
    alignSelf: 'center',
  },
});
