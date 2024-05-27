import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import changePassIcon from '../../../assets/icons/changePassIcon.png';
import editInfoIcon from '../../../assets/icons/editInfoIcon.png';
import infoIcon from '../../../assets/icons/infoIcon.png';
import logoutIcon from '../../../assets/icons/logoutIcon.png';
import updateIcon from '../../../assets/icons/updateIcon.png';
import {COLOUR_LIGHT_BLUE, MAX_ALLOWED_WIDTH} from '../../../constants/Styles';
const deviceWidth = Dimensions.get('window').width;
export default function AccountScreen(props) {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_LIGHT_BLUE);

      StatusBar.setBarStyle('light-content');
    }, []),
  );

  return (
    <View style={styles.mainContaioner}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 30}}>
        <View style={styles.headerContainer}>
          <Text style={[styles.headerContaineText, {top: 50, left: 15}]}>
            User Profile
          </Text>
          <View>
            <View style={styles.imageContainer}>
              <Feather name="user" size={25} color={COLOUR_LIGHT_BLUE} />
            </View>
            {/* <TouchableOpacity style={styles.editButton}>
              <Feather name="edit" size={15} color="white" />
            </TouchableOpacity> */}
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Text
            style={[
              styles.headerContaineText,
              {color: 'black', textAlign: 'center'},
            ]}>
            Elon Musk
          </Text>
          <View style={styles.navigatorItemsContainer}>
            <View style={styles.navigatorItems}>
              <Image source={editInfoIcon} resizeMode="contain" />
              <TouchableOpacity
                onPress={() => props.navigation.navigate('UpdateProfile')}>
                <Text style={[styles.navigatorItemsText]}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.navigatorItems}>
              <Image source={changePassIcon} resizeMode="contain" />
              <TouchableOpacity
                onPress={() => props.navigation.navigate('ChangePassword')}>
                <Text style={styles.navigatorItemsText}>Chnage Password</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.navigatorItems}>
              <Image source={infoIcon} resizeMode="contain" />
              <TouchableOpacity>
                <Text style={styles.navigatorItemsText}>Information</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.navigatorItems}>
              <Image source={updateIcon} resizeMode="contain" />
              <TouchableOpacity>
                <Text style={styles.navigatorItemsText}>Update</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.navigatorItems}>
              <Image source={logoutIcon} resizeMode="contain" />
              <TouchableOpacity>
                <Text style={styles.navigatorItemsText}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContaioner: {
    flex: 1,
  },
  headerContaineText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 15.47,
    color: 'white',
  },
  headerContainer: {
    backgroundColor: COLOUR_LIGHT_BLUE,
    height: 160,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  contentContainer: {
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
    flex: 1,
    paddingBottom: 60,
    marginTop: 30,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: COLOUR_LIGHT_BLUE,
    backgroundColor: 'white',
    borderRadius: 50,
    position: 'absolute',
    top: 53,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: COLOUR_LIGHT_BLUE,
    width: 25,
    height: 25,
    borderRadius: 20,
    position: 'absolute',
    top: 120,
    justifyContent: 'center',
    alignItems: 'center',
    left: 216,
  },
  navigatorItems: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
    borderBottomWidth: 0.5,
    paddingBottom: 5,
    borderBottomColor: 'gray',
  },
  navigatorItemsContainer: {
    marginTop: 30,
  },
  navigatorItemsText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 15.47,
    color: 'rgba(0, 0, 0, 0.5)',
  },
});
