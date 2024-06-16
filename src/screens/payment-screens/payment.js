import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import bankIcon from '../../assets/icons/bank-transfer-icon.png';
import checkBoxIcon from '../../assets/icons/checked-order-icon.png';
import cardIcon from '../../assets/icons/pay-with-card-icon.png';
import cashIcon from '../../assets/icons/pay-with-cash-icon.png';
import promoIcon from '../../assets/icons/promo-code-icon.png';
import {ActionButton} from '../../components/ActionButton';
import {Input} from '../../components/Input';
import {CheckBoxActive} from '../../components/checkbox';
import {CheckoutProgressThree} from '../../components/checkout-progress';
import {
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../constants/Styles';
import {getPaymentMethod} from '../../state-management/features/eateries/eateriesSlice';
import {BankTransferSheet} from './components/bank-transfer-sheet';
import {CardPaymentSheet} from './components/card-payment-sheet';
import {PaymentProcessingSheet} from './components/payment-processing-sheet';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function PaymentScreen(props) {
  const [cardPaymentForm, setCardPaymentForm] = React.useState({
    expiryDate: '',
    cardNumber: '',
    cardName: '',
  });
  const [form, setForm] = useState('');
  const [paymentType, setPaymentType] = useState(null);
  const [showPromoCode, setShowPromoCode] = useState(false);
  const [isPaymentError, setIsPaymentError] = React.useState(false);
  const [selectPaymentType, setSelectPaymentType] = React.useState({
    transfer: false,
    cash: false,
    card: false,
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const dispatch = useDispatch();
  const transferSheet = React.useRef();
  const cardPaymentSheetRef = React.useRef();
  const paymentProcessingSheetRef = React.useRef();
  const eateries = useSelector(state => state.eateries);
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setTranslucent(true);
      }
    }, []),
  );

  const handleShowPromoCode = () => {
    setShowPromoCode(!showPromoCode);
  };

  const updateFormField = value => {
    console.log(value, 'valll');
    const updateForm = {
      ...form,
      ...value,
    };

    setForm(updateForm);
  };

  const updateCardPaymentFormField = value => {
    console.log(value, 'card val');

    setCardPaymentForm(prevForm => ({
      ...prevForm,
      ...value,
    }));
  };

  const handlePayType = type => {
    console.log(type, 'type');
    setPaymentType(type);
    dispatch(getPaymentMethod(type));
  };

  const handleSelectPaymentMethod = paymentType => {
    handlePayType(paymentType);
    setIsPaymentError(false);
    if (paymentType === 'transfer') {
      setSelectPaymentType(prev => ({
        ...prev,
        transfer: true,
        cash: false,
        card: false,
      }));
    } else if (paymentType === 'cash') {
      setSelectPaymentType(prev => ({
        ...prev,
        transfer: false,
        cash: true,
        card: false,
      }));
    } else if (paymentType === 'card') {
      setSelectPaymentType(prev => ({
        ...prev,
        transfer: false,
        cash: false,
        card: true,
      }));
    }
  };

  const onCompleteOrder = async () => {
    try {
      const paymentPayload = {
        paymentMethod: paymentType,
        promoCode: form?.promoCode,
      };
      console.log(paymentPayload, 'payment payload');
      if (paymentType === null) {
        setIsPaymentError(true);
      } else if (paymentPayload.paymentMethod === 'transfer') {
        transferSheet.current?.open();
      } else if (paymentPayload.paymentMethod === 'card') {
        cardPaymentSheetRef.current?.open();
      } else {
        paymentProcessingSheetRef.current?.open();
        setTimeout(() => {
          paymentProcessingSheetRef.current?.close();
          //  props.navigation.navigate('PaymentSuccessScreen');
        }, 7000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onCloseTransferSheet = () => {
    return transferSheet.current?.close();
  };
  const onCloseCardPaymentSheet = () => {
    return cardPaymentSheetRef.current?.close();
  };

  const onProcessCardPayment = React.useCallback(() => {
    cardPaymentSheetRef.current?.close();
    paymentProcessingSheetRef.current?.open();
    setTimeout(() => {
      paymentProcessingSheetRef.current?.close();
      props.navigation.navigate('PaymentSuccessScreen');
    }, 7000);
  }, []);

  const onBankTransferPaymentCompleted = React.useCallback(() => {
    transferSheet.current?.close();
    paymentProcessingSheetRef.current?.open();
    setTimeout(() => {
      paymentProcessingSheetRef.current?.close();
      props.navigation.navigate('PaymentSuccessScreen');
    }, 7000);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.contentContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{
            paddingBottom: 50,
          }}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={{}}
              onPress={() => props.navigation.goBack()}>
              <Feather name="arrow-left" size={20} color="#000000" />
            </TouchableOpacity>
            <Text style={styles.titleText}>Checkout</Text>
          </View>
          <View style={{marginVertical: 30}}>
            <CheckoutProgressThree />
          </View>
          <View style={{marginTop: 5}}>
            <Text style={styles.mainPaymentText}>Payment Method</Text>
            <View
              style={
                isPaymentError
                  ? styles.isErrorView
                  : styles.selectPaymentMethodView
              }>
              <Text style={styles.mainPaymentText}>Select Payment Method</Text>
              <View>
                <View style={styles.paymentMethodContainer}>
                  <View style={styles.paymentMethodContainerInner}>
                    <Image source={bankIcon} />
                    <Text style={styles.paymentMethodText}>Bank Transfer</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => handleSelectPaymentMethod('transfer')}>
                    {selectPaymentType.transfer ? (
                      <CheckBoxActive />
                    ) : (
                      <Image source={checkBoxIcon} />
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.paymentMethodContainer}>
                  <View style={styles.paymentMethodContainerInner}>
                    <Image source={cashIcon} />
                    <Text style={styles.paymentMethodText}>Pay with Cash</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => handleSelectPaymentMethod('cash')}>
                    {selectPaymentType.cash ? (
                      <CheckBoxActive />
                    ) : (
                      <Image source={checkBoxIcon} />
                    )}
                  </TouchableOpacity>
                </View>

                <View style={styles.paymentMethodContainer}>
                  <View style={styles.paymentMethodContainerInner}>
                    <Image source={cardIcon} />
                    <Text style={styles.paymentMethodText}>Pay with Card</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => handleSelectPaymentMethod('card')}>
                    {selectPaymentType.card ? (
                      <CheckBoxActive />
                    ) : (
                      <Image source={checkBoxIcon} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {isPaymentError && (
              <View style={{marginTop: 15}}>
                <Text style={styles.errorText}>
                  Oops! You’ve not selected your payment Method
                </Text>
              </View>
            )}
            <View style={styles.promoContainer}>
              <View style={styles.paymentMethodContainer}>
                <View style={styles.paymentMethodContainerInner}>
                  <Image source={promoIcon} />
                  <Text style={styles.promoText}>
                    Do you have a promo Code?
                  </Text>
                </View>
                <TouchableOpacity onPress={handleShowPromoCode}>
                  <Ionicons
                    name="chevron-forward-outline"
                    color="#000000"
                    size={16}
                  />
                </TouchableOpacity>
              </View>
              {showPromoCode && (
                <Animatable.View
                  style={{marginBottom: 20}}
                  animation="slideInLeft">
                  <Input
                    title="Promo Code"
                    placeholder="Promo Code"
                    onChangeText={promoCode => {
                      updateFormField({promoCode});
                    }}
                    value={form?.promoCode}
                    mainContainerStyle={{marginTop: 10}}
                  />
                </Animatable.View>
              )}
            </View>

            <View style={styles.orderSummaryContainer}>
              <Text style={styles.summaryText}>Order Summary</Text>
              <View style={styles.orderSummaryInnerContainer}>
                <Text style={styles.summaryChildrenText}>Order</Text>
                <Text style={styles.summaryChildrenText}>N5000.00</Text>
              </View>
              <View style={styles.orderSummaryInnerContainer}>
                <Text style={styles.summaryChildrenText}>Delivery</Text>
                <Text style={styles.summaryChildrenText}>FREE</Text>
              </View>

              <View style={styles.orderSummaryInnerContainer}>
                <Text style={styles.summaryChildrenText}>Services</Text>
                <Text style={styles.summaryChildrenText}>N100.00</Text>
              </View>

              <View style={styles.orderSummaryInnerContainer}>
                <Text style={styles.totalPaymentText}>Total</Text>
                <Text style={styles.totalPaymentText}>N5100.00</Text>
              </View>
            </View>
          </View>

          <BankTransferSheet
            transferSheet={transferSheet}
            onCloseTransferSheet={onCloseTransferSheet}
            onPaymentCompleted={onBankTransferPaymentCompleted}
          />
          <PaymentProcessingSheet
            paymentProcessingSheetRef={paymentProcessingSheetRef}
          />
          <CardPaymentSheet
            cardPaymentSheet={cardPaymentSheetRef}
            cardPaymentForm={cardPaymentForm}
            onPaymentCompleted={onProcessCardPayment}
            onCloseCardPaymentSheet={onCloseCardPaymentSheet}
            updateCardPaymentFormField={updateCardPaymentFormField}
          />
        </ScrollView>
      </SafeAreaView>

      <View style={styles.buttonContainer}>
        <ActionButton title="Complete Order" onPress={onCompleteOrder} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  titleText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21.6,
    textAlign: 'center',
    color: '#000000',
  },

  mainPaymentText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.2,
    color: '#000000',
  },

  totalPaymentText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.2,
    color: '#192426',
  },

  selectPaymentMethodView: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#E7F1FF',
    padding: 20,
    marginTop: 15,
  },

  paymentMethodText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: '#192426',
  },
  promoText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.8,
    color: '#192426',
  },
  contentContainer: {
    flex: 1,
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
    marginTop: 50,
  },
  paymentMethodContainerInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 15,
  },

  paymentMethodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  promoContainer: {
    marginVertical: 13,
  },

  descContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  errorText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 14.4,
    color: '#FF0000',
  },
  isErrorView: {
    backgroundColor: '#FFF8F8',
    borderWidth: 1,
    borderColor: 'rgba(255, 0, 0, 0.1)',
    width: '100%',
    borderRadius: 10,
    padding: 20,
    marginTop: 15,
  },
  summaryText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 16.8,
    color: '#000000',
    marginBottom: 5,
  },
  summaryChildrenText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: '#192426',
  },
  orderSummaryInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  orderSummaryContainer: {
    backgroundColor: 'rgba(231, 241, 255, 0.4)',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(116, 170, 240, 0.2)',
    padding: 20,
  },
  buttonContainer: {
    marginBottom: 40,
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
  },
});
