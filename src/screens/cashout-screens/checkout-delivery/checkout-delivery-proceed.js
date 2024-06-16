import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {ActionButton} from '../../../components/ActionButton';
import {Input} from '../../../components/Input';
import {CheckoutProgressTwo} from '../../../components/checkout-progress';
import {
  COLOUR_LIGHT_BLUE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';
import {CheckoutBar} from './components/checkout-bar';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function CheckoutDeliveryProceedScreen(props) {
  const [isActive, setIsActive] = React.useState(false);
  const [form, setForm] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setTranslucent(true);
      }
    }, []),
  );

  const onToggle = () => {
    console.log(isActive, 'isactive');

    setIsActive(!isActive);
  };
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
      <SafeAreaView style={styles.contentContainer}>
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{
            paddingBottom: 50,
          }}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={{}}
              onPress={() => props.navigation.goBack()}>
              <Feather name="arrow-left" size={20} color="#000000" />
            </TouchableOpacity>
            <Text style={styles.titleText}>Checkout</Text>
          </View>
          <View style={{marginVertical: 30}}>
            <CheckoutProgressTwo />
          </View>
          <View style={{marginTop: 5}}>
            <Text style={styles.orderText}>Delivery Details</Text>
            <View style={{marginBottom: 20}}>
              <CheckoutBar />
            </View>
            <View style={styles.infoContainer}>
              <View style={{gap: 3}}>
                <Text style={styles.descText}>
                  Is this order for someone else?
                </Text>
                <Text style={styles.helpText}>
                  Add their details to help the courier
                </Text>
              </View>
              <TouchableOpacity onPress={onToggle}>
                <Entypo
                  name="switch"
                  size={35}
                  color={!isActive ? '#D3E4FB' : COLOUR_LIGHT_BLUE}
                />
              </TouchableOpacity>
            </View>
          </View>
          {isActive && (
            <Animatable.View style={{marginTop: 5}} animation="slideInLeft">
              <Input
                title="Recipient Name"
                placeholder="Recipient Name"
                onChangeText={name => {
                  updateFormField({name});
                }}
                value={form?.name}
              />

              <Input
                title="Recipient Phone Number"
                placeholder="Recipient Phone Number"
                inputType="phone"
                onChangeText={phone => {
                  updateFormField({phone});
                }}
                value={form?.phone}
              />

              <Input
                title="Recipient Address"
                placeholder="Recipient Address"
                inputType="address"
                onChangeText={address => {
                  updateFormField({address});
                }}
                value={form?.address}
              />
            </Animatable.View>
          )}
        </ScrollView>
      </SafeAreaView>
      <View style={styles.buttonContainer}>
        <ActionButton
          title="Proceed"
          // onPress={() => props.navigation.navigate('CheckoutDeliveryScreen')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  titleText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21.6,
    textAlign: 'center',
    color: '#000000',
  },

  orderText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.2,
    color: '#000000',
  },

  itemContainer: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(34, 34, 39, 0.05)',
    marginBottom: 10,
  },

  descText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.8,
    color: '#192426',
  },
  contentContainer: {
    flex: 1,
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
    marginTop: 50,
  },
  addRemoveItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  removeOrderView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  removeOrderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 13,
  },

  descContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addItemText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.2,
    color: 'white',
  },
  helpText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 15.6,
    color: '#757C7D',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    marginBottom: 40,
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
  },
});
