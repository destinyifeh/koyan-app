import React from 'react';
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
import restaurantitem from '../../../assets/media/resturant-item.png';
import {
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';

import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import plusCart from '../../../assets/icons/plus-cart.png';
import {ActionButton} from '../../../components/ActionButton';
import {SuccessShoppingOrderSheet} from './components/success-sheet';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default function OrderDescriptionScreen(props) {
  const [navValue, setNavValue] = React.useState(null);
  const sheetRef = React.useRef();
  const eateries = useSelector(state => state.eateries);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_WHITE);
      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  React.useEffect(() => {
    setNavValue('all');
  }, []);

  const handleNavChange = nav => {
    setNavValue(nav);
  };

  const handleCloseSheet = React.useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const handleCheckoutNavigation = () => {
    const {orderType} = eateries;
    handleCloseSheet();
    props.navigation.navigate(orderType.route);
  };

  const AdditionalContents = () => {
    return (
      <>
        <View style={{}}>
          <Text style={styles.additionalText}>Additions</Text>
          <View style={styles.theEateryContainer}>
            <View>
              <Text style={styles.additionalTextDesc}>
                Take-away Pack (1,000ml with Lid)
              </Text>
              <Text style={[styles.additionalTextDesc, {color: '#74AAF0'}]}>
                N1400
              </Text>
            </View>
            <TouchableOpacity style={{top: 2.5}}>
              <Image source={plusCart} style={{width: 17, height: 17}} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginTop: 10}}>
          <Text style={styles.additionalText}>Choose your Drink</Text>
          <View style={styles.theEateryContainer}>
            <View>
              <Text style={styles.additionalTextDesc}>
                Fanta Orange 35cl PET
              </Text>
              <Text style={[styles.additionalTextDesc, {color: '#74AAF0'}]}>
                N1400
              </Text>
            </View>
            <TouchableOpacity style={{top: 2.5}}>
              <Image source={plusCart} style={{width: 17, height: 17}} />
            </TouchableOpacity>
          </View>
          <View style={styles.theEateryContainer}>
            <View>
              <Text style={styles.additionalTextDesc}>Eva water 50cl PET</Text>
              <Text style={[styles.additionalTextDesc, {color: '#74AAF0'}]}>
                N1400
              </Text>
            </View>
            <TouchableOpacity style={{top: 2.5}}>
              <Image source={plusCart} style={{width: 17, height: 17}} />
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentContainer}
        contentContainerStyle={{
          paddingBottom: 100,
        }}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Feather name="arrow-left" size={18} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.backText}>Back</Text>
        </View>

        <View style={{marginTop: 20}}>
          <Text style={styles.titleText}>Jollof Rice and Curry Chicken</Text>
          <Text style={styles.mainPriceText}>N1400</Text>
        </View>

        <View style={{marginTop: 13}}>
          <Image
            source={restaurantitem}
            style={{width: '100%', height: 186, borderRadius: 10}}
          />
        </View>

        <View style={{marginTop: 10}}>
          <Text style={styles.mainDescText}>
            Two mouth watering pieces of soulfully spiced Jollof rice + a
            refreshing PET drink.
          </Text>
        </View>
        <View style={styles.AdditionalContentsContainer}>
          <AdditionalContents />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <ActionButton
          title="Add to Cart"
          onPress={() => sheetRef.current?.open()}
        />
      </View>
      <SuccessShoppingOrderSheet
        handleCloseSheet={handleCloseSheet}
        sheetRef={sheetRef}
        handleCheckoutNavigation={handleCheckoutNavigation}
      />
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
    paddingTop: 50,
  },

  headerContainer: {
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
  additionalTextDesc: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: '#000000',
  },
  additionalText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,

    color: '#000000',
  },
  mainDescText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,

    color: '#000000',
  },

  mainPriceText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19.22,
    marginTop: 5,
    color: '#000000',
  },

  AdditionalContentsContainer: {
    marginVertical: 15,
  },
  theEateryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(116, 170, 240, 0.15)',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
  },
  backText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    color: '#000000',
  },
});
