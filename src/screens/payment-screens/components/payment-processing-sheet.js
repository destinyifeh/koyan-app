import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import splashLoader from '../../../assets/media/splashScreenLoader.gif';
import {KoyanBottomDrawer} from '../../../components/KoyanBottomDrawer';
import {
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export const PaymentProcessingSheet = ({paymentProcessingSheetRef}) => {
  return (
    <KoyanBottomDrawer
      refRBSheet={paymentProcessingSheetRef}
      containerStyle={{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: COLOUR_WHITE,
      }}
      height={deviceHeight * 0.7}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>
            We are processing your payment...
          </Text>
          {/* <TouchableOpacity
            style={styles.closeButton}
            onPress={() => paymentProcessingSheetRef.current?.close()}>
            <Entypo name="cross" color="#74AAF0" size={20} />
          </TouchableOpacity> */}
        </View>

        <View style={styles.itemContainer}>
          <Image source={splashLoader} />
        </View>
      </View>
    </KoyanBottomDrawer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  headerContainer: {
    marginBottom: 20,
  },
  titleText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.2,
    color: '#000000',
    textAlign: 'center',
  },

  descText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: '#192426',
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
    marginTop: 30,
  },

  itemContainer: {
    alignSelf: 'center',
    marginTop: 145,
    justifyContent: 'center',
  },

  itemInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  closeButton: {
    position: 'absolute',
    right: 0,
  },
});
