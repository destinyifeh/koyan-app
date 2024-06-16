import Clipboard from '@react-native-clipboard/clipboard';
import React from 'react';
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import {ActionButton} from '../../../components/ActionButton';
import {KoyanBottomDrawer} from '../../../components/KoyanBottomDrawer';
import {
  COLOUR_LIGHT_BLUE,
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export const BankTransferSheet = ({
  transferSheet,
  onCloseTransferSheet,
  onPaymentCompleted,
}) => {
  const copyToClipboard = text => {
    Clipboard.setString(text);
    if (Platform.OS === 'android') {
      ToastAndroid.show('copied', ToastAndroid.LONG);
    } else {
      Toast.show('Copied', Toast.LONG, {
        backgroundColor: 'white',
        textColor: COLOUR_LIGHT_BLUE,
      });
    }
  };

  return (
    <KoyanBottomDrawer
      refRBSheet={transferSheet}
      containerStyle={{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: COLOUR_WHITE,
      }}
      height={deviceHeight * 0.5}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>Bank Transfer</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onCloseTransferSheet}>
            <Entypo name="cross" color="#74AAF0" size={20} />
          </TouchableOpacity>
        </View>
        <Text style={styles.descText}>
          Make your bank transfer with the detail below
        </Text>
        <View style={styles.itemMainContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemKey}>Amount</Text>
            <Text style={styles.itemValue}>N5,100.00</Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.itemKey}>Bank</Text>
            <Text style={styles.itemValue}>Wema Bank</Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.itemKey}>Account Number</Text>
            <View style={styles.itemInnerContainer}>
              <Text style={styles.itemValue}>0217827778</Text>
              <TouchableOpacity onPress={() => copyToClipboard('217827778')}>
                <Octicons name="copy" size={16} color="#74AAF0" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <ActionButton onPress={onPaymentCompleted} title="I have paid" />
        </View>
      </ScrollView>
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

  itemKey: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: '#192426',
  },
  itemValue: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16.8,
    color: '#192426',
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
  addRemoveItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  itemMainContainer: {
    marginTop: 40,
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
    paddingVertical: 5,
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
  helpText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 15.6,
    color: '#757C7D',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    marginBottom: 20,
    width: '100%',
    marginTop: 35,
  },
});
