import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import minusCart from '../../../assets/icons/minus-cart.png';
import plusCart from '../../../assets/icons/plus-cart.png';
import removeOrderIcon from '../../../assets/icons/remove-checkout-order.png';
import {ActionButton} from '../../../components/ActionButton';
import {CheckoutProgressOne} from '../../../components/checkout-progress';
import {
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';
import {CheckoutOrderRemovalModal} from '../components/remove-order-modal';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function CheckoutEatInConfirmOrderScreen(props) {
  const removalSheet = React.useRef();

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setTranslucent(true);
      }
    }, []),
  );

  const onRemoveOrder = () => {
    removalSheet.current?.close();
    //Alert.alert(null, 'Order removed');
    ToastAndroid.show('Order removed', ToastAndroid.LONG);
  };

  const checkoutItems = () => {
    return (
      <View style={styles.itemContainer}>
        <Text style={[styles.descText, {marginVertical: 5}]}>
          1 Order From The Place Restaurant
        </Text>
        <View style={styles.descContainer}>
          <Text style={[styles.descText, {fontFamily: FONT_FAMILY_BODY}]}>
            Jollof Rice and Curry Chicken
          </Text>
          <Text style={styles.descText}>N5,200</Text>
        </View>
        <View>
          <Text
            style={[
              styles.descText,
              {
                color: 'rgba(0, 0, 0, 0.5)',
                fontFamily: FONT_FAMILY_BODY,
                fontWeight: '400',
                marginTop: 5,
              },
            ]}>
            + Fanta (50cl)
          </Text>
        </View>
        <View style={styles.removeOrderContainer}>
          <TouchableOpacity
            style={styles.removeOrderView}
            onPress={() => removalSheet.current?.open()}>
            <Image source={removeOrderIcon} />
            <Text
              style={[
                styles.descText,
                {color: '#74AAF0', fontFamily: FONT_FAMILY_BODY},
              ]}>
              Remove Order
            </Text>
          </TouchableOpacity>
          <View style={styles.addRemoveItem}>
            <TouchableOpacity>
              <Image source={minusCart} />
            </TouchableOpacity>
            <Text style={[styles.descText, {fontFamily: FONT_FAMILY_BODY}]}>
              1
            </Text>
            <TouchableOpacity>
              <Image source={plusCart} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={{}}
            onPress={() => props.navigation.goBack()}>
            <Feather name="arrow-left" size={20} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.titleText}>Checkout</Text>
        </View>
        <View style={{marginVertical: 30}}>
          <CheckoutProgressOne />
        </View>
        <View style={{marginTop: 5}}>
          <Text style={styles.orderText}>Your Order</Text>
          <View style={{marginTop: 10}}>
            {checkoutItems()}
            {checkoutItems()}
          </View>
          <View style={styles.cartItemPriceContainer}>
            <Text
              style={[
                styles.descText,
                {
                  color: 'rgba(0, 0, 0, 0.5)',
                  fontWeight: '400',
                  fontFamily: FONT_FAMILY_BODY,
                },
              ]}>
              Total
            </Text>
            <Text style={styles.priceText}>N10,400</Text>
          </View>
        </View>
        <CheckoutOrderRemovalModal
          onRemoveOrder={onRemoveOrder}
          removalSheet={removalSheet}
        />
        <View style={styles.buttonContainer}>
          <ActionButton
            title="Checkout order for N10,000"
            onPress={() =>
              props.navigation.navigate('CheckoutEatInProceedScreen')
            }
          />
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
    fontWeight: '600',
    lineHeight: 16.8,
    color: '#000000',
  },
  contentContainer: {
    flex: 1,
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
    marginTop: 50,
    paddingBottom: 50,
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
  priceText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21.6,
    color: '#000000',
  },
  cartItemPriceContainer: {
    alignSelf: 'flex-end',
    gap: 5,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
  },
});
