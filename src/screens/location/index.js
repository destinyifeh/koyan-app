import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import exploreChickenRepublic from '../../assets/media/exploreChickenRepublic.png';
import exploreFood from '../../assets/media/exploreFood2.png';
import exploreHotels from '../../assets/media/exploreHotels.png';
import exploreSuperMart from '../../assets/media/exploreSupermart.png';
import exploreThePlace from '../../assets/media/exploreThePlace.png';
import locationMap from '../../assets/media/locationMap.png';
import {Input} from '../../components/Input';
import {
  COLOUR_LIGHT_BLUE,
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAIN_APP_COLOUR,
  MAX_ALLOWED_WIDTH,
} from '../../constants/Styles';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export default function LocationScreen(props) {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_WHITE);
      StatusBar.setBarStyle('dark-content');
    }, []),
  );
  const locate = true;

  return (
    <>
      {locate ? (
        <ScrollView
          style={styles.mainContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.headerContainer}>
            <View style={{top: 80}}>
              <Text style={styles.titleText}>Where are you located</Text>

              <Text style={styles.descText}>
                Your location allows us suggest supermarkets and offers that are
                close to you.
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <Input
                placeholder="Search for your location"
                inputStyle={{color: '#192426'}}
                placeholderTextColor="grey"
                leftIcon={
                  <Entypo size={24} name="location-pin" color="#8896AB" />
                }
                rightIcon={
                  <AntDesign color="#74AAF0" size={20} name="checkcircle" />
                }
                textContentType="location"
                onChangeText={location => {
                  console.log(location, 'locate');
                }}
                inputContainerStyle={{borderColor: COLOUR_LIGHT_BLUE}}
              />
            </View>
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.contentTitleText}>
              Where would you love to explore?
            </Text>

            <View style={styles.exploreContainer}>
              <TouchableOpacity>
                <Image source={exploreFood} resizeMode="contain" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.exploreItem}>
                <Image source={exploreHotels} resizeMode="contain" />
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity>
                <Image source={exploreThePlace} resizeMode="contain" />
              </TouchableOpacity>
            </View>
            <View style={styles.exploreContainer}>
              <TouchableOpacity>
                <Image source={exploreSuperMart} resizeMode="contain" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={exploreChickenRepublic} resizeMode="contain" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View style={{flex: 1}}>
          <ImageBackground
            style={{flex: 1}}
            resizeMode="stretch"
            source={locationMap}>
            <View style={styles.headerContainer}>
              <View style={{top: 80}}>
                <Text style={styles.titleText}>Where are you located</Text>

                <Text style={styles.descText}>
                  Your location allows us suggest supermarkets and offers that
                  are close to you.
                </Text>
              </View>
              <View style={styles.inputContainer}>
                <Input
                  placeholder="Search for your location"
                  inputStyle={{color: 'grey'}}
                  placeholderTextColor="grey"
                  leftIcon={
                    <Entypo size={24} name="location-pin" color="#8896AB" />
                  }
                  rightIcon={
                    <AntDesign color="#8896AB" size={20} name="checkcircle" />
                  }
                  textContentType="password"
                  onChangeText={location => {
                    console.log(location, 'locate');
                  }}
                  inputContainerStyle={{borderColor: COLOUR_LIGHT_BLUE}}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: MAIN_APP_COLOUR,
  },

  contentContainer: {
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
    flex: 1,
    paddingBottom: 60,
    marginTop: 55,
  },

  exploreContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 5,
  },
  titleText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'center',
    width: 324,
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
  exploreItem: {
    marginTop: 10,
    left: 30,
  },

  headerContainer: {
    height: 255,
    backgroundColor: COLOUR_WHITE,
    elevation: 2,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center',
  },
  inputContainer: {
    width: deviceWidth * 0.9,
    alignSelf: 'center',
    top: 50,
  },
});
