import {StyleSheet, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export const ProgressBar = ({active, inactive, width, big}) => {
  return (
    <>
      <View
        style={[
          active
            ? styles.trackingBarActive
            : inactive
            ? styles.trackingBar
            : styles.trackingBarActive,
          {width: width ? width : big ? 103 : 40},
        ]}></View>
    </>
  );
};

export const ProgressForOngoingDeliveryBar = ({
  received,
  preparing,
  accepted,
  waiting,
  transit,
  arrived,
  delivered,
}) => {
  return (
    <>
      <View style={{}}>
        <View>
          <View
            style={{
              top: 4,
              right: 8,
            }}>
            <MaterialIcons
              name="radio-button-checked"
              color={received ? '#74AAF0' : '#8896AB'}
              size={18}
            />
          </View>
          <View
            style={
              received
                ? styles.progressVertical
                : styles.progressVerticalInactive
            }></View>

          <View
            style={{
              bottom: 2,
              right: 8,
            }}>
            <MaterialIcons
              name="radio-button-checked"
              color={preparing ? '#74AAF0' : '#8896AB'}
              size={18}
            />
          </View>
        </View>

        <View style={{bottom: 5}}>
          <View
            style={
              accepted
                ? styles.progressVertical
                : styles.progressVerticalInactive
            }></View>

          <View
            style={{
              bottom: 2,
              right: 8,
            }}>
            <MaterialIcons
              name="radio-button-checked"
              color={accepted ? '#74AAF0' : '#8896AB'}
              size={18}
            />
          </View>
        </View>

        <View style={{bottom: 10}}>
          <View
            style={
              waiting
                ? styles.progressVertical
                : styles.progressVerticalInactive
            }></View>

          <View
            style={{
              bottom: 2,
              right: 8,
            }}>
            <MaterialIcons
              name="radio-button-checked"
              color={waiting ? '#74AAF0' : '#8896AB'}
              size={18}
            />
          </View>
        </View>

        <View style={{bottom: 14}}>
          <View
            style={
              transit
                ? styles.progressVertical
                : styles.progressVerticalInactive
            }></View>

          <View
            style={{
              bottom: 2,
              right: 8,
            }}>
            <MaterialIcons
              name="radio-button-checked"
              color={transit ? '#74AAF0' : '#8896AB'}
              size={18}
            />
          </View>
        </View>

        <View style={{bottom: 18}}>
          <View
            style={
              arrived
                ? styles.progressVertical
                : styles.progressVerticalInactive
            }></View>

          <View
            style={{
              bottom: 2,
              right: 8,
            }}>
            <MaterialIcons
              name="radio-button-checked"
              color={arrived ? '#74AAF0' : '#8896AB'}
              size={18}
            />
          </View>
        </View>

        <View style={{bottom: 22}}>
          <View
            style={
              delivered
                ? styles.progressVertical
                : styles.progressVerticalInactive
            }></View>

          <View
            style={{
              bottom: 2,
              right: 8,
            }}>
            <MaterialIcons
              name="radio-button-checked"
              color={delivered ? '#74AAF0' : '#8896AB'}
              size={18}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export const ProgressOngoingOrdersBar = ({received, preparing, ready}) => {
  return (
    <>
      <View style={{}}>
        <View>
          <View
            style={{
              top: 4,
              right: 8,
            }}>
            <MaterialIcons
              name="radio-button-checked"
              color={received ? '#74AAF0' : '#8896AB'}
              size={18}
            />
          </View>
          <View
            style={
              received
                ? styles.progressVertical
                : styles.progressVerticalInactive
            }></View>
          <View
            style={{
              bottom: 3,
              right: 8,
            }}>
            <MaterialIcons
              name="radio-button-checked"
              color={preparing ? '#74AAF0' : '#8896AB'}
              size={18}
            />
          </View>
        </View>

        <View style={{bottom: 5}}>
          <View
            style={
              received
                ? styles.progressVertical
                : styles.progressVerticalInactive
            }></View>

          <View
            style={{
              bottom: 2,
              right: 8,
            }}>
            <MaterialIcons
              name="radio-button-checked"
              color={ready ? '#74AAF0' : '#8896AB'}
              size={18}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  trackingBar: {
    width: 40,
    borderWidth: 3,
    borderColor: 'rgba(116, 170, 240, 0.2)',
    borderRadius: 10,
  },

  trackingBarActive: {
    width: 40,
    borderWidth: 3,
    borderColor: '#74AAF0',
    borderRadius: 10,
  },

  progressVertical: {
    width: 2,
    height: 60,
    borderColor: '#74AAF0',
    backgroundColor: '#74AAF0',
  },
  progressVerticalInactive: {
    width: 2,
    height: 60,
    borderColor: '#8896AB',
    backgroundColor: '#8896AB',
  },
});
