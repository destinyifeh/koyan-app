import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

import approvedIcon from '../../assets/icons/approve-cart.png';
import {ActionButton} from '../../components/ActionButton';
import {
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../constants/Styles';
const deviceWidth = Dimensions.get('window').width;
export default function PaymentSuccessScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.titleText}>Order Successful!</Text>
          <Text style={[styles.descText, {color: '#192426'}]}>
            We've received your order and we are currently processing your order
          </Text>
        </View>
        <View style={{marginVertical: 60, alignSelf: 'center'}}>
          <Image source={approvedIcon} style={{width: 170, height: 170}} />
        </View>

        <View>
          <Text style={[styles.descText, {color: '#8896AB'}]}>
            You can followup your order status on your order history
          </Text>
          <Text style={[styles.descText, {color: '#192426', marginTop: 15}]}>
            Order No: 1204010239
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <ActionButton
            title="My Order"
            onPress={() => props.navigation.navigate('Orders')}
          />
        </View>
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
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21.6,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 15,
  },

  descText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 16.8,
    textAlign: 'center',
  },

  contentContainer: {
    flex: 1,
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  buttonContainer: {
    width: '100%',
    marginTop: 30,
  },
});
