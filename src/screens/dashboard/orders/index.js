import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import {
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';
import CartItems from './components/cart-items';
import OngoingItems from './components/ongoing-items';
const deviceWidth = Dimensions.get('window').width;

export default function OrdersScreen() {
  const [activeNav, setActiveNav] = React.useState('cart');

  useFocusEffect(
    React.useCallback(() => {
      Platform.OS === 'android' && StatusBar.setBackgroundColor(COLOUR_WHITE);
      StatusBar.setBarStyle('dark-content');
      setActiveNav('cart');
    }, []),
  );

  React.useEffect(() => {}, []);

  const handleNav = nav => {
    console.log(nav);
    setActiveNav(nav);
  };
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>My Orders</Text>
          {activeNav === 'cart' && (
            <TouchableOpacity style={styles.clearContainer}>
              <FontAwesome name="trash-can" size={14} />
              <Text style={styles.clearCartText}>Clear Cart</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.navContainer}>
          <TouchableOpacity
            style={activeNav === 'cart' ? [styles.navItem, {right: 18}] : {}}
            onPress={() => handleNav('cart')}>
            <Text
              style={activeNav === 'cart' ? styles.navText : styles.navText2}>
              My Cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={activeNav === 'ongoing' ? [styles.navItem, {left: 8}] : {}}
            onPress={() => handleNav('ongoing')}>
            <Text
              style={
                activeNav === 'ongoing'
                  ? styles.navText
                  : activeNav === 'cart'
                  ? {right: 10}
                  : activeNav === 'completed'
                  ? {left: 10}
                  : styles.navText2
              }>
              Ongoing
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleNav('completed')}
            style={
              activeNav === 'completed' ? [styles.navItem, {left: 18}] : {}
            }>
            <Text
              style={
                activeNav === 'completed' ? styles.navText : styles.navText2
              }>
              Completed
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 35}}>
          {activeNav === 'cart' && <CartItems />}
          {activeNav === 'ongoing' && (
            <>
              <OngoingItems orderType={'delivery'} />
              <OngoingItems orderType={'eatin'} />
            </>
          )}

          {activeNav === 'completed' && (
            <Text style={{textAlign: 'center'}}>No completed order yet!</Text>
          )}
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
    justifyContent: 'space-between',
  },
  clearContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'rgba(116, 170, 240, 0.1)',
    height: 26,
    borderRadius: 200,
    paddingHorizontal: 8,
  },

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
  contentContainer: {
    flex: 1,
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
    marginTop: 50,
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
    marginTop: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 12,
  },
});
