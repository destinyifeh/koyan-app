import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Platform,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import eateriesHome from '../../../assets/media/eateries-home.png';
import hotelsHome from '../../../assets/media/hotels-home.png';
import martHome from '../../../assets/media/mart-home.png';
import DialogBox from '../../../components/DialogBox';
import Loader from '../../../components/loader';
import {
  COLOUR_LIGHT_BLUE,
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';
import {LOCATION_UNAVAILABLE} from '../../../utils/contants';
import {
  requestAndroidLocationPermission,
  requestIosLocationPermission,
} from '../../../utils/permissions';
import {AroundYouItems} from './components/around-you-items';
import {ForYouItems} from './components/for-you-items';
import {HomeSearchBar} from './components/home-searchbar';
import {PromotionItems} from './components/promotion-items';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export default function HomeScreen(props) {
  const [isSearching, setIsSearching] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [location, setLocation] = React.useState('');
  const customerCurrentLocation = useSelector(state => state.global);
  const {userAddressData, userLocationData} = customerCurrentLocation;
  console.log(userAddressData, 'user addre');

  useFocusEffect(
    React.useCallback(() => {
      Platform.OS === 'android' && StatusBar.setBackgroundColor(COLOUR_WHITE);
      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  React.useEffect(() => {
    Platform.OS === 'ios'
      ? requestIosLocationPermission()
      : requestAndroidLocationPermission();
  }, []);

  React.useEffect(() => {
    if (userAddressData?.address) {
      const theLocation = `${userAddressData.address.city} ${userAddressData.address.state}`;
      getDataBasedOnCustomerLocation(theLocation);
      setLocation(
        `${userAddressData.address.city} ${userAddressData.address.state}`,
      );
    }
    if (userAddressData === LOCATION_UNAVAILABLE) {
      setLocation('');
      getFallBackData();
    }
  }, [userAddressData]);

  const getDataBasedOnCustomerLocation = async location => {
    console.log('data based on location...', location);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const getFallBackData = () => {
    console.log('data based on fall back...');
  };

  const onRefresh = React.useCallback(() => {
    //setRefreshing(true);
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 5000);
  }, []);

  const onSearchLocation = () => {
    console.log('search...');
    console.log(location, 'locationnn');
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 5000);
  };
  return (
    <View style={styles.mainContainer}>
      {userAddressData === null || userAddressData?.isLoading || isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Loader color={COLOUR_LIGHT_BLUE} />
        </View>
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl onRefresh={onRefresh} refreshing={isLoading} />
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop:
              Platform.OS === 'android' ? StatusBar.currentHeight : 50,
            paddingBottom: Platform.OS === 'android' ? 30 : 30,
          }}
          style={styles.mainContainer}>
          <View style={styles.contentContainer}>
            <HomeSearchBar
              onSearchLocation={onSearchLocation}
              location={location}
              setLocation={setLocation}
            />

            <View style={{flex: 1, marginTop: 19}}>
              <Text style={styles.aroundYouText}>Around You</Text>
              <ScrollView
                horizontal
                style={{marginTop: 8, flex: 1}}
                contentContainerStyle={styles.scrollableItems}
                showsHorizontalScrollIndicator={false}>
                <AroundYouItems />
                <AroundYouItems />
                <AroundYouItems />
              </ScrollView>
            </View>

            <View style={styles.categoriesContainer}>
              <Text style={styles.aroundYouText}>Categories</Text>

              <View style={styles.categoriesInnerContainer}>
                <TouchableOpacity
                  onPress={() =>
                    Alert.alert(null, 'This feature is not yet active.')
                  }>
                  <Image source={martHome} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Eateries')}>
                  <Image source={eateriesHome} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    Alert.alert(null, 'This feature is not yet active.')
                  }>
                  <Image source={hotelsHome} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.categoriesContainer}>
              <Text style={styles.aroundYouText}>Promotions</Text>

              <View style={{marginTop: 8}}>
                <PromotionItems />
              </View>
            </View>
            <View style={{flex: 1, marginTop: 19}}>
              <Text style={styles.aroundYouText}>For You</Text>
              <ScrollView
                horizontal
                style={{marginTop: 8, flex: 1}}
                contentContainerStyle={styles.scrollableItems}
                showsHorizontalScrollIndicator={false}>
                <ForYouItems />
                <ForYouItems />
                <ForYouItems />
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      )}

      <DialogBox isVisible={isSearching}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={styles.loaderContainer}>
            <Loader size={20} color={COLOUR_LIGHT_BLUE} />
          </View>
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
  },

  categoriesInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  titleText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'center',
    width: 324,
    color: '#000000',
  },
  contentTitleText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19.2,
    marginBottom: 22,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  descText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'center',
    maxWidth: '70%',
    alignSelf: 'center',
    marginTop: 7,
    color: 'grey',
  },
  aroundYouText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21.6,

    color: '#000000',
  },
  exploreItem: {
    marginTop: 10,
    left: 30,
  },

  categoriesContainer: {
    marginTop: 19,
  },
  scrollableItems: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  loaderContainer: {
    width: 75,
    height: 75,
    backgroundColor: 'white',
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
