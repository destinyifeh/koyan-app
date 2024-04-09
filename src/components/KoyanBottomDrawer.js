import React from 'react';
import {View, text} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

export const KoyanBottomDrawer = ({
  refRBSheet,
  children,
  height,
  closeOnDragDown,
  closeOnPressBack,
  closeOnPressMask,
  containerStyle,
}) => {
  console.log(closeOnDragDown, height, 'ccgg');
  return (
    <View style={{flex: 1}}>
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={true}
        closeOnPressBack={false}
        closeOnDragDown={closeOnDragDown ?? false}
        closeOnPressMask={closeOnPressMask ?? false}
        height={height}
        customStyles={{
          wrapper: {
            //backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            ...containerStyle,
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        {children}
      </RBSheet>
    </View>
  );
};
