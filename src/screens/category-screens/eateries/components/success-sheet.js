import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import orderCloseSheet from '../../../../assets/icons/close-order-sheet-icon.png';
import successCheckedIcon from '../../../../assets/icons/success-checked-icon.png';
import {ActionButton} from '../../../../components/ActionButton';
import {KoyanBottomDrawer} from '../../../../components/KoyanBottomDrawer';
import {
  COLOUR_LIGHT_BLUE,
  FONT_FAMILY_BODY,
  MAX_ALLOWED_WIDTH,
} from '../../../../constants/Styles';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export const SuccessShoppingOrderSheet = ({
  sheetRef,
  handleCloseSheet,
  handleCheckoutNavigation,
}) => {
  const [selectType, setSelectType] = React.useState(null);
  const navigation = useNavigation();
  return (
    <KoyanBottomDrawer
      containerStyle={{borderTopLeftRadius: 15, borderTopRightRadius: 15}}
      refRBSheet={sheetRef}
      height={deviceHeight * 0.5}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
        style={styles.contentContainer}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end', marginBottom: 15}}
          onPress={handleCloseSheet}>
          <Image source={orderCloseSheet} />
        </TouchableOpacity>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.titleText}>
            Jollof Rice and Curry Chicken has been added to your shopping order!
          </Text>
        </View>
        <View style={{marginTop: 20, alignSelf: 'center'}}>
          <Image source={successCheckedIcon} />
        </View>
        <View style={{marginTop: 7}}>
          <ActionButton
            title="Continue Shopping"
            onPress={() => navigation.goBack()}
          />

          <ActionButton
            onPress={handleCheckoutNavigation}
            title="Proceed to Checkout"
            backgroundcolor="transparent"
            color="#74AAF0"
            buttonStyle={{borderColor: COLOUR_LIGHT_BLUE, borderWidth: 1}}
          />
        </View>
      </ScrollView>
    </KoyanBottomDrawer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {width: 152, height: 232, marginBottom: 5},
  titleText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    textAlign: 'center',
    color: '#000000',
    width: 309,
  },
  contentContainer: {
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
    flex: 1,
  },
});
