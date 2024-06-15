import React from 'react';

import {useFocusEffect} from '@react-navigation/native';
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import orderUnchecked from '../../../assets/icons/unchecked-order-icon.png';
import seatNumbers from '../../../assets/json/seat-numbers.json';
import bell from '../../../assets/media/bell.png';
import {ActionButton} from '../../../components/ActionButton';
import DialogBox from '../../../components/DialogBox';
import {CheckBoxActive} from '../../../components/checkbox';
import {
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';
import {saveSeatNumber} from '../../../state-management/features/eateries/eateriesSlice';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default function EateryOrderTypeScreen(props) {
  const [theSelectedSeat, setTheSelectedSeat] = React.useState(null);
  const [selectSeat, setSelectSeat] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const dispatch = useDispatch();
  const eateries = useSelector(state => state.eateries);
  console.log(props.route.params, 'paramss');
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_WHITE);
      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  const handleSelectSeat = () => {
    setSelectSeat(!selectSeat);
    setIsVisible(!isVisible);
  };

  const handleTheSelectedSeat = seat => {
    setTheSelectedSeat(seat);
    dispatch(saveSeatNumber(seat));
    handleSelectSeat();
  };

  const handleNavigation = () => {
    if (props.route.params?.fromChangeSeat) {
      props.navigation.navigate('CheckoutEatInProceedScreen');
    } else {
      props.navigation.navigate('OpenEateries');
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.headerInnerContainer}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Feather name="arrow-left" size={18} color="#000000" />
            </TouchableOpacity>
            <Text style={styles.backText}>Kindly select your seat</Text>
          </View>
        </View>

        <View style={styles.noticeContainer}>
          <Image source={bell} />
          <Text style={styles.noticeText}>
            Seat Numbers are placed on top of your table
          </Text>
        </View>

        <View style={{marginTop: 25}}>
          <Text style={styles.selectSeatNumberInputText}>
            Select Seat Number
          </Text>
          <TouchableOpacity
            style={styles.selectSeatContainer}
            onPress={handleSelectSeat}>
            {theSelectedSeat !== null || eateries.seatNumber ? (
              <Text style={styles.selectSeatText}>
                {theSelectedSeat || eateries.seatNumber}
              </Text>
            ) : (
              <Text style={styles.seatText}>Enter Seat Number</Text>
            )}

            <AntDesign name="down" size={16} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btContainer}>
        <ActionButton
          title="Proceed"
          disabled={
            theSelectedSeat !== null || eateries.seatNumber !== null
              ? false
              : true
          }
          onPress={handleNavigation}
        />
      </View>
      <DialogBox isVisible={isVisible}>
        <View style={styles.dropDownContainer}>
          <View style={styles.dropDownInnerContainer}>
            <Text style={styles.selectNumberModalText}>Select Seat Number</Text>
            <TouchableOpacity onPress={handleSelectSeat}>
              <AntDesign name="right" size={16} color="#000000" />
            </TouchableOpacity>
          </View>
          <ScrollView
            contentContainerStyle={{paddingBottom: 20}}
            showsVerticalScrollIndicator={false}
            style={{width: '90%', alignSelf: 'center'}}>
            {seatNumbers.map((item, idx) => {
              return (
                <TouchableOpacity
                  onPress={() => handleTheSelectedSeat(item.number)}
                  key={item.value + idx}
                  style={styles.selectTheSeatView}>
                  <Text style={styles.selectSeatText}>{item.number}</Text>
                  {theSelectedSeat === item.number ||
                  eateries.seatNumber === item.number ? (
                    <CheckBoxActive />
                  ) : (
                    <Image source={orderUnchecked} />
                  )}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </DialogBox>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  contentContainer: {
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
    flex: 1,
    paddingBottom: 60,
    paddingTop: 50,
  },

  headerContainer: {},

  headerInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  titleText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21.6,

    color: '#000000',
  },
  selectSeatText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19.2,
    color: '#192426',
  },
  selectNumberModalText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: '#192426',
  },
  selectSeatNumberInputText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 16.8,
    color: '#192426',
  },
  seatText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: 'rgba(25, 36, 38, 0.3)',
  },

  noticeContainer: {
    width: '100%',
    height: 57,
    backgroundColor: 'rgba(116, 170, 240, 0.1)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginTop: 30,
  },
  noticeText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: 'rgba(116, 170, 240, 1)',
  },

  backText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 18,
    lineHeight: 21.6,
    fontWeight: '600',
    color: '#000000',
  },
  selectTheSeatView: {
    marginTop: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectSeatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#757C7D',
    borderRadius: 300,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginTop: 8,
  },
  dropDownContainer: {
    height: 290,
    width: '100%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(117, 124, 125, 0.1)',
    backgroundColor: 'white',
    marginTop: 163.5,
  },
  dropDownInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(116, 170, 240, 0.15)',
    width: '90%',
    alignSelf: 'center',
  },

  btContainer: {
    bottom: 40,
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
  },
});
