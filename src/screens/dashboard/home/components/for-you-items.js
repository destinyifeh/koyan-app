import {Image, Text, TouchableOpacity, View} from 'react-native';
import {FONT_FAMILY_BODY} from '../../../../constants/Styles';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import martItem from '../../../../assets/media/mart-item.png';

export const ForYouItems = () => {
  return (
    <View style={{width: 241, height: 169}}>
      <TouchableOpacity>
        <Image
          source={martItem}
          style={{width: 240, height: 120, borderRadius: 10}}
        />
      </TouchableOpacity>
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
        <View>
          <TouchableOpacity style={{alignSelf: 'flex-end'}}>
            <EvilIcons name="heart" size={15} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
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
