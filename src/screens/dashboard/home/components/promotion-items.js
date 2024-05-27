import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import promotionItem from '../../../../assets/media/promotion-mart.png';
import {FONT_FAMILY_BODY} from '../../../../constants/Styles';

export const PromotionItems = () => {
  return (
    <ImageBackground
      style={{height: 166}}
      imageStyle={{borderRadius: 10}}
      source={promotionItem}>
      <View
        style={{
          backgroundColor: 'white',
          width: 132,
          height: 28,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-end',
          marginRight: 10,
          marginTop: 10,
        }}>
        <Text
          style={{
            fontFamily: FONT_FAMILY_BODY,
            fontWeight: '500',
            fontSize: 12,
            lineHeight: 18,
            color: '#000000',
          }}>
          Black Friday Offers
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#74AAF0',
          width: 105,
          height: 38,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 15,
          left: 10,
        }}>
        <Text
          style={{
            fontFamily: FONT_FAMILY_BODY,
            fontWeight: '600',
            fontSize: 14,
            lineHeight: 21,
            color: 'white',
          }}>
          Shop Now
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
