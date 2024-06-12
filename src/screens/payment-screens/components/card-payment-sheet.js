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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import closeButton from '../../../assets/icons/close-order-sheet-icon.png';
import {ActionButton} from '../../../components/ActionButton';
import {Input} from '../../../components/Input';
import {KoyanBottomDrawer} from '../../../components/KoyanBottomDrawer';
import {
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';
import {formatCardNumber, formatExpiryDate} from '../../../helpers/formatter';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export const CardPaymentSheet = ({
  cardPaymentSheet,
  onCloseCardPaymentSheet,
  onPaymentCompleted,
  updateCardPaymentFormField,
  cardPaymentForm,
}) => {
  return (
    <KoyanBottomDrawer
      refRBSheet={cardPaymentSheet}
      containerStyle={{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: COLOUR_WHITE,
      }}
      height={deviceHeight * 0.7}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>Payment Card</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onCloseCardPaymentSheet}>
            <Image source={closeButton} />
          </TouchableOpacity>
        </View>

        <View style={styles.itemMainContainer}>
          <Input
            title="Name on Card"
            placeholder="Card Holder Name"
            onChangeText={cardName => {
              updateCardPaymentFormField({cardName});
            }}
            value={cardPaymentForm.cardName}
            leftIcon={
              <AntDesign name="user" size={18} color="rgba(0, 0, 0, 0.2)" />
            }
          />

          <Input
            title="Card Number"
            placeholder="0123 4567 8901 2345"
            inputType="number"
            onChangeText={cardNumber => {
              const formattedCardNumber = formatCardNumber(cardNumber);
              updateCardPaymentFormField({cardNumber: formattedCardNumber});
            }}
            maxLength={19}
            value={cardPaymentForm.cardNumber}
            leftIcon={
              <Ionicons
                name="card-outline"
                size={18}
                color="rgba(0, 0, 0, 0.2)"
              />
            }
          />

          <View style={styles.itemContainer}>
            <Input
              title="Expiry Date"
              placeholder="MM / YY"
              inputType="number"
              onChangeText={expiryDate => {
                const formattedDate = formatExpiryDate(expiryDate);
                updateCardPaymentFormField({expiryDate: formattedDate});
              }}
              value={cardPaymentForm.expiryDate}
              mainContainerStyle={{width: 144}}
              maxLength={5}
            />

            <Input
              title="CVV"
              placeholder="012"
              inputType="number"
              onChangeText={cvv => {
                updateCardPaymentFormField({cvv});
              }}
              mainContainerStyle={{width: 144}}
              value={cardPaymentForm.cvv}
              maxLength={3}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <ActionButton onPress={onPaymentCompleted} title="Process Payment" />
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
    marginTop: 40,
  },
});
