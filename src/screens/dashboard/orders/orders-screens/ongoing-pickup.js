import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../../constants/Styles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import resturantImg from '../../../../assets/media/resturant-item.png';
import {OngoingOrderStatuses} from './components/ongoing-orders-statuses';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function OngoingPickupScreen(props) {
  const [form, setForm] = useState('');
  const [paymentType, setPaymentType] = useState(null);
  const [showPromoCode, setShowPromoCode] = useState(false);
  const [isPaymentError, setIsPaymentError] = React.useState(false);

  const dispatch = useDispatch();

  const eateries = useSelector(state => state.eateries);
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  const handleViewMap = () => {
    console.log('handle view');

    const address = '42, Adekunle St. Ilupeju Avenue, Lagos';
    const encodedAddress = encodeURIComponent(address);
    console.log(encodedAddress, 'encoded add');

    const url = `https://maps.google.com/?q=${encodedAddress}`;
    props.navigation.navigate('OrderMapViewScreen', {mapUrl: url});
    // Linking.openURL(url);
  };

  const deliveryStatus = {
    received: true,
    preparing: true,
    ready: true,
    accepted: false,
    waiting: false,
    transit: false,
    arrived: false,
    delivered: false,
  };

  const code = '1234';

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.mainInnerContainer}>
        <View style={styles.contentInfoContainer}>
          <View style={styles.contentContainer}>
            <View style={styles.headerContainer}>
              <TouchableOpacity
                style={{}}
                onPress={() => props.navigation.goBack()}>
                <Feather name="arrow-left" size={20} color="#000000" />
              </TouchableOpacity>
              <Text style={styles.titleText}>Order Status</Text>
            </View>
            <View style={{marginTop: 30}}>
              <View style={styles.cartItemsContainer}>
                <View style={styles.ordersContainer}>
                  <View style={styles.ordersInnerContainer}>
                    <Image
                      source={resturantImg}
                      style={{width: 39, height: 39}}
                    />
                    <View>
                      <Text style={styles.ordersFromText}>Pickup from</Text>
                      <Text style={styles.resturantText}>
                        The Place Restaurant
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.viewInnerContainer}>
                    <Text style={styles.viewText}>Orde No </Text>
                    <Text style={styles.viewText}> 192847</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <View style={styles.itemsPriceContainer}>
                    <View style={styles.itemsPriceInnerContainer}>
                      <Text style={styles.itemText}>18th feb, 2024.</Text>

                      <Text style={styles.itemText}>11:29am</Text>
                    </View>
                    <TouchableOpacity style={styles.onViewContainer}>
                      <Text style={[styles.trackText, {color: '#001337'}]}>
                        View
                      </Text>
                      <AntDesign name="right" size={14} color="#001337" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{marginBottom: 20, marginTop: 25, gap: 2}}>
                  <Text
                    style={[styles.trackText, {color: 'rgba(0, 19, 55, 0.5)'}]}>
                    Eatin at
                  </Text>
                  <View style={styles.deliveringContainer}>
                    <Text style={[styles.trackText, {color: '#001337'}]}>
                      42, Adekunle St. Ilupeju Avenue, Lagos
                    </Text>
                    <TouchableOpacity
                      style={styles.trackContainer}
                      onPress={handleViewMap}>
                      <Text style={styles.trackText}>View Map</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.contentContainer, {marginTop: 20}]}>
          <OngoingOrderStatuses deliveryStatus={deliveryStatus} />
          <View style={[styles.codeContainer, {marginTop: 50}]}>
            <Text style={styles.codeDispatchText}>
              Share this code with the Sales Rep
            </Text>
            <View style={styles.codeInnerContainer}>
              <View style={styles.codeView}>
                <Text style={styles.codeText}>{code[0]}</Text>
              </View>

              <View style={styles.codeView}>
                <Text style={styles.codeText}>{code[1]}</Text>
              </View>
              <View style={styles.codeView}>
                <Text style={styles.codeText}>{code[2]}</Text>
              </View>
              <View style={styles.codeView}>
                <Text style={styles.codeText}>{code[3]}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainInnerContainer: {
    flex: 1,

    backgroundColor: 'rgba(116, 170, 240, 0.1)',
  },

  contentInfoContainer: {
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

  contentContainer: {
    flex: 1,
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
    marginTop: 50,
  },

  descContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    backgroundColor: 'rgba(116, 170, 240, 0.1)',
    height: 50,
    borderRadius: 200,
    paddingHorizontal: 20,
  },
  navItem: {
    width: 112,
    height: 50,
    borderRadius: 200,
    backgroundColor: '#74AAF0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: '#FFFFFF',
  },
  navText2: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: 'rgba(0, 19, 55, 0.5)',
  },

  titleText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    color: '#000000',
  },

  clearCartText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.4,
    color: 'rgba(0, 19, 55, 0.8)',
  },
  ordersFromText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 14.4,
    color: 'rgba(0, 19, 55, 0.5)',
    marginBottom: 5,
  },

  resturantText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19.2,
    color: '#000000',
  },

  itemText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.8,
    color: 'rgba(0, 19, 55, 0.5)',
  },

  deliveryText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: '#001337',
  },

  trackText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: '#74AAF0',
  },
  viewText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19.8,
    color: 'rgba(0, 19, 55, 0.5)',
  },

  ordersInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  cartItemsContainer: {
    marginTop: 15,
    paddingVertical: 5,
  },

  ordersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  itemsPriceInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    marginLeft: 53,
  },

  itemsPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },

  viewInnerContainer: {
    top: 0,
  },

  deliveringContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    marginTop: 25,
    alignSelf: 'center',
  },

  onViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  trackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    height: 26,
    borderRadius: 200,
    backgroundColor: 'rgba(116, 170, 240, 0.2)',
    gap: 3,
    paddingHorizontal: 10,
  },

  trackingBar: {
    width: 40,
    borderWidth: 3,
    borderColor: '#74AAF0',
    borderRadius: 10,
  },

  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },

  codeInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  codeView: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(116, 170, 240, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  codeText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.2,
    color: '#001337',
  },
  codeDispatchText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 16.8,
    color: '#000000',
    width: 123,
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 12,
  },
  progressMainContent: {
    flex: 1,
  },
  progressItemsContainer: {
    gap: 39,
    marginTop: 5,
    flex: 1,
    marginLeft: 8,
  },
  progressItemsInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressTitleText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.8,
    color: '#74AAF0',
  },
  progressTitleTextInactive: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.8,
    color: '#8896AB',
  },

  progressDescText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 13.2,
    color: '#001337',
  },

  progressDescTextInactive: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 13.2,
    color: '#8896AB',
  },

  progressTimeText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.4,
    color: 'rgba(0, 19, 55, 0.5)',
  },

  progressItemsInnerContainer2: {
    gap: 5,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },

  codeInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  codeView: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(116, 170, 240, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  codeText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.2,
    color: '#001337',
  },
  codeDispatchText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 16.8,
    color: '#000000',
    width: 123,
  },
});
