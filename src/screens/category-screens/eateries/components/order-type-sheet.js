import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import orderCloseSheet from '../../../../assets/icons/close-order-sheet-icon.png';
import orderDelivery from '../../../../assets/icons/order-delivery.png';
import orderEat from '../../../../assets/icons/order-eat.png';
import orderPickup from '../../../../assets/icons/order-pickup.png';
import orderUnchecked from '../../../../assets/icons/unchecked-order-icon.png';
import {ActionButton} from '../../../../components/ActionButton';
import {KoyanBottomDrawer} from '../../../../components/KoyanBottomDrawer';
import {CheckBoxActive} from '../../../../components/checkbox';
import {
  FONT_FAMILY_BODY,
  MAX_ALLOWED_WIDTH,
} from '../../../../constants/Styles';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export const OrderTypeSheet = ({
  sheetRef,
  handleCloseSheet,
  handleOrderType,
}) => {
  const [selectType, setSelectType] = React.useState(null);
  const [selectTypeval, setSelectTypeVal] = React.useState({
    eat: false,
    pickup: false,
    delivery: true,
  });
  const handleSelectOrderType = (order, route) => {
    handleOrderType(order, route);
    if (order === 'eat') {
      setSelectTypeVal(prev => ({
        ...prev,
        eat: true,
        pickup: false,
        delivery: false,
      }));
    } else if (order === 'pickup') {
      setSelectTypeVal(prev => ({
        ...prev,
        eat: false,
        pickup: true,
        delivery: false,
      }));
    } else if (order === 'delivery') {
      setSelectTypeVal(prev => ({
        ...prev,
        eat: false,
        pickup: false,
        delivery: true,
      }));
    }
  };

  return (
    <KoyanBottomDrawer
      containerStyle={{borderTopLeftRadius: 15, borderTopRightRadius: 15}}
      refRBSheet={sheetRef}
      height={deviceHeight * 0.5}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
        style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            How would you love to take your order?
          </Text>
          <TouchableOpacity style={{}} onPress={handleCloseSheet}>
            <Image source={orderCloseSheet} />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10}}>
          <View style={styles.selectcontainer}>
            <View style={styles.selectInnercontainer}>
              <View style={styles.orderType}>
                <Image source={orderEat} />
              </View>
              <Text style={styles.selectText}>Eat-in</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                handleSelectOrderType('eat', 'CheckoutEatInConfirmOrderScreen')
              }>
              {selectTypeval.eat ? (
                <CheckBoxActive />
              ) : (
                <Image source={orderUnchecked} />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.selectcontainer}>
            <View style={styles.selectInnercontainer}>
              <View style={styles.orderType}>
                <Image source={orderPickup} />
              </View>
              <Text style={styles.selectText}>Pick-up</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                handleSelectOrderType(
                  'pickup',
                  'CheckoutPickupConfirmOrderScreen',
                )
              }>
              {selectTypeval.pickup ? (
                <CheckBoxActive />
              ) : (
                <Image source={orderUnchecked} />
              )}
            </TouchableOpacity>
          </View>

          <View style={[styles.selectcontainer, {borderBottomWidth: 0}]}>
            <View style={styles.selectInnercontainer}>
              <View style={styles.orderType}>
                <Image source={orderDelivery} />
              </View>

              <Text style={styles.selectText}>Delivery</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                handleSelectOrderType(
                  'delivery',
                  'CheckoutDeliveryConfirmOrderScreen',
                )
              }>
              {selectTypeval.delivery ? (
                <CheckBoxActive />
              ) : (
                <Image source={orderUnchecked} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <ActionButton
          title="Proceed"
          onPress={() => handleCloseSheet(selectTypeval)}
        />
      </ScrollView>
    </KoyanBottomDrawer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {width: 152, height: 232, marginBottom: 5},
  titleText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    textAlign: 'center',
    color: '#000000',
    width: 309,
  },
  contentContainer: {
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
    flex: 1,
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
  titleContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  selectText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: '#000000',
  },

  categoriesContainer: {
    marginTop: 19,
  },
  selectcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(116, 170, 240, 0.15)',
  },
  selectInnercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  orderType: {
    width: 60,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(240, 246, 255, 1)',
  },
});
