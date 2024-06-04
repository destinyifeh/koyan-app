import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import removeOrderIcon from '../../../../assets/icons/remove-checkout-order.png';
import restaurantitem from '../../../../assets/media/resturant-item.png';
import {ActionButton} from '../../../../components/ActionButton';
import {KoyanBottomDrawer} from '../../../../components/KoyanBottomDrawer';
import {
  COLOUR_LIGHT_BLUE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../../constants/Styles';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export const CheckoutOrderRemovalModal = ({removalSheet, onRemoveOrder}) => {
  return (
    <KoyanBottomDrawer
      refRBSheet={removalSheet}
      height={deviceHeight * 0.35}
      containerStyle={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentContainer}
        contentContainerStyle={{paddingBottom: 20}}>
        <View style={styles.confirmOrderView}>
          <Text style={styles.titleText}>Confirm Order Removal</Text>
          <TouchableOpacity onPress={() => removalSheet.current?.close()}>
            <Image source={removeOrderIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.itemContainer}>
          <Image
            source={restaurantitem}
            style={{width: 109, height: 87.95, borderRadius: 10}}
          />

          <Text style={styles.descText}>
            Are you sure you want to remove Jollof Rice and Curry Chicken from
            your order?
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={{width: 128}}>
            <ActionButton
              onPress={() => removalSheet.current?.close()}
              title="No, Go Back"
              color="#74AAF0"
              backgroundcolor="transparent"
              buttonStyle={{borderColor: COLOUR_LIGHT_BLUE, borderWidth: 1}}
            />
          </View>
          <View style={{width: 189}}>
            <ActionButton onPress={onRemoveOrder} title="Yes Remove" />
          </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  titleText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.2,
    color: '#000000',
  },

  orderText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.2,
    color: '#000000',
  },

  descText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: '#000000',
    maxWidth: 200,
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

  confirmOrderView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginTop: 25,
  },

  descContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addItemText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.2,
    color: 'white',
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
    marginBottom: 40,
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginTop: 20,
  },
});
