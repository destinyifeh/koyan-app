import {
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import {Input} from '../../../components/Input';

import React from 'react';
import {Dimensions, Image, StyleSheet, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import locationIcon from '../../../assets/icons/location-icon-bg.png';
import {
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';

import {useFocusEffect} from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {AllEateries} from '../components/all-eateries';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default function EateriesScreen(props) {
  useFocusEffect(
    React.useCallback(() => {
      Platform.OS === 'android' && StatusBar.setBackgroundColor(COLOUR_WHITE);
      StatusBar.setBarStyle('dark-content');
    }, []),
  );
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.headerInnerContainer}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Feather name="arrow-left" size={18} color="#000000" />
            </TouchableOpacity>
            <Text style={styles.titleText}>Eateries</Text>
          </View>

          <Image source={locationIcon} />
        </View>
        <View>
          <Input
            placeholder="Search for eateries"
            inputStyle={{color: '#192426'}}
            placeholderTextColor="grey"
            leftIcon={<EvilIcons size={24} name="search" color="#8896AB" />}
            onChangeText={location => {
              console.log(location, 'locate');
            }}
            mainContainerStyle={{marginTop: 0}}
            inputContainerStyle={{
              borderColor: '#E8E9E9',
              backgroundColor: '#FAFCFF',
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Text style={[styles.titleText, {fontSize: 16, lineHeight: 19.2}]}>
            {' '}
            All Eateries
          </Text>

          <AllEateries />
          <AllEateries />
          <AllEateries />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  contentContainer: {
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
    flex: 1,
    paddingBottom: 60,
    paddingTop: 50,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  titleText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21.6,

    color: '#000000',
  },
  contentTitleText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19.2,
    marginBottom: 22,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  descText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'center',
    maxWidth: '70%',
    alignSelf: 'center',
    marginTop: 7,
    color: 'grey',
  },
  aroundYouText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21.6,

    color: '#000000',
  },
  exploreItem: {
    marginTop: 10,
    left: 30,
  },

  categoriesContainer: {
    marginTop: 19,
  },
  scrollableItems: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
});
