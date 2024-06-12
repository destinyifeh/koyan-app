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
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import resturantImg from '../../../../assets/media/resturant-item.png';
import {ActionButton} from '../../../../components/ActionButton';
import {
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
} from '../../../../constants/Styles';
const deviceWidth = Dimensions.get('window').width;

export default function CartItems() {
  return (
    <Animatable.View style={styles.cartItemsContainer} animation="slideInLeft">
      <View style={styles.ordersContainer}>
        <View style={styles.ordersInnerContainer}>
          <Image source={resturantImg} style={{width: 39, height: 39}} />
          <View>
            <Text style={styles.ordersFromText}>Orders from</Text>
            <Text style={styles.resturantText}>The Place Restaurant</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.viewInnerContainer}>
          <Text style={styles.viewText}>View</Text>
          <AntDesign name="right" size={14} color="#001337" />
        </TouchableOpacity>
      </View>
      <View style={styles.itemsPriceContainer}>
        <Text style={styles.itemText}>2 Items</Text>
        <Entypo name="dot-single" size={20} color="#8896AB" />
        <Text style={styles.itemText}>N14,000</Text>
      </View>
      <View style={styles.deliveringContainer}>
        <MaterialIcon name="pedal-bike" size={20} color="#001337" />
        <Text style={styles.deliveryText}>Delivering to 42 Adekunle St.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={{width: 130}}>
          <ActionButton
            title="Remove"
            buttonStyle={{borderColor: '#74AAF0', borderWidth: 1}}
            backgroundcolor={COLOUR_WHITE}
            color="#74AAF0"
          />
        </View>

        <View style={{width: 130}}>
          <ActionButton title="Checkout" buttonStyle={{width: 130}} />
        </View>
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
  viewText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: '#001337',
  },

  ordersInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  cartItemsContainer: {
    marginTop: 10,
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },

  deliveringContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginLeft: 53,
    marginTop: 13,
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 12,
  },
});
