import React, {useCallback} from 'react';
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import restaurantitem from '../../../assets/media/resturant-item.png';
import {Input} from '../../../components/Input';
import {
  COLOUR_GHOST_WHITE,
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';

import {useFocusEffect} from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import cartOrders from '../../../assets/icons/cart-orders-icon.png';
import {ActionButton} from '../../../components/ActionButton';
import {getOrderChoice} from '../../../state-management/features/eateries/eateriesSlice';
import {OpenEateriesItems} from './components/open-eateries-items';
import {OrderTypeSheet} from './components/order-type-sheet';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default function OpenEateriesScreen(props) {
  const [navValue, setNavValue] = React.useState(null);
  const [checkCart, setCheckCart] = React.useState(true);
  const sheetRef = React.useRef();
  const dispatch = useDispatch();
  const eateries = useSelector(state => state.eateries);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_WHITE);
      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  React.useEffect(() => {
    setNavValue('all');
    sheetRef.current?.open();
    handleInitialOrderType();
  }, []);

  const handleInitialOrderType = useCallback(() => {
    dispatch(
      getOrderChoice({
        choice: 'delivery',
        route: 'CheckoutDeliveryConfirmOrderScreen',
      }),
    );
  }, [dispatch]);

  const handleNavChange = nav => {
    setNavValue(nav);
  };

  const handleCloseSheet = React.useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const handleOrderType = useCallback(
    (choice, route) => {
      console.log(choice, route, 'choice');
      dispatch(getOrderChoice({choice: choice, route: route}));
    },
    [dispatch],
  );

  const handleCheckCart = () => {
    setCheckCart(!checkCart);
  };

  const handleCheckoutNavigation = () => {
    const {orderType} = eateries;
    console.log(orderType, 'choicer');
    props.navigation.navigate(orderType.route);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.headerInnerContainer}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Feather name="arrow-left" size={18} color="#000000" />
            </TouchableOpacity>
            <Text style={styles.backText}>Back</Text>
          </View>
        </View>

        <View style={styles.theEateryContainer}>
          <View style={styles.theEateryInnerContainer}>
            <Image
              source={restaurantitem}
              style={{width: 62, height: 56, borderRadius: 10}}
            />

            <View>
              <Text style={styles.titleText}>The Place Restaurant</Text>

              <View style={styles.deliveryContainer}>
                <Text style={styles.deliveryText}>Free Delivery</Text>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity style={{alignSelf: 'flex-end', top: 3}}>
              <EvilIcons name="heart" size={22} color="#8896AB" />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                top: 5,
              }}>
              <Ionicons name="star" size={11.67} color="#FFB800" />
              <Text
                style={{
                  fontSize: 12,
                  color: '#192426',
                  fontFamily: FONT_FAMILY_BODY,
                  lineHeight: 18,
                }}>
                5.0
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Input
            placeholder="Search for food at The Place"
            inputStyle={{color: '#192426'}}
            placeholderTextColor="grey"
            leftIcon={<EvilIcons size={24} name="search" color="#8896AB" />}
            onChangeText={location => {
              console.log(location, 'locate');
            }}
            mainContainerStyle={{marginTop: 0}}
            inputContainerStyle={{
              borderColor: '#E8E9E9',
              backgroundColor: '#FAFCFF',
              height: 40,
            }}
          />
        </View>

        <View
          style={{
            marginTop: 20,
          }}>
          <ScrollView
            contentContainerStyle={styles.navInnerContainer1}
            style={styles.navInnerContainer2}
            showsHorizontalScrollIndicator={false}
            horizontal>
            <TouchableOpacity
              onPress={() => handleNavChange('all')}
              style={navValue === 'all' && styles.navSelect}>
              <Text
                style={
                  navValue === 'all' ? styles.activeNavText : styles.navText
                }>
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleNavChange('promotion')}
              style={navValue === 'promotion' && styles.navSelect}>
              <Text
                style={
                  navValue === 'promotion'
                    ? styles.activeNavText
                    : styles.navText
                }>
                {' '}
                Promotions
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleNavChange('top-seller')}
              style={navValue === 'top-seller' && styles.navSelect}>
              <Text
                style={
                  navValue === 'top-seller'
                    ? styles.activeNavText
                    : styles.navText
                }>
                Top Sellers
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleNavChange('bbq')}
              style={navValue === 'bbq' && styles.navSelect}>
              <Text
                style={
                  navValue === 'bbq' ? styles.activeNavText : styles.navText
                }>
                BBQ Chicken
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleNavChange('goat')}
              style={navValue === 'goat' && styles.navSelect}>
              <Text
                style={
                  navValue === 'goat' ? styles.activeNavText : styles.navText
                }>
                Goat Meat
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleNavChange('cp')}
              style={navValue === 'cp' && styles.navSelect}>
              <Text
                style={
                  navValue === 'cp' ? styles.activeNavText : styles.navText
                }>
                Customer Preferences
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.items}>
          <OpenEateriesItems />
          <OpenEateriesItems />
          <OpenEateriesItems />
          <OpenEateriesItems />
        </View>
      </View>
      {!checkCart ? (
        <View style={styles.btContainer}>
          <ActionButton
            title="Checkout order for N10,000"
            onPress={handleCheckoutNavigation}
          />
        </View>
      ) : (
        <TouchableOpacity
          style={styles.cartContainer}
          onPress={handleCheckCart}>
          <View style={styles.cartNumberContainer}>
            <Text style={styles.cartNumberText}>2</Text>
          </View>

          <Image source={cartOrders} style={{}} />
        </TouchableOpacity>
      )}

      <OrderTypeSheet
        handleOrderType={handleOrderType}
        handleCloseSheet={handleCloseSheet}
        sheetRef={sheetRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  contentContainer: {
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
    flex: 1,
    paddingBottom: 60,
    paddingTop: 50,
  },

  headerContainer: {},

  headerInnerContainer: {
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
  },
  contentTitleText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19.2,
    marginBottom: 22,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  descText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.4,

    color: '#000000',
  },
  navText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,

    color: '#000000',
  },

  activeNavText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,

    color: '#74AAF0',
  },
  deliveryContainer: {
    width: 89,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#74AAF0',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  deliveryText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.4,
    color: 'white',
  },

  categoriesContainer: {
    marginTop: 19,
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 20,
    marginVertical: 20,
  },

  theEateryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  theEateryInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  backText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    color: '#000000',
  },
  navSelect: {
    borderBottomWidth: 1,
    borderBottomColor: '#74AAF0',
    paddingVertical: 8,
  },
  navInnerContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  navInnerContainer2: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(116, 170, 240, 0.1)',
  },
  cartNumberContainer: {
    position: 'absolute',
    top: 25,
    left: 75,
    zIndex: 1,
    backgroundColor: COLOUR_GHOST_WHITE,
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartNumberText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    lineHeight: 16.8,
    fontWeight: '600',
    color: '#000000',
  },
  cartContainer: {
    bottom: 80,
    right: 10,
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  btContainer: {
    bottom: 10,

    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
  },
});
