import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {ProgressOngoingOrdersBar} from '../../../../../components/progress-bar';
import {
  FONT_FAMILY_BODY,
  MAX_ALLOWED_WIDTH,
} from '../../../../../constants/Styles';
const deviceWidth = Dimensions.get('window').width;
export const OngoingOrderStatuses = ({deliveryStatus}) => {
  return (
    <View style={{}}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <ProgressOngoingOrdersBar
          received={deliveryStatus.received}
          preparing={deliveryStatus.preparing}
          ready={deliveryStatus.ready}
        />

        <View style={styles.progressItemsContainer}>
          <View style={styles.progressItemsInnerContainer}>
            <View style={styles.progressItemsInnerContainer2}>
              <Text
                style={
                  deliveryStatus.received
                    ? styles.progressTitleText
                    : styles.progressTitleTextInactive
                }>
                Order Received
              </Text>
              <Text
                style={
                  deliveryStatus.received
                    ? styles.progressDescText
                    : styles.progressDescTextInactive
                }>
                Waiting for Vendor to confirm your order
              </Text>
            </View>
            {deliveryStatus.received && (
              <Text style={styles.progressTimeText}>11:30am</Text>
            )}
          </View>

          <View style={styles.progressItemsInnerContainer}>
            <View style={styles.progressItemsInnerContainer2}>
              <Text
                style={
                  deliveryStatus.preparing
                    ? styles.progressTitleText
                    : styles.progressTitleTextInactive
                }>
                Preparing your order
              </Text>
              <Text
                style={
                  deliveryStatus.preparing
                    ? styles.progressDescText
                    : styles.progressDescTextInactive
                }>
                Your order will be ready in 30 minutes
              </Text>
            </View>
            {deliveryStatus.preparing && (
              <Text style={styles.progressTimeText}>11:30am</Text>
            )}
          </View>

          <View style={styles.progressItemsInnerContainer}>
            <View style={styles.progressItemsInnerContainer2}>
              <Text
                style={
                  deliveryStatus.ready
                    ? styles.progressTitleText
                    : styles.progressTitleTextInactive
                }>
                Order is Ready
              </Text>
              <Text
                style={
                  deliveryStatus.ready
                    ? styles.progressDescText
                    : styles.progressDescTextInactive
                }>
                Your Order is ready for pickup
              </Text>
            </View>
            {deliveryStatus.ready && (
              <Text style={styles.progressTimeText}>11:30am</Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
    marginTop: 20,
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
});
