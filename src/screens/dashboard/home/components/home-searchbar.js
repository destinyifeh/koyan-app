import React from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {Input} from '../../../../components/Input';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const HomeSearchBar = props => {
  console.log(props.location, 'locatee');
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}>
      <View style={{width: '92%'}}>
        <Input
          placeholder="Search for your location"
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
            props.setLocation(location);
          }}
          inputContainerStyle={{
            borderColor: '#E8E9E9',
            height: 36,
          }}
          value={props.location}
        />
      </View>

      <TouchableOpacity
        style={{marginTop: 44}}
        onPress={props.onSearchLocation}>
        <Feather name="search" size={16} />
      </TouchableOpacity>
    </View>
  );
};
