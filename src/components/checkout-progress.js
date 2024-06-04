import {View} from 'react-native-animatable';
import {COLOUR_LIGHT_BLUE} from '../constants/Styles';

export const CheckoutProgressTwo = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          position: 'absolute',
          top: 0,
          bottom: 0,
          zIndex: 1,
        }}>
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: COLOUR_LIGHT_BLUE,
          }}></View>
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: COLOUR_LIGHT_BLUE,
          }}></View>
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: '#D3E4FB',
          }}></View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 2,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLOUR_LIGHT_BLUE,
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: '#D3E4FB',
          }}
        />
      </View>
    </>
  );
};

export const CheckoutProgressOne = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          position: 'absolute',
          top: 0,
          bottom: 0,
          zIndex: 1,
        }}>
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: COLOUR_LIGHT_BLUE,
          }}></View>
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: '#D3E4FB',
          }}></View>
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: '#D3E4FB',
          }}></View>
      </View>
      <View
        style={{
          width: '100%',
          borderBottomWidth: 2,
          borderBottomColor: '#D3E4FB',
        }}></View>
    </View>
  );
};

export const CheckoutProgressThree = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          position: 'absolute',
          top: 0,
          bottom: 0,
          zIndex: 1,
        }}>
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: COLOUR_LIGHT_BLUE,
          }}></View>
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: COLOUR_LIGHT_BLUE,
          }}></View>
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: COLOUR_LIGHT_BLUE,
          }}></View>
      </View>
      <View
        style={{
          width: '100%',
          borderBottomWidth: 2,
          borderBottomColor: COLOUR_LIGHT_BLUE,
        }}></View>
    </View>
  );
};
