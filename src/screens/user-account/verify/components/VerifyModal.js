import React from 'react';
import {Image, View, text} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {KoyanBottomDrawer} from '../../../../components/KoyanBottomDrawer';
import Loader from '../../../../assets/media/loader.gif';

export const VerifyModal = ({
  refRBSheet,
  height,
  closeOnDragDown,
  closeOnPressBack,
  closeOnPressMask,
  containerStyle,
}) => {
  return (
    <KoyanBottomDrawer
      refRBSheet={refRBSheet}
      height={height}
      containerStyle={containerStyle}>
      <View style={{marginTop: 130, alignSelf: 'center'}}>
        <Image source={Loader} />
      </View>
    </KoyanBottomDrawer>
  );
};
