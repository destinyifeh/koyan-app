import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';
import splashLoader from '../assets/media/splashScreenLoader.gif';
import {COLOUR_DARK_GREEN, COLOUR_GHOST_WHITE} from '../constants/Styles';
import {useFocusEffect} from '@react-navigation/native';

export default function SplashScreen(props) {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_GHOST_WHITE);

      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  React.useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Landing');
    }, 3000);
  }, []);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.loaderContainer}>
        <Image source={splashLoader} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOUR_GHOST_WHITE,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
