import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import IonIcons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {ActionButton} from '../../../components/ActionButton';
import {Input} from '../../../components/Input';
import {COLOUR_LIGHT_BLUE, MAX_ALLOWED_WIDTH} from '../../../constants/Styles';
const deviceWidth = Dimensions.get('window').width;
export default function ChnagePasswordScreen(props) {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visiblePassword2, setVisiblePassword2] = useState(false);
  const [form, setForm] = useState('');
  const navigation = useNavigation();
  function onTogglePassword() {
    setVisiblePassword(!visiblePassword);
  }
  function onTogglePassword2() {
    setVisiblePassword2(!visiblePassword2);
  }

  const updateFormField = value => {
    console.log(value, 'valll');
    const updateForm = {
      ...form,
      ...value,
    };
    setForm(updateForm);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 30}}>
        <View style={styles.headerContainer}>
          <View style={styles.headerInnerTitleContainer}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <IonIcons name="arrow-back" size={20} color="white" />
            </TouchableOpacity>
            <Text style={[styles.headerContaineText]}>Change Password</Text>
          </View>
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
          <Input
            title="Create New Password"
            secureTextEntry={!visiblePassword}
            placeholder="*************************"
            leftIcon={<SimpleLineIcons size={14} name="lock" />}
            rightIcon={<SimpleLineIcons color="#74AAF0" size={14} name="eye" />}
            onPressRightIcon={onTogglePassword}
            textContentType="password"
            onChangeText={password => {
              updateFormField({password});
            }}
          />

          <Input
            title="Confirm New Password"
            secureTextEntry={!visiblePassword2}
            placeholder="*************************"
            leftIcon={<SimpleLineIcons size={14} name="lock" />}
            rightIcon={<SimpleLineIcons color="#74AAF0" size={14} name="eye" />}
            onPressRightIcon={onTogglePassword2}
            textContentType="password"
            onChangeText={password => {
              updateFormField({password});
            }}
          />

          <View style={styles.buttonView}>
            <ActionButton
              //  onPress={() => navigation.navigate('PasswordChangedSuccess')}
              title="Done"
              disabled={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  buttonView: {
    width: '100%',
    marginTop: 20,
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
  headerInnerTitleContainer: {
    top: 50,
    left: 15,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
