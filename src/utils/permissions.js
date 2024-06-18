import {PermissionsAndroid, Platform} from 'react-native';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';
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
      //getLocationHandler();
    } else {
      console.log('Location permission denied');

      store.dispatch(
        getUserLocationData('Unable to retrieve current location'),
      );
      store.dispatch(getUserAddressData('Location unavailable'));
    }
  } catch (err) {
    console.warn(err);
  }
};

const requestLocationPermission = () => {
  request(
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  )
    .then(result => {
      console.log(result, 'location');
      if (result === RESULTS.GRANTED) {
        console.log('Location permission granted');
        // getLocationHandler();
      } else {
        console.log('Location permission denied');
        store.dispatch(
          getUserLocationData('Unable to retrieve current location'),
        );
        store.dispatch(getUserAddressData('Location unavailable'));
      }
    })
    .catch(err => console.log(err, ' location error'));
};

export {requestAndroidLocationPermission, requestLocationPermission};
