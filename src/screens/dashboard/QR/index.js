import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import approvedIcon from '../../../assets/icons/approve-cart.png';
import closeIcon from '../../../assets/icons/close-scan-modal.png';
import minusCart from '../../../assets/icons/minus-cart.png';
import plusCart from '../../../assets/icons/plus-cart.png';
import phoneScanBg from '../../../assets/media/phone-photo-scan.jpeg';
import scanBg2 from '../../../assets/media/scan-bg.jpeg';
import scanBg from '../../../assets/media/scan-bg2.png';
import scan1 from '../../../assets/media/scan3.jpeg';
import {ActionButton} from '../../../components/ActionButton';
import {
  COLOUR_LIGHT_BLUE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_THIN,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default function QRScreen() {
  const ref = React.useRef();
  const [scanContents, setScenContents] = React.useState(null);
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
      StatusBar.setBarStyle('white-content');
      setScenContents('ProceedContent');
    }, []),
  );

  React.useEffect(() => {
    // setScenContents('ProceedContent');
  }, []);

  const handleContentChange = content => {
    setScenContents(content);
  };

  const ProceedContent = () => {
    return (
      <Animatable.View style={{flex: 1}} animation="slideInUp">
        <ImageBackground
          source={scan1}
          imageStyle={{}}
          style={{width: '100%', height: deviceHeight * 0.5}}></ImageBackground>

        <ImageBackground
          source={scanBg}
          imageStyle={{}}
          style={{
            width: '100%',

            flexGrow: 1,
          }}>
          <ScrollView style={styles.contentContainer}>
            <Text style={styles.titleText}>Find a product to scan</Text>
            <View>
              <Text style={styles.descText}>
                Scan to checkout a product or shop and add to cart to seamlessly
                to checkout your shopping
              </Text>
            </View>
            <View style={{width: '70%', alignSelf: 'center'}}>
              <ActionButton
                onPress={() => handleContentChange('AddToCartContent')}
                title="Proceed to Scan"
              />

              <ActionButton
                title="Cancel"
                backgroundcolor="transparent"
                buttonStyle={{borderColor: COLOUR_LIGHT_BLUE, borderWidth: 1}}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </Animatable.View>
    );
  };

  const AddToCartContent = () => {
    return (
      <Animatable.View style={{flex: 1}} animation="slideInUp">
        <ImageBackground
          source={phoneScanBg}
          imageStyle={{}}
          style={{width: '100%', height: deviceHeight * 0.5}}></ImageBackground>

        <ImageBackground
          source={scanBg2}
          imageStyle={{borderTopRightRadius: 0}}
          style={{
            width: '100%',

            flexGrow: 1,
          }}>
          <ScrollView style={styles.contentContainer}>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => handleContentChange('ProceedContent')}>
              <Image source={closeIcon} />
            </TouchableOpacity>
            <Text style={[styles.titleText, {width: 240, alignSelf: 'center'}]}>
              Honeywell Spaghetti - 500g N12,000 per carton
            </Text>
            <View>
              <Text
                style={[
                  styles.descText,
                  {
                    marginVertical: 0,
                    marginTop: 25,

                    fontWeight: '300',
                    fontFamily: FONT_FAMILY_BODY_THIN,
                  },
                ]}>
                How many quantities are you buying?
              </Text>
            </View>
            <View style={styles.addItem}>
              <TouchableOpacity>
                <Image source={minusCart} />
              </TouchableOpacity>
              <Text style={styles.addItemText}>1</Text>
              <TouchableOpacity>
                <Image source={plusCart} />
              </TouchableOpacity>
            </View>
            <View style={styles.cartItemPrice}>
              <Text style={styles.priceText}>N10,000</Text>
            </View>
            <View style={{width: '70%', alignSelf: 'center'}}>
              <ActionButton
                title="Add to Cart"
                onPress={() => handleContentChange('ItemAddedContent')}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </Animatable.View>
    );
  };

  const ItemAddedContent = () => {
    return (
      <Animatable.View style={{flex: 1}} animation="slideInUp">
        <ImageBackground
          source={phoneScanBg}
          imageStyle={{}}
          style={{width: '100%', height: deviceHeight * 0.5}}></ImageBackground>

        <ImageBackground
          source={scanBg2}
          imageStyle={{borderTopRightRadius: 0}}
          style={{
            width: '100%',

            flexGrow: 1,
          }}>
          <ScrollView style={styles.contentContainer}>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => handleContentChange('ProceedContent')}>
              <Image source={closeIcon} />
            </TouchableOpacity>
            <Text style={styles.titleText}>Added Successfully!</Text>
            <View>
              <Text
                style={[
                  styles.descText,
                  {
                    marginVertical: 0,
                    marginTop: 25,

                    fontWeight: '300',
                    fontFamily: FONT_FAMILY_BODY_THIN,
                  },
                ]}>
                Honeywell Spaghetti - 500g has been added to your cart
              </Text>
            </View>
            <View style={styles.addItem}>
              <Image source={approvedIcon} />
            </View>

            <View style={{width: '70%', alignSelf: 'center'}}>
              <ActionButton title="Continue Shopping" />

              <ActionButton
                title="Proceed to Checkout"
                backgroundcolor="transparent"
                buttonStyle={{borderColor: COLOUR_LIGHT_BLUE, borderWidth: 1}}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </Animatable.View>
    );
  };

  const scanContentComponents = {
    proceedContent: ProceedContent,
    AddToCartContent: AddToCartContent,
    ItemAddedContent: ItemAddedContent,
  };
  const Component = scanContentComponents[scanContents];

  return <>{Component ? <Component /> : <ProceedContent />}</>;
}

const styles = StyleSheet.create({
  titleText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.2,
    textAlign: 'center',
    color: 'white',
  },

  descText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19.2,
    textAlign: 'center',
    color: 'white',
    width: 268,
    alignSelf: 'center',
    marginVertical: 40,
  },
  contentContainer: {
    flex: 1,
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
    marginTop: 20,
  },
  addItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
    alignSelf: 'center',
    marginTop: 15,
  },
  addItemText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.2,
    color: 'white',
  },
  priceText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 55,
    fontWeight: '600',
    lineHeight: 66,
    color: 'white',
    textAlign: 'center',
  },
  cartItemPrice: {
    marginTop: 25,
    marginBottom: 10,
  },
});
