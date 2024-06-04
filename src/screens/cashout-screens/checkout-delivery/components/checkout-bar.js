import React from 'react';
import {Dimensions, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Input} from '../../../../components/Input';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const CheckoutBar = () => {
  return (
    <View style={{width: '100%'}}>
      <Input
        placeholder="42, Adekunle St. Ilupeju Avenue, Lagos"
        inputStyle={{color: '#192426', padding: 5, paddingLeft: 3}}
        placeholderTextColor="grey"
        leftIcon={<Entypo size={20} name="location-pin" color="#8896AB" />}
        // rightIcon={
        //   <AntDesign color="#74AAF0" size={20} name="checkcircle" />
        // }
        title="Your Location"
        titleStyle={{
          color: '#757C7D',
          fontSize: 12,
          fontWeight: '400',
          lineHeight: 14,
        }}
        textContentType="location"
        onChangeText={location => {
          console.log(location, 'locate');
        }}
        inputContainerStyle={{
          borderColor: '#E8E9E9',
          height: 36,
        }}
      />
    </View>
  );
};
