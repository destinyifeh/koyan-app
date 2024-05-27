import React, {useState} from 'react';
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
import IonIcons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {useFocusEffect} from '@react-navigation/native';
import flag from '../../../assets/media/nigeriaColor.png';
import {ActionButton} from '../../../components/ActionButton';
import {Input} from '../../../components/Input';
import {
  COLOUR_LIGHT_BLUE,
  FONT_FAMILY_BODY,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';
const deviceWidth = Dimensions.get('window').width;
export default function UpdateAccountScreen(props) {
  const [form, setForm] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_LIGHT_BLUE);

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
    <View style={styles.mainContaioner}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 30}}>
        <View style={styles.headerContainer}>
          <View style={styles.headerInnerTitleContainer}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <IonIcons name="arrow-back" size={20} color="white" />
            </TouchableOpacity>
            <Text style={[styles.headerContaineText]}>Edit Profile</Text>
          </View>
          <View>
            <View style={styles.imageContainer}>
              <Feather name="user" size={25} color={COLOUR_LIGHT_BLUE} />
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Feather name="edit" size={15} color="white" />
            </TouchableOpacity>
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
          <View style={styles.formInputContainer}>
            <Input
              title="First Name"
              inputContainerStyle={{width: '100%'}}
              inputStyle={{width: '100%'}}
              placeholder="Destiny"
              onChangeText={firstName => {
                updateFormField({firstName});
              }}
            />
            <Input
              title="Last Name"
              inputContainerStyle={{width: '100%'}}
              inputStyle={{width: '100%'}}
              placeholder="Musk"
              onChangeText={lastName => {
                updateFormField({lastName});
              }}
            />

            <Input
              title="Phone Number"
              placeholder="09022334455"
              leftIcon={<Image source={flag} resizeMode="contain" />}
              inputType="phone"
              onChangeText={phone => {
                updateFormField({phone});
              }}
            />
            <Input
              title="Email Address"
              placeholder="example@xyz.com"
              leftIcon={<SimpleLineIcons size={14} name="envelope" />}
              inputType="email"
              textContentType="emailAddress"
              onChangeText={email => {
                updateFormField({email});
              }}
            />
            <Input
              title="Location"
              inputContainerStyle={{width: '100%'}}
              inputStyle={{width: '100%'}}
              placeholder="Ikeja, Lagos"
              onChangeText={location => {
                updateFormField({location});
              }}
            />

            <View style={styles.buttonView}>
              <ActionButton
                onPress={() => navigation.navigate('VerifyEmail')}
                title="Save"
                disabled={false}
              />
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
  formInputContainer: {
    marginTop: 20,
  },
  buttonView: {
    marginTop: 42,
  },
  guestText: {
    color: '#757C7D',
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
  },
  headerInnerTitleContainer: {
    top: 50,
    left: 15,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
