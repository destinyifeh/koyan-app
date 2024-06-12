import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {WebView} from 'react-native-webview';
import {
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../../constants/Styles';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function OrderMapViewScreen(props) {
  console.log(props.route.params?.mapUrl, 'propss');
  const {mapUrl} = props.route.params;
  const [canGoBack, setCanGoBack] = useState(false);
  const webviewRef = React.useRef(null);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  const handleNavigationStateChange = navState => {
    console.log(navState, 'navstateee');
    setCanGoBack(navState.canGoBack);
  };

  const handleBackPress = () => {
    if (canGoBack) {
      // webviewRef.current.goBack();
      props.navigation.goBack();
    } else {
      props.navigation.goBack();
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          position: 'absolute',
          top: 60,
          left: 10,
          zIndex: 10,
          backgroundColor: 'black',
          opacity: 0.75,
        }}>
        <TouchableOpacity style={{}} onPress={handleBackPress}>
          <Feather name="arrow-left" size={25} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <WebView
        // ref={webviewRef}
        source={{uri: mapUrl}}
        style={{flex: 1}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        onNavigationStateChange={handleNavigationStateChange}
        renderLoading={() => (
          <View style={{flex: 1}}>
            <ActivityIndicator size="large" color="#74AAF0" />
          </View>
        )}
        renderError={errorName => (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              Failed to load page: {errorName}
            </Text>
          </View>
        )}
      />
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
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(116, 170, 240, 0.2)',
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
});
