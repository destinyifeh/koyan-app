import {useFocusEffect} from '@react-navigation/native';
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
import eateriesHome from '../../../assets/media/eateries-home.png';
import hotelsHome from '../../../assets/media/hotels-home.png';
import martHome from '../../../assets/media/mart-home.png';
import {
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';
import {AroundYouItems} from './components/around-you-items';
import {ForYouItems} from './components/for-you-items';
import {HomeSearchBar} from './components/home-searchbar';
import {PromotionItems} from './components/promotion-items';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export default function HomeScreen(props) {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_WHITE);
      StatusBar.setBarStyle('dark-content');
    }, []),
  );
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <HomeSearchBar />

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
            <TouchableOpacity>
              <Image source={martHome} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Eateries')}>
              <Image source={eateriesHome} />
            </TouchableOpacity>

            <TouchableOpacity>
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
    paddingTop: 19,
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
});
