import React, {useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  StatusBar,
  Button,
  ScrollView,
} from 'react-native';
import {
  COLOUR_LIGHT_BLUE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_BOLD,
  FONT_FAMILY_BODY_SEMIBOLD,
  FONT_FAMILY_BODY_THIN,
  MAX_ALLOWED_WIDTH,
} from '../../constants/Styles';
import landingCart from '../../assets/media/landingCart.png';
import {useFocusEffect} from '@react-navigation/native';

const deviceWidth = Dimensions.get('window').width;
export default function LandingScreen(props) {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_LIGHT_BLUE);
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  return (
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        <View style={styles.cartContainer}>
          <Image
            source={landingCart}
            resizeMode="contain"
            style={styles.cartImage}
          />
        </View>
        <View>
          <Text style={styles.titleText}>
            All your favorite places in one app
          </Text>

          <Text style={styles.descText}>
            Discover Supermarkets and eateries at your fingertips
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate('Signup')}>
            <Text style={styles.buttontext}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: 'white',
              },
            ]}
            onPress={() => props.navigation.navigate('DashboardScreen')}>
            <Text style={[styles.buttontext, {color: 'white'}]}>
              Continue as Guest
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOUR_LIGHT_BLUE,
  },

  contentContainer: {
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
    flex: 1,
    paddingBottom: 60,
    marginTop: 80,
  },
  cartImage: {
    width: 395,
    height: 395,
  },
  cartContainer: {
    alignSelf: 'center',
  },
  titleText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: 'center',
    width: 324,
    color: 'white',
  },
  descText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    textAlign: 'center',
    maxWidth: '69%',
    alignSelf: 'center',
    marginTop: 7,
    color: 'rgba(255, 255, 255, 0.76)',
  },
  button: {
    height: 48,
    backgroundColor: 'white',
    width: 276,
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 10,
  },
  buttontext: {
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: FONT_FAMILY_BODY,
    color: '#192426',
    lineHeight: 18,
    textAlign: 'center',
  },
  buttonContainer: {
    alignSelf: 'center',
    marginVertical: 8,
  },
});
