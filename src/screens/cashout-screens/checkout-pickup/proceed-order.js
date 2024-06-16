import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import pickupAddress from '../../../assets/media/pickup-address.png';
import pickupLogo from '../../../assets/media/pickup-owner-logo.png';
import {ActionButton} from '../../../components/ActionButton';
import {CheckoutProgressTwo} from '../../../components/checkout-progress';
import {FONT_FAMILY_BODY, MAX_ALLOWED_WIDTH} from '../../../constants/Styles';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function CheckoutPickupProceedScreen(props) {
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
            <Text style={styles.orderText}>Pickup Address</Text>
            <View style={styles.descContainer}>
              <View style={styles.infoContainer}>
                <Image source={pickupLogo} />

                <View>
                  <Text style={styles.descText}>The Place Restaurant</Text>
                  <Text style={styles.placeText}>Palm Avenue, Ilupeju</Text>
                  <Text style={[styles.placeText, {fontSize: 12}]}>
                    4mins Away
                  </Text>
                </View>
              </View>
              <Image source={pickupAddress} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.buttonContainer}>
        <ActionButton
          title="Proceed"
          onPress={() => props.navigation.navigate('PaymentScreen')}
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
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19.2,
    color: '#222227',
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
    marginTop: 20,
  },
  addItemText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.2,
    color: 'white',
  },
  placeText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: '#757C7D',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  buttonContainer: {
    marginBottom: 40,
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
  },
});
