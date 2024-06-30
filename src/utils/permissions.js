import {Alert, Linking, PermissionsAndroid} from 'react-native';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import {getLocationHandler} from '../helpers/location-service';
import {
  getUserAddressData,
  getUserLocationData,
} from '../state-management/features/global/globalSlice';
import {store} from '../state-management/store';
const requestAndroidLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Location permission granted');
      getLocationHandler();
    } else {
      console.log('Location permission denied', granted);

      store.dispatch(
        getUserLocationData('Unable to retrieve current location'),
      );
      store.dispatch(getUserAddressData('Location unavailable'));
      return Alert.alert(
        'Enable Location Access',
        'Enhance your experience by enabling location services for this app on your device.',
        [
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: 'Okay',
            onPress: () => Linking.openSettings(),
          },
        ],
      );
    }
  } catch (err) {
    console.warn(err, 'android location err');
  }
};

const requestIosLocationPermission = () => {
  request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
    .then(result => {
      console.log(result, 'location');
      if (result === RESULTS.GRANTED) {
        console.log('Location permission granted');
        getLocationHandler();
      } else {
        console.log('Location permission denied');
        store.dispatch(
          getUserLocationData('Unable to retrieve current location'),
        );
        store.dispatch(getUserAddressData('Location unavailable'));
        return Alert.alert(
          'Enable Location Access',
          'Enhance your experience by enabling location services for this app on your device.',
          [
            {
              text: 'Cancel',
              onPress: () => {},
              style: 'cancel',
            },
            {
              text: 'Okay',
              onPress: () => Linking.openSettings(),
            },
          ],
        );
      }
    })
    .catch(err => console.log(err, ' location error'));
};

export {requestAndroidLocationPermission, requestIosLocationPermission};
