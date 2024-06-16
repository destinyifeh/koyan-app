import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import restaurantitem from '../../../../assets/media/resturant-item.png';

import {useNavigation} from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import plusCart from '../../../../assets/icons/plus-cart.png';
import {
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
} from '../../../../constants/Styles';
export const OpenEateriesItems = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('OrderDescriptionScreen')}>
        <Image
          source={restaurantitem}
          style={{width: 152, height: 164, borderRadius: 10}}
        />
      </TouchableOpacity>

      <View style={{marginTop: 5}}>
        <Text style={styles.descText}>
          Jollof Rice and Curry Chicken - Belleful Meal
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 8,
        }}>
        <Text style={styles.navText}>N1500 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <TouchableOpacity>
            <EvilIcons name="heart" size={25} color="#8896AB" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{top: 0}}
            onPress={() => navigation.navigate('OrderDescriptionScreen')}>
            <Image source={plusCart} style={{width: 17, height: 17}} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {width: 152, height: 232, marginBottom: 5},
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
  scrollableItems: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
});
