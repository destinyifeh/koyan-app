import {Image, Text, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import restaurantitem from '../../../assets/media/resturant-item.png';
import {FONT_FAMILY_BODY} from '../../../constants/Styles';
export const AllEateries = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',

        paddingVertical: 8,
        marginTop: 5,
        marginBottom: 2,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('OpenEateries', {fromEateries: true})
          }
          style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Image
            source={restaurantitem}
            style={{width: 89, height: 61, borderRadius: 10}}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 8,
            }}>
            <View>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: '600',
                  lineHeight: 16.8,
                  fontFamily: FONT_FAMILY_BODY,
                }}>
                The Place Restaurant, Ilupeju
              </Text>
              <Text
                style={{
                  color: '#757C7D',
                  fontSize: 12,
                  fontWeight: '400',
                  lineHeight: 14.4,
                }}>
                Free Delivery
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View>
          <TouchableOpacity style={{alignSelf: 'flex-end', top: 3}}>
            <EvilIcons name="heart" size={15} color="#8896AB" />
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
    </View>
  );
};
