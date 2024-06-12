import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import resturantImg from '../../../../assets/media/resturant-item.png';
import {ProgressBar} from '../../../../components/progress-bar';
import {
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
} from '../../../../constants/Styles';
const deviceWidth = Dimensions.get('window').width;

export default function OngoingItems({orderType}) {
  const navigation = useNavigation();
  const code = '1234';
  return (
    <Animatable.View style={styles.cartItemsContainer} animation="slideInLeft">
      <View style={styles.ordersContainer}>
        <View style={styles.ordersInnerContainer}>
          <Image source={resturantImg} style={{width: 39, height: 39}} />
          <View>
            <Text style={styles.ordersFromText}>Delivery from</Text>
            <Text style={styles.resturantText}>The Place Restaurant</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.viewInnerContainer}>
          <Text style={styles.viewText}>Orde No </Text>
          <Text style={styles.viewText}> 192847</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemsPriceContainer}>
        <Text style={styles.itemText}>18th feb, 2024.</Text>

        <Text style={styles.itemText}>11:29am</Text>
      </View>

      <View style={styles.codeContainer}>
        <Text style={styles.codeDispatchText}>
          Share this code with your dispatch
        </Text>
        <View style={styles.codeInnerContainer}>
          <View style={styles.codeView}>
            <Text style={styles.codeText}>{code[0]}</Text>
          </View>

          <View style={styles.codeView}>
            <Text style={styles.codeText}>{code[1]}</Text>
          </View>
          <View style={styles.codeView}>
            <Text style={styles.codeText}>{code[2]}</Text>
          </View>
          <View style={styles.codeView}>
            <Text style={styles.codeText}>{code[3]}</Text>
          </View>
        </View>
      </View>

      <View style={styles.progressContainer}>
        {orderType === 'delivery' && (
          <>
            <ProgressBar />
            <ProgressBar />
            <ProgressBar inactive />
            <ProgressBar inactive />
            <ProgressBar inactive />
            <ProgressBar inactive />
            <ProgressBar inactive />
          </>
        )}

        {orderType === 'pickup' && (
          <>
            <ProgressBar big />
            <ProgressBar big />
            <ProgressBar big />
          </>
        )}
      </View>
      <View style={styles.deliveringContainer}>
        <Text style={[styles.trackText, {color: '#001337'}]}>
          11:30am -{' '}
          <Text style={[styles.trackText, {color: 'rgba(0, 19, 55, 0.5)'}]}>
            Preparing your order
          </Text>
        </Text>

        <TouchableOpacity
          style={styles.trackContainer}
          onPress={() =>
            navigation.navigate(
              orderType === 'delivery'
                ? 'OngoingDeliveryScreen'
                : orderType === 'pickup'
                ? 'OngoingPickupScreen'
                : orderType === 'eatin'
                ? 'OngoingEatinScreen'
                : 'OngoingDeliveryScreen',
            )
          }>
          <Text style={styles.trackText}>
            {orderType === 'delivery' ? 'Track' : 'View Order'}
          </Text>
          <AntDesign name="right" size={14} color="#74AAF0" />
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    backgroundColor: 'rgba(116, 170, 240, 0.1)',
    height: 50,
    borderRadius: 200,
    paddingHorizontal: 20,
  },
  navItem: {
    width: 112,
    height: 50,
    borderRadius: 200,
    backgroundColor: '#74AAF0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: '#FFFFFF',
  },
  navText2: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: 'rgba(0, 19, 55, 0.5)',
  },

  titleText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    color: '#000000',
  },

  clearCartText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.4,
    color: 'rgba(0, 19, 55, 0.8)',
  },
  ordersFromText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 14.4,
    color: 'rgba(0, 19, 55, 0.5)',
    marginBottom: 5,
  },

  resturantText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19.2,
    color: '#000000',
  },

  itemText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.8,
    color: 'rgba(0, 19, 55, 0.5)',
  },

  deliveryText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: '#001337',
  },

  trackText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 15.6,
    color: '#74AAF0',
  },
  viewText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20.8,
    color: 'rgba(0, 19, 55, 0.5)',
  },

  ordersInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  cartItemsContainer: {
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(116, 170, 240, 0.2)',
    paddingVertical: 5,
  },

  ordersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  itemsPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    marginLeft: 53,
    marginTop: 5,
  },

  viewInnerContainer: {
    top: 4,
  },

  deliveringContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    marginTop: 18,
  },

  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    marginTop: 25,
    alignSelf: 'center',
  },

  trackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },

  trackingBar: {
    width: 40,
    borderWidth: 3,
    borderColor: '#74AAF0',
    borderRadius: 10,
  },

  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },

  codeInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  codeView: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(116, 170, 240, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  codeText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.2,
    color: '#001337',
  },
  codeDispatchText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 16.8,
    color: '#000000',
    width: 123,
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 12,
  },
});
